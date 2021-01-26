
(async function () {

  class Capture {

    MD5(txt) {
      let _MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
      return _MD5(txt)
    }

    stripInvalidFileNameChars(s){
      return s.replace(/[/\\?%*:|"<>]/g, '-');
    }

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
            this.selection_html += `\n${this.location.href}`
            chrome.runtime.sendMessage({
                html: this.selection_html,
                url: this.location.href,
                sig: this.MD5(this.location.href),
                title: this.document.title,
                filename: this.stripInvalidFileNameChars(this.document.title+'.org')
              },
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
