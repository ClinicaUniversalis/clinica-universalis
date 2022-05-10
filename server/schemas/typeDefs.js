const { gql } = require('apollo-server-express');
const { GraphQLScalarType, Kind } = require('graphql');

const typeDefs = gql`
    scalar Date

    type User {
        _id: ID
        name: String!
        lastname: String!
        birthdate: Date!
        username: String!
        password: String!
        email: String!
        licenseid: String!
        specialty: String!
        createdAt: Date!
        medicalrecords: [MedicalRecord]!
        patients: [Patient]
    }

    type Patient {
        _id: ID
        name: String!
        lastname: String!
        birthdate: Date!
        email: String!
        officialID: String!
        bloodgroup: String
        phone: String
        createdAt: Date!
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
        createdAt: Date!
    }

    type Query {
        users: [User]
        user(userId: ID!): User
        patients: [Patient]
        patient(patientId: ID!) : Patient
        medicalrecords: [MedicalRecord]
        medicalrecord(medicalRecordId: ID!) : MedicalRecord
    }

    type Mutation {
        addUser(name: String!, lastname: String!, birthdate: Date!, email: String!, licenseid: String!, specialty: String!, username: String!, password: String!): User
        editUser(userId: ID!, name: String, lastname: String, birthdate: String, email: String, username: String, password: String): User
        deleteUser(userId: ID!): User
        addPatient(name: String!, lastname: String!, birthdate: Date!, officialID: String!, email: String!, bloodgroup: String, phone: String): Patient
        editPatient(patientId: ID!, name: String, lastname: String, birthdate: Date, email: String, bloodgroup: String, phone: String): Patient
        deletePatient(patientId: ID!): Patient
        addMedicalRecord(userId: ID!, patientId: ID!, medicalstory: String!, currentcondition: String!, physicalexploration: String!, diagnostic: String!, treatment_prescription: String!, orderofstudies: String!): MedicalRecord
        editMedicalRecord(medicalRecordId: ID!, medicalstory: String, currentcondition: String, physicalexploration: String, diagnostic: String, treatment_prescription: String, orderofstudies: String): MedicalRecord
        deleteMedicalRecord(medicalRecordId: ID!): MedicalRecord
    }
`;

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

module.exports = { typeDefs, dateScalar };