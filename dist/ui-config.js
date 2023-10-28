"use strict";

/* eslint-disable no-invalid-this */

function join(paths) {
  var x = paths.filter(function (p) {
    return p;
  }).join("/");

  if (paths[0] === "/" && x === "/") {
    // returning "" for [ "/", "", "", ... ]
    return "";
  }

  return x.match(/^\/+$/) // avoid returning "" for [ "/", "/", ... ]
  ? "/" : x.replace(/\/+/g, "/").replace(/\/$/, ""); // remove multiple /'s and trailing /
}

function reload(data) {
  data = data || {};
  var ui = data.ui || {};
  var basePath = ui.basePath || "";
  var apiPath = ui.apiPath || "/api";
  this.ui = ui;
  this.fullPath = function (path) {
    return join([basePath, path]);
  };
  this.fullApiPath = function (path) {
    return join([basePath, apiPath, path]);
  };
}

module.exports = function (data) {
  var config = {};
  config.reload = reload;
  config.reload(data);
  return config;
};
//# sourceMappingURL=ui-config.js.map