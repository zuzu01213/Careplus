import * as sdk from 'node-appwrite';

// Pastikan semua variabel lingkungan sudah terdefinisi dengan benar
const {
    PROJECT_ID,
    API_KEY,
    DATABASE_ID,
    PATIENT_COLLECTION_ID,
    DOCTOR_COLLECTION_ID,
    APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

// Membuat instance client Appwrite
const client = new sdk.Client();

client

.setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
.setProject('669d1250000ef269450a') // Your project ID
.setKey('b357808e831c8dfbbd20f064933d8a4053f3e2dc5cdcf8d57636f71d617ebd6e2f0ca1fde49c0ca718d300a8f7718d9eb094b9de91630a9ce574980bd415ad0fcb9d3aebcac866e2caf0d7cb18026411e7675c7447077a0145b8df90136218ddbe337b8fbbde338b6ef8c24aeb6f3c3f4b7df61419130d4b568b2b496297b5ad'); // Your secret API key


// Mengakses layanan
export const database = new sdk.Databases(client); 
export const storage = new sdk.Storage(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
