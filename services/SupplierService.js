/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Supplier } = require('../models/Supplier');

/**
* Creates the data
*
* supplier Supplier data to be created
* returns supplier
* */
const createsupplier = ({ supplier }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Supplier(supplier).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* supplierId String the Id parameter
* no response value expected for this operation
* */
const deletesupplier = ({ supplierId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Supplier.findOneAndDelete({ _id:supplierId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllsupplier = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Supplier.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* supplierId String the Id parameter
* returns supplier
* */
const getsupplier = ({ supplierId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Supplier.findById(supplierId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* supplierId String the Id parameter
* supplier Supplier data to be updated (optional)
* returns supplier
* */
const updatesupplier = ({ supplierId, supplier }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Supplier.findOneAndUpdate({ _id:supplierId },supplier).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createsupplier,
  deletesupplier,
  getAllsupplier,
  getsupplier,
  updatesupplier,
};
