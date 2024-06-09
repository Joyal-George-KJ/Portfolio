import { Client, Databases } from 'appwrite';
let database;

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6665dfe900385dd12490');

export default database = new Databases(client);