const router = require('express').Router();
const {
  getPatients,
  getSinglePatient,
  createPatient,
  updatePatient,
  deletePatient,  
} = require('../../controllers/patientController');

// /api/patients
router.route('/')
  .get(getPatients)
  .post(createPatient);

// /api/patients/:patientId
router.route('/:patientId')
  .get(getSinglePatient)
  .put(updatePatient)
  .delete(deletePatient);

  /*
// /api/patients/:patientId/reactions
router.route('/:patientId/reactions').post(addPatientReaction);

// /api/patients/:patientId/reactions/:reactionId
router.route('/:patientId/reactions/:reactionId').delete(removePatientReaction);
*/

module.exports = router;
