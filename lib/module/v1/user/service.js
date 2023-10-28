const Exception = require("../../../exceptions/customeException");
const dao = require("./dao");
const modal = require("./modal");
const _ = require("lodash");

// check for valid _id
const ObjectId = require("mongoose").Types.ObjectId;

function list(params) {
  let query = {};
  if (params.search) {
    query.title = { $regex: params.search, $options: "i" };
  }
  let sort;
  if (params.sort) {
    sort = { title: params.sort === "asc" ? 1 : -1 };
  } else {
    sort = { created: -1 };
  }

  let fields = {
    _id: 1,
    title: 1,
    email: 1,
    category: 1,
    availability: 1,
    created: 1,
    status: 1,
  };
  if (params.pageNo) {
    let pageNo = parseInt(params.pageNo) - 1;
    let limit = parseInt(params.limit ? params.limit : 10);
    return modal
      .find(query, fields)
      .lean()
      .skip(pageNo * limit)
      .limit(limit)
      .sort(sort);
  } else {
    return modal.find(query, fields).lean().sort(sort);
  }
}

const create = (params) => {
  return dao.create(params);
};

const getByKey = (query) => {
  return dao.findOne(query);
};

const remove = (query) => {
  return dao.remove(query);
};

const updateByKey = (query, params) => {
  return dao.updateByKey(query, params);
};

const count = (query, params) => {
  return dao.count(query, params);
};

module.exports = { list, create, getByKey, remove, updateByKey, count };
