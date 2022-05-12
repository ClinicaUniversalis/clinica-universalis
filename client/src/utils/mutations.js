import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($name: String!, $lastname: String!, $dob: Date!, $email: String!, $licenseid: String!, $specialty: String!, $username: String!, $password: String!) {
    addUser(name: $name, lastname: $lastname, dob: $dob, email: $email, licenseid: $licenseid, specialty: $specialty, username: $username, password: $password) {
      token
      user {
        _id
        username
      }
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