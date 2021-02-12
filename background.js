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

chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == 'install')
    chrome.storage.sync.set({
      selectedTemplate: 'p',
      unselectedTemplate: 'L',
      useNewStyleLinks: true,
      debug: false,
      overlay: true,
    });
  else if (
    details.reason == 'update' &&
    details.previousVersion.startsWith('0.1')
  )
    chrome.storage.sync.set({
      selectedTemplate: 'p',
      unselectedTemplate: 'L',
      useNewStyleLinks: false,
      debug: false,
      overlay: true,
    });
});

function fetchOrg(req) {
  const url = `http://vimaladevasimha.com:5000/`;
  // const url = `http://82.156.46.186:5000`;
  let formData = new FormData();
  Object.keys(req).forEach((k) => {
    formData.append(k, req[k]);
  });
  return fetch(url, {
    method: 'POST',
    body: formData,
  })
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      return data;
      // sendResponse(data);
      // chrome.browserAction.setBadgeText({text: ""});
    })
    .catch((e) => {
      console.error(e);
    });
}

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({ file: 'capture.js' });
});

// chrome.downloads.onDeterminingFilename.addListener(function (item, suggest) {
//   suggest({filename: `./${item.filename}.org`});
// });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  chrome.browserAction.setBadgeText({ text: '@@' });
  // const {html, url, sig} = request;
  fetchOrg(request).then((res) => {
    chrome.browserAction.setBadgeText({ text: '' });
    let blob = new Blob([res], { type: 'org/plain' });
    var url = URL.createObjectURL(blob);
    chrome.downloads.download({
      url: url,
      filename: request.filename,
    });
  });
  return true;
});
