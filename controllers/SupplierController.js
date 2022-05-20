/**
 * The SupplierController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/SupplierService');
const createsupplier = async (request, response) => {
  await Controller.handleRequest(request, response, service.createsupplier);
};

const deletesupplier = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletesupplier);
};

const getAllsupplier = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllsupplier);
};

const getsupplier = async (request, response) => {
  await Controller.handleRequest(request, response, service.getsupplier);
};

const updatesupplier = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatesupplier);
};


module.exports = {
  createsupplier,
  deletesupplier,
  getAllsupplier,
  getsupplier,
  updatesupplier,
};
