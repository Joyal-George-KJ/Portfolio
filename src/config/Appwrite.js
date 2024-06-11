import { Client, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('6665dfe900385dd12490'); // Your Appwrite project ID

export default new Databases(client);
