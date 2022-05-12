const { User, Patient, MedicalRecord } = require("../models");
const { dateScalar } = require('./typeDefs');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

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
            return User.findOne({ _id: userId }).populate('patients');
        },
        patient: async (parent, { patientId }) => {
            return Patient.findOne({ _id: patientId }).populate('medicalrecords');
        },
        medicalrecord: async (parent, { medicalRecordId }) => {
            return Patient.findOne({ _id: medicalRecordId });
        },
    },

    Mutation: {
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('No user with this username found!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(user);

            return { token, user };
        },
        //User mutations
        addUser: async (parent, {
            name,
            lastname,
            dob,
            email,
            licenseid,
            specialty,
            username,
            password
        }) => {
            const user = User.create({
                name,
                lastname,
                dob,
                email,
                licenseid,
                specialty,
                username,
                password
            })

            const token = signToken(user);

            return { token, user };
        },

        editUser: async (parent, {
            userId,
            name,
            lastname,
            dob,
            email,
            username,
            password
        }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                {
                    $set: {
                        name,
                        lastname,
                        dob,
                        email,
                        username,
                        password
                    }
                },
                { runValidators: true, new: true }
            )
        },

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
            const patient = Patient.findOneAndRemove({ _id: patientId });
            User.findOneAndUpdate(
                { patients: patientId },
                { $pull: { patients: patientId } },
                { new: true }
            )
            return patient;
        },
        //Medical Records mutations
        addMedicalRecord: async (parent, {
            userId,
            patientId,
            medicalstory,
            currentcondition,
            physicalexploration,
            diagnostic,
            treatment_prescription,
            orderofstudies
        }) => {
            try {
                const medicalRecord = await MedicalRecord.create({
                    medicalstory,
                    currentcondition,
                    physicalexploration,
                    diagnostic,
                    treatment_prescription,
                    orderofstudies
                });
                //Put id in user table
                const user = await User.findOneAndUpdate(
                    { _id: userId },
                    { $addToSet: { medicalrecords: medicalRecord._id } },
                    { new: true }
                );

                if (!user) {
                    console.log('No user found')
                } else {
                    console.log('Medicalrecord added to User 🎉')
                }

                //Put id in patient table
                const patient = await Patient.findOneAndUpdate(
                    { _id: patientId },
                    { $addToSet: { medicalrecords: medicalRecord._id } },
                    { new: true }
                );

                if (!patient) {
                    console.log('No patient found')
                } else {
                    console.log('Medicalrecord added to Patient 🎉')
                }

                return { medicalRecord, user, patient };
            } catch (error) {
                console.log(error);
            }
        },

        editMedicalRecord: async (parent, {
            medicalRecordId,
            medicalstory,
            currentcondition,
            physicalexploration,
            diagnostic,
            treatment_prescription,
            orderofstudies
        }) => {
            return MedicalRecord.findOneAndUpdate(
                { _id: medicalRecordId },
                {
                    $set: {
                        medicalstory,
                        currentcondition,
                        physicalexploration,
                        diagnostic,
                        treatment_prescription,
                        orderofstudies
                    }
                },
                { runValidators: true, new: true }
            )
        },

        deleteMedicalRecord: async (parent, { medicalRecordId }) => {
            try {
                const medicalRecord = await MedicalRecord.findOneAndRemove({ _id: medicalRecordId });

                if (!medicalRecord) {
                    console.log('No medicalrecord found with this ID');
                } else {
                    //if we found medicalrecord update User
                    const user = await User.findOneAndUpdate(
                        { medicalrecords: medicalRecordId },
                        { $pull: { medicalrecords: medicalRecordId } },
                        { new: true }
                    );

                    if (!user) {
                        console.log('No user found')
                    } else {
                        console.log('Medical record removed from User 🎉')
                    }

                    //Put id in patient table
                    const patient = await Patient.findOneAndUpdate(
                        { medicalrecords: medicalRecordId },
                        { $pull: { medicalrecords: medicalRecordId } },
                        { new: true }
                    );
                    if (!patient) {
                        console.log('No patient found')
                    } else {
                        console.log('Medical record removed from Patient 🎉')
                    }

                    console.log('Medical record removed 🎉');

                    return { medicalRecord, user, patient };
                }
            } catch (err) {
                console.log(err);
            }
        },
    },
};

module.exports = resolvers;