// import sevices
const { Names } = require("../../../constant");
const { getCustomErrorException } = require("../../../exceptions");
const service = require("./service");
const _ = require("lodash");

const getName = async () => {
  return Names;
};

const list = async (params) => {
  return service
    .list(params)
    .then(async (res) => {
      const count = await service.count();
      return [res, count];
    })
    .catch((err) => {
      return err;
    });
};

const create = async (params) => {
  return service
    .create(params)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

const findById = async (params) => {
  return service
    .getByKey({ _id: params.id })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};

const removeById = async (params) => {
  return service
    .remove({ _id: params.id })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};

const edit = async (params) => {
  return service
    .updateByKey({ _id: params._id }, params.data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};

// ! export starts
module.exports = { list, create, findById, removeById, edit, getName };
// ! export end
