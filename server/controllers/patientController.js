const { User } = require('../models/');
const Patient = require('../models/Patient');

module.exports = {
  getPatients(req, res) {
    Patient.find()
      .then((patients) => res.json(patients))
      .catch((err) => res.status(500).json(err));
  },
  getSinglePatient(req, res) {
    Patient.findOne({ _id: req.params.patientId })
      .populate('medicalrecords')
      .then((patient) =>
        !patient
          ? res.status(404).json({ message: 'No patient with that ID' })
          : res.json(patient)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new patient
  createPatient(req, res) {
    Patient.create(req.body)
      .then((patient) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { patients: patient._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Patient created, but found no user with that ID',
            })
          : res.json('Created the patient 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  updatePatient(req, res) {
    Patient.findOneAndUpdate(
      { _id: req.params.patientId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((patient) =>
        !patient
          ? res.status(404).json({ message: 'No patient with this id!' })
          : res.json(patient)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deletePatient(req, res) {
    Patient.findOneAndRemove({ _id: req.params.patientId })
      .then((patient) =>
        !patient
          ? res.status(404).json({ message: 'No patient with this id!' })
          : User.findOneAndUpdate(
              { patients: req.params.patientId },
              { $pull: { patients: req.params.patientId } },
              { new: true }
            )
      )
      
      .catch((err) => console.log('No Patient Deleted',err));
  },


  /*

  // Add a patient reaction
  addPatientReaction(req, res) {
    Patient.findOneAndUpdate(
      { _id: req.params.patientId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((patient) =>
        !patient
          ? res.status(404).json({ message: 'No patient with this id!' })
          : res.json(patient)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove patient reaction
  removePatientReaction(req, res) {
    Patient.findOneAndUpdate(
      { _id: req.params.patientId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((patient) =>
        !patient
          ? res.status(404).json({ message: 'No patient with this id!' })
          : res.json(patient)
      )
      .catch((err) => res.status(500).json(err));
  },
  */



};
