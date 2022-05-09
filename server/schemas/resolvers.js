const { User, Patient, MedicalRecord } = require("../models");
const { dateScalar } = require('./typeDefs')

const resolvers = {
    Date: dateScalar,

    Query: {
        users: async () => {
            return await User.find({});
        },
        patients: async () => {
            return await Patient.find({});
        },
        medicalrecords: async () => {
            return await MedicalRecord.find({})
        }
    },

    Mutation: {
        addUser: async (parent, {
            name,
            lastname,
            birthdate,
            email,
            licenseid,
            specialty,
            username,
            password
        }) => {
            return User.create({
                name,
                lastname,
                birthdate,
                email,
                licenseid,
                specialty,
                username,
                password
            })
        },

        editUser: async (parent, {
            userId,
            name,
            lastname,
            birthdate,
            email
        }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                {
                    $set: {
                        name,
                        lastname,
                        birthdate,
                        email
                    }
                },
                { runValidators: true, new: true }
            )
        },
    },
};

module.exports = resolvers;