import firebase from 'firebase';

const firebaseConfig = {
        apiKey: "AIzaSyC2u5hsBg2dw9pqOmbbZfqfC-uhRDNTH0I",
        authDomain: "capstone-3a210.firebaseapp.com",
        databaseURL: "https://capstone-3a210.firebaseio.com",
        projectId: "capstone-3a210",
        storageBucket: "capstone-3a210.appspot.com",
        messagingSenderId: "165321448559",
        appId: "1:165321448559:web:b5fc7d2f53d43f6295c19a",
        measurementId: "G-BML1VPCEQG"
};
// Initialize Firebase
const fire  = firebase.initializeApp(firebaseConfig);

export default fire;

