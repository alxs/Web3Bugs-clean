// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");

function let_(prim0, prim1) {
  return prim0.then(Curry.__1(prim1));
}

var AwaitThen = {
  let_: let_
};

function let_$1(prim0, prim1) {
  return prim0.then(Curry.__1(prim1));
}

var Await = {
  let_: let_$1
};

exports.AwaitThen = AwaitThen;
exports.Await = Await;
/* No side effect */
