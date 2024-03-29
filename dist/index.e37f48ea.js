// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"f0HGD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var _modelJs = require("./model.js");
var _viewJs = require("./view.js");
// --------- LOAD INITIAL FEATURED TRENDING FROM API BY RANDOM ---------
const loadInitial = async function() {
    try {
        const data = await _modelJs.getTrendingMovies();
        _viewJs.renderHome(data);
    } catch (error) {
        console.log(error);
        _viewJs.errorRender();
    }
};
const loadGenre = async function(query) {
    try {
        const result = await _modelJs.searchMoviesGenre(query);
        _viewJs.renderGenre(result, query);
    } catch (error) {
        console.log(error);
        _viewJs.errorRender();
    }
};
const loadWatch = async function(query) {
    try {
        const result = await _modelJs.searchMovies(query);
        if (document.querySelector(".featured")) _viewJs.renderWatch(result, query);
        else {
            const data = await _modelJs.getTrendingMovies();
            _viewJs.renderHome(data);
            _viewJs.renderWatch(result, query);
        }
    } catch (error) {
        console.log(error);
        _viewJs.errorRender();
    }
};
const loadSearch = async function(query) {
    try {
        const result = await _modelJs.searchMovies(query);
        _viewJs.renderSearch(result, query);
    } catch (error) {
        console.log(error);
        _viewJs.errorRender();
    }
};
const pass2LocalStorage = async function(query, id) {
    try {
        await _modelJs.saveLocalStorage(query, id);
        _viewJs.modalConfirmation("Movie has been added");
    } catch (error) {
        console.log(error.message);
        _viewJs.modalConfirmation(error.message);
    }
};
const deleteFromLocalStorage = function(id) {
    _modelJs.deleteLocalStorageItem(id);
    _viewJs.watchListRender();
};
const init = function() {
    loadInitial();
    _viewJs.genreHandler(loadGenre);
    _viewJs.homeHandler(loadInitial);
    _viewJs.watchHandler(loadWatch);
    _viewJs.searchHandler(loadSearch);
    _viewJs.localStorageHandler(pass2LocalStorage);
    _viewJs.deleteButtonHandler(deleteFromLocalStorage);
    _viewJs.mobileHomeHandler(loadInitial);
    _viewJs.mobileGenreHandler(loadGenre);
};
init();

},{"./model.js":"Y4A21","./view.js":"ky8MP"}],"Y4A21":[function(require,module,exports) {
// fetch(`/.netlify/functions/fetch-movie?query=${mySearch}`).then((response) =>
//   console.log(response.json())
// );
// fetch(`/.netlify/functions/fetch-movie`).then((response) =>
//   console.log(response.json())
// );
// https://api.themoviedb.org/3/discover/movie?api_key=###&with_genres=28
//by id
//https://api.themoviedb.org/3/movie/343611?api_key=###
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "trendingArray", ()=>trendingArray);
parcelHelpers.export(exports, "searchArray", ()=>searchArray);
parcelHelpers.export(exports, "getTrendingMovies", ()=>getTrendingMovies);
parcelHelpers.export(exports, "searchMovies", ()=>searchMovies);
parcelHelpers.export(exports, "searchMoviesGenre", ()=>searchMoviesGenre);
parcelHelpers.export(exports, "saveLocalStorage", ()=>saveLocalStorage);
parcelHelpers.export(exports, "deleteLocalStorageItem", ()=>deleteLocalStorageItem);
const trendingArray = [];
const searchArray = [];
const watchListArray = localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [];
const getTrendingMovies = async function() {
    try {
        const response = await fetch(`/.netlify/functions/fetch-movie`);
        const movies = await response.json();
        const data = movies.results;
        data.forEach((item)=>{
            trendingArray.push(item);
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
const searchMovies = async function(query) {
    try {
        const response = await fetch(`/.netlify/functions/fetch-movie?query=${query}`);
        const movies = await response.json();
        const data = movies.results;
        return data;
    } catch (error) {
        console.log(error);
    }
};
const searchMoviesGenre = async function(query) {
    try {
        const response = await fetch(`/.netlify/functions/fetch-movie?with_genres=${query}`);
        const movies = await response.json();
        const data = movies.results;
        return data;
    } catch (error) {
        console.log(error);
    }
};
const saveLocalStorage = async function(query, id) {
    try {
        const response = await fetch(`/.netlify/functions/fetch-movie?query=${query}`);
        const movies = await response.json();
        const data = movies.results;
        const watchList = localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [];
        data.forEach((movie)=>{
            if (watchList.length === 0 || movie.id === Number(id)) {
                const duplicateCheck = watchList.some((listItem)=>listItem.id === movie.id);
                if (duplicateCheck === false) {
                    watchList.push(movie);
                    localStorage.setItem("watchList", JSON.stringify(watchList));
                } else {
                    console.log("Movie is already in your watchlist");
                    throw new Error("Movie is already in your watchlist");
                }
            }
        });
    } catch (error) {
        throw error;
    }
};
const deleteLocalStorageItem = function(id) {
    const watchList = localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [];
    const filteredArray = watchList.filter((movie)=>{
        if (movie.id !== Number(id)) return movie;
    });
    localStorage.setItem("watchList", JSON.stringify(filteredArray));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ky8MP":[function(require,module,exports) {
// --------- DROPDOWN MENU ---------
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "modalConfirmation", ()=>modalConfirmation);
parcelHelpers.export(exports, "localStorageHandler", ()=>localStorageHandler);
parcelHelpers.export(exports, "renderHome", ()=>renderHome);
parcelHelpers.export(exports, "homeHandler", ()=>homeHandler);
parcelHelpers.export(exports, "mobileHomeHandler", ()=>mobileHomeHandler);
parcelHelpers.export(exports, "mobileGenreHandler", ()=>mobileGenreHandler);
parcelHelpers.export(exports, "renderGenre", ()=>renderGenre);
parcelHelpers.export(exports, "genreHandler", ()=>genreHandler);
parcelHelpers.export(exports, "watchHandler", ()=>watchHandler);
parcelHelpers.export(exports, "renderWatch", ()=>renderWatch);
parcelHelpers.export(exports, "searchHandler", ()=>searchHandler);
parcelHelpers.export(exports, "renderSearch", ()=>renderSearch);
parcelHelpers.export(exports, "deleteButtonHandler", ()=>deleteButtonHandler);
parcelHelpers.export(exports, "watchListRender", ()=>watchListRender);
parcelHelpers.export(exports, "errorRender", ()=>errorRender);
document.addEventListener("click", (e)=>{
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    const caret = document.querySelector(".fa-caret-down");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;
    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
        caret.classList.toggle("fa-caret-down__rotate");
    }
    document.querySelectorAll("[data-dropdown].active").forEach((dropdown)=>{
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
        caret.classList.remove("fa-caret-down__rotate");
    });
});
// --------- GENRE ID FROM API ---------
const genreID = {
    action: 28,
    adventure: 12,
    animation: 16,
    comedy: 35,
    crime: 80,
    documentary: 99,
    drama: 18,
    family: 10751,
    fantasy: 14,
    history: 36,
    horror: 27,
    music: 10402,
    mystery: 9648,
    romance: 10749,
    science_fiction: 878,
    tv_movie: 10770,
    thriller: 53,
    war: 10752,
    western: 37
};
// --------- HELPER FUNCTIONS ---------
const firstLetterCapitalize = function(word) {
    const firstLetter = word.charAt(0).toUpperCase();
    const remaining = word.slice(1);
    return `${firstLetter}${remaining}`;
};
const convertKey2Title = function(id) {
    for (const [key, value] of Object.entries(genreID))if (id === value) {
        if (key.includes("_")) {
            const split = key.split("_");
            return split.map((word)=>firstLetterCapitalize(word)).join(" ");
        } else return firstLetterCapitalize(key);
    }
};
const generateGenre = function(data) {
    return data.genre_ids.map((id)=>{
        for (const [key, value] of Object.entries(genreID))if (id === value) {
            if (key.includes("_")) {
                const split = key.split("_");
                return split.map((word)=>firstLetterCapitalize(word)).join(" ");
            } else return firstLetterCapitalize(key);
        }
    }).join(", ");
};
const modalConfirmation = function(message) {
    const modal = document.querySelector(".modal");
    const modalMessage = document.querySelector(".modal__message");
    modalMessage.textContent = message;
    modal.classList.add("active");
    setTimeout(()=>{
        modal.classList.remove("active");
    }, 3000);
};
const localStorageHandler = function(handler) {
    document.addEventListener("click", function(e) {
        if (e.target.matches(".featured__list") || e.target.matches(".swiper-list-button") || e.target.matches(".movie-grid__list-button")) handler(clickedTitle, clickedID);
    });
};
const renderHome = function(data) {
    const random = Math.floor(Math.random() * 20);
    const randomSelectedMovie = data[random];
    const imgPath = "https://image.tmdb.org/t/p/original";
    const genre = generateGenre(randomSelectedMovie);
    document.body.style.backgroundImage = `linear-gradient(to bottom right, rgba(13, 16, 24, 0.8), rgba(0, 0, 0, 0.9)), url(${imgPath}${randomSelectedMovie.backdrop_path})`;
    // CREATE FEATURED MOVIE ELEMENTS ----------------
    const container = document.createElement("div");
    container.classList.add("container");
    const featured = document.createElement("section");
    featured.classList.add("featured");
    const featuredTitle = document.createElement("h1");
    featuredTitle.classList.add("featured__title");
    featuredTitle.textContent = randomSelectedMovie.title;
    const featuredInfo = document.createElement("div");
    featuredInfo.classList.add("featured__info");
    const featuredDate = document.createElement("h2");
    featuredDate.classList.add("featured__date");
    featuredDate.textContent = randomSelectedMovie.release_date.slice(0, 4);
    const featuredGenre = document.createElement("h2");
    featuredGenre.classList.add("featured__genre");
    featuredGenre.textContent = genre;
    const featuredOverview = document.createElement("p");
    featuredOverview.classList.add("featured__overview");
    featuredOverview.dataset.title = randomSelectedMovie.title;
    featuredOverview.dataset.movie_id = randomSelectedMovie.id;
    featuredOverview.textContent = randomSelectedMovie.overview;
    const featuredWatch = document.createElement("button");
    featuredWatch.classList.add("featured__watch");
    featuredWatch.textContent = "Start";
    const featuredList = document.createElement("button");
    featuredList.classList.add("featured__list");
    featuredList.textContent = "Add to List";
    featuredList.addEventListener("click", function() {
        clickedTitle = this.previousSibling.previousSibling.dataset.title;
        clickedID = this.previousSibling.previousSibling.dataset.movie_id;
        modalConfirmation();
    });
    // CREATE SWIPER ELEMENTS ----------------
    const swiper = document.createElement("div");
    swiper.classList.add("swiper");
    const swiperWrapper = document.createElement("div");
    swiperWrapper.classList.add("swiper-wrapper");
    const swiperPrev = document.createElement("div");
    swiperPrev.classList.add("swiper-button-prev");
    const swiperNext = document.createElement("div");
    swiperNext.classList.add("swiper-button-next");
    // ATTACH ELEMENTS ----------------
    main.innerHTML = "";
    featuredInfo.appendChild(featuredDate);
    featuredInfo.appendChild(featuredGenre);
    featured.appendChild(featuredTitle);
    featured.appendChild(featuredInfo);
    featured.appendChild(featuredOverview);
    featured.appendChild(featuredWatch);
    featured.appendChild(featuredList);
    container.appendChild(featured);
    swiper.appendChild(swiperWrapper);
    swiper.appendChild(swiperPrev);
    swiper.appendChild(swiperNext);
    container.appendChild(swiper);
    main.appendChild(container);
    populateSlider(data, swiperWrapper);
};
const navLogo = document.getElementById("nav-logo");
const navHome = document.getElementById("nav-home");
const homeHandler = function(handler) {
    navLogo.addEventListener("click", handler);
    navHome.addEventListener("click", handler);
};
// --------- HOME PAGE SLIDER ---------
const populateSlider = function(data, container) {
    const imgPath = "https://image.tmdb.org/t/p/original";
    data.forEach((movie)=>{
        const newDIV = document.createElement("div");
        newDIV.classList.add("swiper-slide");
        const newImg = document.createElement("img");
        newImg.classList.add("swiper-img");
        newImg.dataset.title = movie.original_title;
        newImg.dataset.movie_id = movie.id;
        newImg.src = `${imgPath}${movie.poster_path}`;
        const newWatchButton = document.createElement("button");
        newWatchButton.classList.add("swiper-watch-button");
        newWatchButton.textContent = "Watch";
        newWatchButton.addEventListener("click", function() {
            clickedTitle = this.previousSibling.dataset.title;
            clickedID = this.previousSibling.dataset.movie_id;
        });
        const newListButton = document.createElement("button");
        newListButton.classList.add("swiper-list-button");
        newListButton.textContent = "Add to List";
        newListButton.addEventListener("click", function() {
            clickedTitle = this.previousSibling.previousSibling.dataset.title;
            clickedID = this.previousSibling.previousSibling.dataset.movie_id;
        // modalConfirmation();
        });
        newDIV.appendChild(newImg);
        newDIV.appendChild(newWatchButton);
        newDIV.appendChild(newListButton);
        container.appendChild(newDIV);
    });
    // SWIPER ------------------------------
    const swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: "true"
        },
        mousewheel: {
            invert: true
        },
        keyboard: {
            enabled: true
        },
        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 460px
            460: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 720px
            720: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            // when window width is >= 1000px
            1000: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            // when window width is >= 1400px
            1400: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            // when window width is >= 1700px
            1700: {
                slidesPerView: 5,
                spaceBetween: 40
            }
        }
    });
};
// --------- MOBILE MENU HAMBURGER ---------
const main = document.querySelector(".main");
const hamburgerMenu = document.querySelector(".mobile-menu__hamburger");
const mobileMenu = document.querySelector(".mobile-menu__off-screen");
hamburgerMenu.addEventListener("click", function() {
    main.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});
// --------- MOBILE MENU ---------
const mobileHome = document.getElementById("mobile-home");
const mobileWatchList = document.getElementById("mobile-watchlist");
const mobileGenreLink = document.querySelectorAll(".mobile-menu__genre-link");
const mobileHomeHandler = function(handler) {
    mobileHome.addEventListener("click", function() {
        handler();
        main.classList.toggle("active");
        hamburgerMenu.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
};
mobileWatchList.addEventListener("click", function() {
    watchListRender();
    main.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});
const mobileGenreHandler = function(handler) {
    mobileGenreLink.forEach((link)=>{
        link.addEventListener("click", function(e) {
            let query = e.target.dataset.genre;
            if (query.includes(" ")) query = query.split(" ").join("_");
            handler(genreID[query]);
            main.classList.toggle("active");
            hamburgerMenu.classList.toggle("active");
            mobileMenu.classList.toggle("active");
        });
    });
};
const renderGenre = async function(result, query) {
    const main = document.querySelector(".main");
    const imgPath = "https://image.tmdb.org/t/p/original";
    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add("grid");
    const genreTitle = document.createElement("h2");
    genreTitle.classList.add("movie-grid__title");
    genreTitle.textContent = convertKey2Title(query);
    container.appendChild(genreTitle);
    result.forEach((movie)=>{
        const movieGridItem = document.createElement("div");
        movieGridItem.classList.add("movie-grid__item");
        const movieGridIMG = document.createElement("img");
        movieGridIMG.dataset.title = movie.original_title;
        movieGridIMG.dataset.movie_id = movie.id;
        movieGridIMG.classList.add("movie-grid__img");
        movieGridIMG.src = `${imgPath}${movie.poster_path}`;
        const newWatchButton = document.createElement("button");
        newWatchButton.classList.add("movie-grid__watch-button");
        newWatchButton.textContent = "Watch";
        newWatchButton.addEventListener("click", function() {
            clickedTitle = this.previousSibling.dataset.title;
            clickedID = this.previousSibling.dataset.movie_id;
        });
        const newListButton = document.createElement("button");
        newListButton.classList.add("movie-grid__list-button");
        newListButton.textContent = "Add to List";
        newListButton.addEventListener("click", function() {
            clickedTitle = this.previousSibling.previousSibling.dataset.title;
            clickedID = this.previousSibling.previousSibling.dataset.movie_id;
        // modalConfirmation();
        });
        movieGridItem.appendChild(movieGridIMG);
        movieGridItem.appendChild(newWatchButton);
        movieGridItem.appendChild(newListButton);
        container.appendChild(movieGridItem);
    });
    main.innerHTML = "";
    main.appendChild(container);
};
const genreHandler = function(handler) {
    const dropdownLink = document.querySelectorAll(".dropdown__link");
    dropdownLink.forEach((link)=>{
        link.addEventListener("click", function(e) {
            let query = e.target.dataset.genre;
            if (query.includes(" ")) query = query.split(" ").join("_");
            handler(genreID[query]);
            const dropDown = e.target.closest("[data-dropdown]");
            const caret = document.querySelector(".fa-caret-down");
            dropDown.classList.remove("active");
            caret.classList.remove("fa-caret-down__rotate");
        });
    });
};
// --------- WATCH DOM RENDER ---------
let clickedTitle;
let clickedID;
const watchHandler = function(handler) {
    document.addEventListener("click", function(e) {
        if (e.target.matches(".swiper-watch-button") || e.target.matches(".movie-grid__watch-button")) handler(clickedTitle);
    });
};
const renderWatch = function(result, query) {
    const data = result.filter((movie)=>{
        if (movie.id === Number(clickedID)) return movie;
    })[0];
    const genre = generateGenre(data);
    const imgPath = "https://image.tmdb.org/t/p/original";
    document.body.style.backgroundImage = `linear-gradient(to bottom right, rgba(13, 16, 24, 0.8), rgba(0, 0, 0, 0.9)), url(${imgPath}${data.backdrop_path})`;
    const featuredTitle = document.querySelector(".featured__title");
    const featuredInfo = document.querySelector(".featured__info");
    const featuredDate = document.querySelector(".featured__date");
    const featuredGenre = document.querySelector(".featured__genre");
    const featuredOverview = document.querySelector(".featured__overview");
    const featuredWatch = document.querySelector(".featured__watch");
    const featuredList = document.querySelector(".featured__list");
    featuredOverview.dataset.title = data.title;
    featuredOverview.dataset.movie_id = data.id;
    featuredTitle.textContent = data.title;
    featuredInfo.classList.add("featured__info");
    featuredDate.textContent = data.release_date.slice(0, 4);
    featuredGenre.textContent = genre;
    featuredOverview.textContent = data.overview;
    featuredWatch.textContent = "Start";
    featuredList.textContent = "Add to List";
};
// --------- SEARCH DOM RENDER ---------
const searchInput = document.querySelector(".nav__input");
const searchButton = document.querySelector(".nav__search-btn");
const mobileInput = document.querySelector(".mobile-menu__input");
const mobileSearchButton = document.querySelector(".mobile-menu__search-btn");
const searchHandler = function(handler) {
    const invalidChars = [
        "{",
        "}",
        "<",
        ">",
        "[",
        "]",
        ";",
        "|"
    ];
    searchInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            if (!searchInput.value.split("").some((i)=>invalidChars.includes(i))) {
                handler(searchInput.value);
                searchInput.value = "";
            } else {
                searchInput.setCustomValidity("Invalid characters { } [ ] < > ; |");
                searchInput.reportValidity();
            }
        }
    });
    mobileInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            if (!mobileInput.value.split("").some((i)=>invalidChars.includes(i))) {
                handler(mobileInput.value);
                mobileInput.value = "";
                main.classList.toggle("active");
                hamburgerMenu.classList.toggle("active");
                mobileMenu.classList.toggle("active");
            } else {
                mobileInput.setCustomValidity("Invalid characters { } [ ] < > ; |");
                mobileInput.reportValidity();
            }
        }
    });
    searchButton.addEventListener("click", function() {
        if (!searchInput.value.split("").some((i)=>invalidChars.includes(i))) {
            handler(searchInput.value);
            searchInput.value = "";
        } else {
            searchInput.setCustomValidity("Invalid characters { } [ ] < > ; |");
            searchInput.reportValidity();
        }
    });
    mobileSearchButton.addEventListener("click", function() {
        if (!mobileInput.value.split("").some((i)=>invalidChars.includes(i))) {
            handler(mobileInput.value);
            mobileInput.value = "";
            main.classList.toggle("active");
            hamburgerMenu.classList.toggle("active");
            mobileMenu.classList.toggle("active");
        } else {
            mobileInput.setCustomValidity("Invalid characters { } [ ] < > ; |");
            mobileInput.reportValidity();
        }
    });
};
const renderSearch = function(result, query) {
    renderGenre(result, query);
    const genreTitle = document.querySelector(".movie-grid__title");
    genreTitle.textContent = `Your search results for: ${query}`;
};
const deleteButtonHandler = function(handler) {
    document.addEventListener("click", function(e) {
        if (e.target.matches(".movie-grid__delete-button")) handler(e.target.dataset.movie_id);
    });
};
const watchListRender = function() {
    const main = document.querySelector(".main");
    const moviesArray = localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [];
    if (moviesArray.length === 0) {
        const errorMessage = document.createElement("h1");
        errorMessage.classList.add("watchlist__error");
        errorMessage.textContent = "Your watchlist is empty";
        main.innerHTML = "";
        main.appendChild(errorMessage);
    } else {
        const main = document.querySelector(".main");
        const imgPath = "https://image.tmdb.org/t/p/original";
        const container = document.createElement("div");
        container.classList.add("container");
        container.classList.add("grid");
        const genreTitle = document.createElement("h2");
        genreTitle.classList.add("movie-grid__title");
        genreTitle.textContent = "Your Watchlist";
        container.appendChild(genreTitle);
        moviesArray.forEach((movie)=>{
            const movieGridItem = document.createElement("div");
            movieGridItem.classList.add("movie-grid__item");
            const movieGridIMG = document.createElement("img");
            movieGridIMG.dataset.title = movie.original_title;
            movieGridIMG.dataset.movie_id = movie.id;
            movieGridIMG.classList.add("movie-grid__img");
            movieGridIMG.src = `${imgPath}${movie.poster_path}`;
            const newWatchButton = document.createElement("button");
            newWatchButton.classList.add("movie-grid__watch-button");
            newWatchButton.textContent = "Watch";
            newWatchButton.addEventListener("click", function() {
                clickedTitle = this.previousSibling.dataset.title;
                clickedID = this.previousSibling.dataset.movie_id;
            });
            const newListButton = document.createElement("button");
            newListButton.classList.add("movie-grid__list-button");
            newListButton.textContent = "Add to List";
            newListButton.addEventListener("click", function() {
                clickedTitle = this.previousSibling.previousSibling.dataset.title;
                clickedID = this.previousSibling.previousSibling.dataset.movie_id;
            // modalConfirmation();
            });
            const newDeleteButton = document.createElement("button");
            newDeleteButton.classList.add("movie-grid__delete-button");
            newDeleteButton.dataset.movie_id = movie.id;
            newDeleteButton.textContent = "Delete";
            movieGridItem.appendChild(movieGridIMG);
            movieGridItem.appendChild(newWatchButton);
            movieGridItem.appendChild(newListButton);
            movieGridItem.appendChild(newDeleteButton);
            container.appendChild(movieGridItem);
        });
        main.innerHTML = "";
        main.appendChild(container);
    }
};
const watchListButton = document.getElementById("nav-watchlist");
watchListButton.addEventListener("click", watchListRender);
const errorRender = function() {
    const main = document.querySelector(".main");
    const errorMessage = document.createElement("h1");
    errorMessage.classList.add("watchlist__error");
    errorMessage.textContent = "Something went wrong with your request";
    main.innerHTML = "";
    main.appendChild(errorMessage);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["f0HGD","aenu9"], "aenu9", "parcelRequireeee6")

//# sourceMappingURL=index.e37f48ea.js.map
