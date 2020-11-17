///////////////////////////////////////////////////////////////////////////////////
// Copyright (c) 2015-2017 Konstantin Kliakhandler				 //
// 										 //
// Permission is hereby granted, free of charge, to any person obtaining a copy	 //
// of this software and associated documentation files (the "Software"), to deal //
// in the Software without restriction, including without limitation the rights	 //
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell	 //
// copies of the Software, and to permit persons to whom the Software is	 //
// furnished to do so, subject to the following conditions:			 //
// 										 //
// The above copyright notice and this permission notice shall be included in	 //
// all copies or substantial portions of the Software.				 //
// 										 //
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR	 //
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,	 //
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE	 //
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER	 //
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, //
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN	 //
// THE SOFTWARE.								 //
///////////////////////////////////////////////////////////////////////////////////


(async function () {


  class Capture {

   createCaptureURI() {
     var protocol = "capture";
     var template = (this.selection_text != "" ? this.selectedTemplate : this.unselectedTemplate);
     if (this.useNewStyleLinks)
       return "org-protocol://"+protocol+"?template="+template+'&url='+this.encoded_url+'&title='+this.escaped_title+'&body='+this.selection_text;
     else
       return "org-protocol://"+protocol+":/"+template+'/'+this.encoded_url+'/'+this.escaped_title+'/'+this.selection_text;
    }

    getDomain(url) {
      return url.match('https?:\/\/([^\/]+?)/.*')[1];
    }

    async getSelectionTxt() {
        let sel = window.getSelection();
        return new Promise(async (resolve, reject)=>{
          var html = "";
          if (typeof window.getSelection != "undefined") {
            if (sel.rangeCount) {
              var container = document.createElement("div");
              for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
              }
              html = container.innerHTML;
            } }
            else if (typeof document.selection != "undefined") { if (document.selection.type == "Text") { html = document.selection.createRange().htmlText; } }
            var relToAbs = function(href) {
              var a = document.createElement("a");
              a.href = href;
              var abs = a.protocol + "//" + a.host + a.pathname + a.search + a.hash;
              a.remove();
              return abs;
            };
            var elementTypes = [
            ['a', 'href'],
            ['img', 'src']
            ];
            var div = document.createElement('div');
            div.innerHTML = html;
            elementTypes.map(function(elementType) { var elements = div.getElementsByTagName(elementType[0]); for (var i = 0; i < elements.length; i++) { elements[i].setAttribute(elementType[1], relToAbs(elements[i].getAttribute(elementType[1]))); } });
            let iframeIssueSites = ['medium.com', 'towardsdatascience.com'];
            if (iframeIssueSites.includes(this.getDomain(location.href))) {
              let d = await this.cleanIFrames(div);
              this.selection_html = d.innerHTML;
            }
            else {
              this.selection_html = div.innerHTML;
            }
            chrome.runtime.sendMessage(
              {html: this.selection_html, url: this.location.href},
              org_txt => {
                this.selection_text = escapeIt(org_txt);
                resolve();
              }
              );
        })
    }

    cleanIFrames(domElem) {
      return new Promise((resolve, reject)=>{
        let iframes = domElem.querySelectorAll('iframe');
        let ps = []
        for (let f of iframes) {
          let d = document.createElement('div');
          let src = f.src;
          ps.push(fetch(src).then(res=>{
            return res.text().then(t=>{
              d.innerHTML = t;
              let ss = d.querySelectorAll('script');
              for (let s of ss) {
                if (s.src) {
                  let newScriptTags = document.createElement('div');
                  newScriptTags.setAttribute('gistLink', s.src);
                  f.parentNode.appendChild(newScriptTags);
                }
              }
            })
          }));
        }
        Promise.all(ps).then(()=>{
          resolve(domElem);
        });
      })
    }

    constructor() {
      this.window = window;
      this.document = document;
      this.location = location;
      this.selection_text = "";
      // this.selection_text = escapeIt(window.getSelection().toString());
      this.encoded_url = encodeURIComponent(location.href);
      this.escaped_title = escapeIt(document.title);

    }

    capture() {
      var uri = this.createCaptureURI();

      if (this.debug) {
        logURI(uri);
      }

      location.href = uri;

      if (this.overlay) {
        toggleOverlay();
      }
    }

    captureIt(options) {
      if (chrome.runtime.lastError) {
        alert("Could not capture url. Error loading options: " + chrome.runtime.lastError.message);
        return;
      }

      if (this.selection_text) {
        this.template = this.selectedTemplate;
        this.protocol = this.selectedProtocol;
      } else {
        this.template = this.unselectedTemplate;
        this.protocol = this.unselectedProtocol;
      }

      for(var k in options) this[k] = options[k];
      this.capture();
    }
  }


  function replace_all(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  function escapeIt(text) {
    return replace_all(replace_all(replace_all(encodeURIComponent(text), "[(]", escape("(")),
                                   "[)]", escape(")")),
                       "[']" ,escape("'"));
  }

  function logURI(uri) {
    window.console.log("Capturing the following URI with new org-protocol: ", uri);
    return uri;
  }

  function toggleOverlay() {
    var outer_id = "org-capture-extension-overlay";
    var inner_id = "org-capture-extension-text";
    if (! document.getElementById(outer_id)) {
      var outer_div = document.createElement("div");
      outer_div.id = outer_id;

      var inner_div = document.createElement("div");
      inner_div.id = inner_id;
      inner_div.innerHTML = "Captured";

      outer_div.appendChild(inner_div);
      document.body.appendChild(outer_div);

      var css = document.createElement("style");
      css.type = "text/css";
      // noinspection JSAnnotator
      css.innerHTML = `#org-capture-extension-overlay {
        position: fixed; /* Sit on top of the page content */
        display: none; /* Hidden by default */
        width: 100%; /* Full width (cover the whole page) */
        height: 100%; /* Full height (cover the whole page) */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.2); /* Black background with opacity */
        z-index: 1; /* Specify a stack order in case you're using a different order for other elements */
        cursor: pointer; /* Add a pointer on hover */
    }

    #org-capture-extension-text{
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 50px;
    color: white;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
}`;
        document.body.appendChild(css);
    }

    function on() {
      document.getElementById(outer_id).style.display = "block";
    }

    function off() {
      document.getElementById(outer_id).style.display = "none";
    }

    on();
    setTimeout(off, 200);

  }


  var capture = new Capture();
  await capture.getSelectionTxt();
  var f = function (options) {capture.captureIt(options)};
  chrome.storage.sync.get(null, f);
})();
