import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, database as default, googleAuthProvider };


// database.ref('Expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref("Expenses")
//   .once("value")
//   .then( (snapshot) => {

//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("Expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// database.ref("Expenses").push({
//   createdAt: 34222,
//   description: "Rent",
//   amount: 3223,
//   note: "",
// });

// database.ref("notes").push({
//   title: "To Do",
//   body: "Go for a run",
// });

// database
//   .ref()
//   .set({
//     name: "Vishwajeet Raj",
//     age: 22,
//     stressLevel: 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Google'
//     },
//     isSingle: true,
//     location: {
//       city: "Patna",
//       country: "India",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch((e) => {
//     console.log("This failed", e);
//   });

// database.ref().on("value", (snapshot) => {
//   const data = snapshot.val();
//   console.log(data);
//   // Vishwajeet Raj is a Software Developer at Amazon.
//   // console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
// });

// setTimeout( () => {
//   database.ref('name').set('Andrew');
// }, 1500);

// setTimeout( () => {
//   database.ref().off();
// }, 2500);

// setTimeout( () => {
//   database.ref('age').set(90);
// }, 3500);

// database.ref().
// once('value').then( (snapshot) => {
//   const data = snapshot.val();
//   console.log(data);
// }).catch( (e) => {
//   console.log(e);
// });

// database.ref().remove().then(()=> {
//   console.log('Data Removed');
// }).catch((e) => {
//   console.log('Error',e);
// });

// database.ref('isSingle').set(null);
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });
