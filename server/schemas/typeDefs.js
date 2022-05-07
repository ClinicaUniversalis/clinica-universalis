const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String!
        lastname: String!
        birthdate: String!
        email: String!
        officialID: String!
        idType: String!
        additionalID: String
        additionalIDType: String
        licenseid: String!
        specialty: String!
        bloodgroup: String
        phone: String
        createdAt: String!
        medicalrecords: [MedicalRecord]!
        patients: [Patient]
    }

    type Patient {
        _id: ID
        name: String!
        lastname: String!
        birthdate: String!
        email: String!
        officialID: String!
        idType: String!
        additionalID: String
        additionalIDType: String
        bloodgroup: String
        phone: String
        createdAt: String!
        medicalrecords: [MedicalRecord]!
    }

    type MedicalRecord {
        _id: ID
        medicalstory: String!
        currentcondition: String!
        physicalexploration: String!
        diagnostic: String!
        treatment_prescription: String!
        orderofstudies: String!
        createdAt: String!
    }

    type Query {
        users: [User]
        patients: [Patient]
        medicalrecords: [MedicalRecord]
    }

    type getUsers {
        users: [User]
    }

    type getPatient {
        patients: [Patient]
    }

    type getMedicalRecords {
        medicalrecords: [MedicalRecord]
    }
`;

module.exports = typeDefs;