const { User, Patient, MedicalRecord } = require("../models");

const resolvers = {
    Query: {
        users: async() => {
            return await User.find({});
        },
        patients: async() => {
            return await Patient.find({});
        }
    },

    getUsers: {
        users: async() => {
            return await User.find({});
        }
    }
};

module.exports = resolvers;