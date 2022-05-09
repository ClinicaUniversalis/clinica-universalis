const { User, Patient, MedicalRecord } = require("../models");
const { dateScalar } = require('./typeDefs')

const resolvers = {
    Date: dateScalar,

    Query: {
        users: async () => {
            return User.find({});
        },
        patients: async () => {
            return Patient.find({});
        },
        medicalrecords: async () => {
            return MedicalRecord.find({})
        },
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId })
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
//TODO: Check it out in class, since if a user(doctor) is deleted, what is going to happen with all their patients?
        deleteUser: async (parent, { userId }) => {
            return User.findOneAndRemove({ _id: userId });
        }
    },
};

module.exports = resolvers;