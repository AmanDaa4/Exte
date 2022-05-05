// ==UserScript==
// @name         tset
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


function addCss(cssCode) {
    var styleElement = document.createElement("style");
    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = cssCode;
    } else {
      styleElement.appendChild(document.createTextNode(cssCode));
    }
    document.getElementsByTagName("head")[0].appendChild(styleElement);
  }
  
  /**
   * @param {string} url
   */
  async function $import(url) {
    let css = await fetch(url).then((x) => x.text());
    addCss(css);
  }
  
  /**
   * @param {string} url
   */
  async function $require(url) {
    let js = await fetch(url).then((x) => x.text());
    Function(js)();
  }
  
  let uBababot = {
    cImport: $import,
    jRequire: $require,
  };
  window["uBababot"] = uBababot;
  
  Function.prototype.clone = function() {
      var that = this;
      var temp = function temporary() { return that.apply(this, arguments); };
      for(var key in this) {
          if (this.hasOwnProperty(key)) {
              temp[key] = this[key];
          }
      }
      return temp;
  };
  

