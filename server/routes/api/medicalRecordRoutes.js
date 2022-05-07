const router = require('express').Router();
const {
  getMedicalRecords,
  getSingleMedicalRecord,
  createMedicalRecord,
  updateMedicalRecord,
  deleteMedicalRecord,  
} = require('../../controllers/medicalRecordController');

// /api/medicalrecords
router.route('/')
  .get(getMedicalRecords)
  .post(createMedicalRecord);

// /api/medicalrecords/:medicalrecordId
router.route('/:medicalrecordId')
  .get(getSingleMedicalRecord)
  .put(updateMedicalRecord)
  .delete(deleteMedicalRecord);

  /*
// /api/medicalrecords/:medicalrecordId/reactions
router.route('/:medicalrecordId/reactions').post(addMedicalRecordReaction);

// /api/medicalrecords/:medicalrecordId/reactions/:reactionId
router.route('/:medicalrecordId/reactions/:reactionId').delete(removeMedicalRecordReaction);
*/

module.exports = router;
