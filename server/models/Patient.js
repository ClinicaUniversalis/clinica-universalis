const { Schema, model } = require('mongoose');

// Schema to create User model
const patientSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    dob: { type: Date, required: true, trim: true },
    officialID: { type: String, unique: true, required: true, trim: true },
    email: {
      type: String,
      unique: true,
      required: true,
      /* validate: [validateEmail, 'Please fill a valid email address'],*/
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    bloodgroup: { type: String, required: false, trim: true },
    phone: { type: String, required: false, trim: true },
    createdAt: { type: Date, default: Date.now },

    medicalrecords: [
      {
        type: Schema.Types.ObjectId,
        ref: 'medicalrecord',
      },
    ],
  }
);

const Patient = model('patient', patientSchema);

module.exports = Patient;
