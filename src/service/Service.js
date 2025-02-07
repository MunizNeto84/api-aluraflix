import * as dataSource from "../infra/database/models/index.js";

class Service {
  constructor(modelName, dataSource) {
    this.dataSource = dataSource;
    this.model = modelName;
  }

  async getAll(where = {}) {
    return dataSource[this.model].findAll({
      where,
    });
  }

  async getById(id) {
    return dataSource[this.model].findByPk(id);
  }

  async create(data) {
    return dataSource[this.model].create(data);
  }

  async edit(updatedData, where) {
    return dataSource[this.model].update(updatedData, { where });
  }

  async delete(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

export default Service;
