const { Schema, model } = require('mongoose');

/*
const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};
*/

// Schema to create User model
const patientSchema = new Schema(
  {
    name: { type: String, required:true, trim:true },
    lastname: { type: String, required:true, trim:true },    
    birthday: { type: Date, required:true, trim:true },    
    numberid: { type: String, unique:true, required:true, trim:true },    
    email: { 
      type: String, 
      unique:true, 
      required:true,
     /* validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']*/
     },
    bloodgroup: { type: String, required:false, trim:true },
    phone: { type: String, required:false, trim:true },
    createdAt: {type: Date,default: Date.now},

    medicalrecords: [
      {
        type: Schema.Types.ObjectId,
        ref: 'medicalrecord',
      },
    ],

  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

/*
// Create a virtual property `friendCount` that gets all the user´s friends
patientSchema
  .virtual('patientCount').get(function () {
    return this.patients.length;
  });
*/

// Initialize our User model
const Patient = model('patient', patientSchema);

module.exports = Patient;
