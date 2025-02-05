import { where } from "sequelize";
import * as dataSource from "../infra/database/models/index.js";

class Service {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAll(where = {}) {
    console.log("Modelos disponíveis:", Object.keys(dataSource));
    return dataSource[this.model].findAll({
      where,
    });
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
