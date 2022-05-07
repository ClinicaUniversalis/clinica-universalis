const db = require("../config/connection");
const { User, Patient, MedicalRecord } = require("../models");

const userSeeds = require("./userSeeds.json");

db.once("open", async() => {
    await User.deleteMany({});
    await Patient.deleteMany({});
    await MedicalRecord.deleteMany({});

    const users = await User.insertMany(userSeeds);

    console.log("Successfully seeded the db");
    process.exit(0);
})