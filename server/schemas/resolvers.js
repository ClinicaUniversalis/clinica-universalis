const { User, Patient, MedicalRecord } = require("../models");

const resolvers = {
    Query: {
        users: async() => {
            return await User.find({});
        },
        patients: async() => {
            return await Patient.find({});
        },
        medicalrecords: async() => {
            return await MedicalRecord.find({})
        }
    },
};

module.exports = resolvers;