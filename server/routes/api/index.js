const router = require('express').Router();

const userRoutes = require('./userRoutes');
const patientRoutes = require('./patientRoutes');
const medicalRecordRoutes = require('./medicalRecordRoutes');

router.use('/users', userRoutes);
router.use('/patients', patientRoutes);
router.use('/medicalrecords', medicalRecordRoutes);


module.exports = router;
