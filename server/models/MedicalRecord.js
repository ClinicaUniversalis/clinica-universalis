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

/*
// Create a virtual property `reactionsCount` that gets the amount of reactions per thought
toughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });
*/

// Initialize our Thought model
const MedicalRecord = model('medicalrecord', medicalRecordSchema);

module.exports = MedicalRecord;
