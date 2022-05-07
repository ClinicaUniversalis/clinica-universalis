const { MedicalRecord, User } = require('../models');
const Patient = require('../models/Patient');

module.exports = {
  getMedicalRecords(req, res) {
    MedicalRecord.find()
      .then((medicalrecords) => res.json(medicalrecords))
      .catch((err) => res.status(500).json(err));
  },
  getSingleMedicalRecord(req, res) {
    MedicalRecord.findOne({ _id: req.params.medicalrecordId })
      .then((medicalrecord) =>
        !medicalrecord
          ? res.status(404).json({ message: 'No medicalrecord with that ID' })
          : res.json(medicalrecord)
      )
      .catch((err) => res.status(500).json(err));
  },



  // create a new medicalrecord
  async createMedicalRecord(req, res) {

    try {

        let medicalrecord = await MedicalRecord.create(req.body);
        
        //Put id in user table
        let user = await User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { medicalrecords: medicalrecord._id } },
          { new: true }
        );
        if (!user){
          console.log('No user found')
        }else {
          console.log('Medicalrecord added to User 🎉')
        }

         //Put id in patient table
        let patient = await Patient.findOneAndUpdate(
          { _id: req.body.patientId },
          { $addToSet: { medicalrecords: medicalrecord._id } },
          { new: true }
        );
        if (!patient){
          console.log('No patient found')
        }else {
          console.log('Medicalrecord added to Patient 🎉')
        }       

        res.json('Medical record created 🎉')

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }

  },//end createMedicalrecord()



  updateMedicalRecord(req, res) {  
        MedicalRecord.findOneAndUpdate(
          { _id: req.params.medicalrecordId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((medicalrecord) =>
            !medicalrecord
              ? res.status(404).json({ message: 'No medicalrecord with this id!' })
              : res.json(medicalrecord)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    
  }, //end updateMedicalRecord()




 async deleteMedicalRecord(req, res) {
      try{

        let medicalrecord = await MedicalRecord.findOneAndRemove({ _id: req.params.medicalrecordId });

        if (!medicalrecord) {
            console.log('No medicalrecord found with this ID')
        }else{
            //if we found medicalrecord update User
            let user = await User.findOneAndUpdate(
                { medicalrecords: req.params.medicalrecordId },
                { $pull: { medicalrecords: req.params.medicalrecordId } },
                { new: true }
            );

            if (!user){
              console.log('No user found')
            }else {
              console.log('User updated 🎉')
            }

            //Put id in patient table
            let patient = await Patient.findOneAndUpdate(
                { medicalrecords: req.params.medicalrecordId },
                { $pull: { medicalrecords: req.params.medicalrecordId } },
                { new: true }
            );
            if (!patient){
              console.log('No patient found')
            }else {
              console.log('Patient updated 🎉')
            }       

            res.json('Medical record updated 🎉');


          }//end else no medicalrecord found


      } catch(err) {
          console.log(err);
          res.status(500).json(err);
      }
 
  }//end deleteMedicalRecord

} //end module.export