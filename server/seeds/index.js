const db = require("../config/connection");
const { User, Patient, MedicalRecord } = require("../models");

const userSeeds = require("./userSeeds.json");
const patientSeeds = require("./patientSeeds.json");
const medicalRecordSeeds = require("./medicalRecordSeeds.json");

db.once("open", async() => {
    await User.deleteMany({});
    await Patient.deleteMany({});
    await MedicalRecord.deleteMany({});

    //Create medical records on db
    const medicalrecords = await MedicalRecord.insertMany(medicalRecordSeeds);

    //Define and create patients in db by adding references to Records
    const medicalRecordsIds = medicalrecords.map(mr => mr._id);
    const patientsToCreate = patientSeeds.map(patient => ({
        ...patient,
        medicalrecords: medicalRecordsIds
    }));
    const patients = await Patient.insertMany(patientsToCreate);

    const patientIds = patients.map(pts => pts._id);
    const usersToCreate = userSeeds.map(user => ({
        ...user,
        medicalrecords: medicalRecordsIds,
        patients: patientIds
    }));
    
    const users = await User.insertMany(usersToCreate);

    console.log("Successfully seeded the db");
    process.exit(0);
})