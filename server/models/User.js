const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Schema to create User model
const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    birthdate: { type: Date, required: true, trim: true },
    username: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    email: {
      type: String,
      unique: true,
      required: true
    },
    licenseid: { type: String, unique: true, required: true, trim: true },
    specialty: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },

    patients: [
      {
        type: Schema.Types.ObjectId,
        ref: 'patient',
      },
    ],

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

userSchema
  .virtual('patientCount').get(function () {
    return this.patients.length;
  });

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

//set up pre-update middleware to update password
userSchema.pre("findOneAndUpdate", async function (next) {
  const user = this;
  if (user.getUpdate().$set?.password !== undefined) {
    const saltRounds = 10;
    user.getUpdate().$set.password = await bcrypt.hash(user.getUpdate().$set.password, saltRounds);
  } else {
    return next();
  }
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
