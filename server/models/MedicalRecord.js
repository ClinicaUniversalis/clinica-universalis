const { Schema, model } = require('mongoose');

// Schema to create MedicalRecord model
const medicalRecordSchema = new Schema(
  {
    medicalstory: { type: String, required:true, trim:true },
    currentcondition: { type: String, required:true, trim:true },
    physicalexploration: { type: String, required:true, trim:true },
    diagnostic: { type: String, required:true, trim:true },
    treatment_prescription: { type: String, required:true, trim:true },
    orderofstudies: { type: String, required:true, trim:true },            
    createdAt: {type: Date,default: Date.now},    
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const MedicalRecord = model('medicalrecord', medicalRecordSchema);

module.exports = MedicalRecord;
