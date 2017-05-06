'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DrugSchema = new Schema({
    drugId: {
        type: String,
        required: true
    },

    drugName: {
        type: String,
        required: true
    },

    drugType: {  // generic and specific
        type: String,
        required: true
    },

    manufacturer: {
        type: String,
        required: true
    },

    genericName :{
        type: String,
        required: true
    },

    dateOfManufacture :{
        type: String,
        required: true
    },

    category :{ //dangerous or not
        type: String,
        required: true
    },

    dateOfExp :{
        type: String,
        required: true
    }




});

const Drug = mongoose.model('User', DrugSchema);

module.exports = Drug;