class BaseDao {
  constructor(dbModel) {
    //Get Model
    this.Model = dbModel;
  }
  save(object) {
    return this.Model.create(object);
  }
  findOne(query, projection) {
    return this.Model.findOne(query, projection).lean().exec();
  }
  find(query, projection) {
    return this.Model.find(query, projection).lean().exec();
  }
  findOneAndUpdate(query, update, options) {
    return this.Model.findOneAndUpdate(query, update, options).exec();
  }
  remove(query, options) {
    return this.Model.deleteOne(query, options).exec();
  }
  count(query) {
    return this.Model.count(query).lean().exec();
  }
}

// ========================== Export Module Start ==========================
module.exports = BaseDao;
// ========================== Export Module End ============================
