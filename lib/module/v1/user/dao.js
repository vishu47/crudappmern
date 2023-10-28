"use strict";

const model = require("./modal");

// init  dao
let BaseDao = require("../../../baseDao");
const dao = new BaseDao(model);

function create(params) {
  return dao.save(params);
}

function findOne(params) {
  return dao.findOne(params);
}

function remove(params) {
  return dao.remove(params);
}

function updateByKey(query, update) {
  update.updated = new Date();
  let option = {};
  option.new = true;
  return dao.findOneAndUpdate(query, update, option);
}

function count(params) {
  let query = {};
  return dao.count(query);
}

module.exports = { create, findOne, remove, updateByKey, count };
