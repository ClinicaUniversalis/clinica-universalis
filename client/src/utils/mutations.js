import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!) {
    addUser(name: $name, ) {
      _id
      name
      skills
    }
  }
`;

export const ADD_MEDICAL_RECORD = gql`
mutation AddMedicalRecord($userId: ID!, $patientId: ID!, $medicalstory: String!, $currentcondition: String!, $physicalexploration: String!, $diagnostic: String!, $treatmentPrescription: String!, $orderofstudies: String!) {
  addMedicalRecord(userId: $userId, patientId: $patientId, medicalstory: $medicalstory, currentcondition: $currentcondition, physicalexploration: $physicalexploration, diagnostic: $diagnostic, treatment_prescription: $treatmentPrescription, orderofstudies: $orderofstudies) {
    medicalRecord {
      _id
      medicalstory
      currentcondition
    }
    user {
      name
      lastname
    }
    patient {
      name
      lastname
    }
  }
}
`