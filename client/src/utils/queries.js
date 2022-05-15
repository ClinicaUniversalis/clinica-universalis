import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      name
      lastname
      licenseid
    }
  }
`;


export const QUERY_SINGLE_USER = gql`
  query getSingleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      lastname
      licenseid
      patients {
        _id
        name
        lastname
        medicalrecords{
          _id
          currentcondition
          diagnostic
        }
      }
      medicalrecords {
        _id
        medicalstory
        currentcondition
        physicalexploration
        treatment_prescription
        orderofstudies
        createdAt
      }
    }
  }
`;


export const QUERY_PATIENTS = gql`
  query allPatients {
    patients {
      _id
      name
      lastname
      email
    }
  }
`;

export const QUERY_SINGLE_PATIENT = gql`
  query getSinglePatient($patientId: ID!) {
    patient(patientId: $patientId) {
      _id
      name
      lastname
      email
      medicalrecords {
        _id
        medicalstory
        currentcondition
        physicalexploration
        treatment_prescription
        orderofstudies
        createdAt
      }
    }
  }
`;


export const QUERY_MEDICALRECORDS = gql`
  query allMedicalRecords {
    medicalrecords {
      _id
      medicalstory
      currentcondition
      physicalexploration
      diagnostic
      treatment_prescription
      orderofstudies
      createdAt
    }
  }
`;


export const QUERY_SINGLE_MEDICALRECORD = gql`
  query getSingleMedicalRecord($medicalrecordId: ID!) {
    medicalrecord(medicalrecordId: $medicalrecordId) {
      _id
      medicalstory
      currentcondition
      physicalexploration
      treatment_prescription
      orderofstudies
      createdAt      
    }
  }
`;
