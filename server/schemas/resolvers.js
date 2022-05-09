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
            return MedicalRecord.find({});
        },
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
        patient: async (parent, { patientId }) => {
            return Patient.findOne({ _id: patientId });
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
        //TODO: Ask how to update any params that are sent maybe with ...params?
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
        },
        //Patient mutations
        addPatient: async (parent, {
            name,
            lastname,
            birthdate,
            officialID,
            email,
            bloodgroup,
            phone
        }) => {
            return Patient.create({
                name,
                lastname,
                birthdate,
                officialID,
                email,
                bloodgroup,
                phone
            })
        },

        editPatient: async (parent, {
            patientId,
            name,
            lastname,
            birthdate,
            email,
            bloodgroup,
            phone
        }) => {
            return Patient.findOneAndUpdate(
                { _id: patientId },
                {
                    $set: {
                        name,
                        lastname,
                        birthdate,
                        email,
                        bloodgroup,
                        phone
                    }
                },
                { runValidators: true, new: true }
            )
        },

        deletePatient: async (parent, { patientId }) => {
            return Patient.findOneAndRemove({ _id: patientId });
        },
        //TODO: ADD MEDICAL RECORDS MUTATIONS AND QUERIES
    },
};

module.exports = resolvers;