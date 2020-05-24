let firebaseConfig = {
    apiKey: "AIzaSyCAfhOsB-HP5Md_Ypu6mVq6jnV57gO9UBc",
    authDomain: "go-form-b9ced.firebaseapp.com",
    databaseURL: "https://go-form-b9ced.firebaseio.com",
    projectId: "go-form-b9ced",
    storageBucket: "go-form-b9ced.appspot.com",
    messagingSenderId: "901571958709",
    appId: "1:901571958709:web:64d7645915c2758a0fabfc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
//   create refernce to firebase database
let firestore = firebase.firestore()
let docRef = firestore.doc('users/user-data');
document.getElementById('upload').addEventListener('submit',uploadData);
document.getElementById('btnLoadData').addEventListener('click',loadData);
// uploadData button
function uploadData(e) {
    e.preventDefault();
    // getInputVal
    const user = getInputVal('user');
    const email = getInputVal('email');

    // saveInfo
    saveInfo(user,email);
}
// load data
function loadData(e) {
    e.preventDefault();
     // getInputVal
     const user = getInputVal('user');
     const email = getInputVal('email');
 
     // saveInfo
     loadDataVal(user,email);
}
// get input data
const getInputVal = (id) => {
    return document.getElementById(id).value;
}

// save info to firebase
const saveInfo = (user,email) => {
    docRef.set({
        user,
        email
    })
    .then(() => console.log('data uploaded'))
    .catch(error => console.log(error))
    
}
const loadDataVal = (user,email) => {
    let loadedData = document.querySelector('#loadedData');
    docRef.get()
        .then(doc => {
            if(doc && doc.exists){
                uploadedData = doc.data()
                loadedData.innerHTML = uploadedData.email
            }else{
                loadedData.innerHTML = 'Failed to load the resource'
            }
        })
}

const getRealTimeUpdates = () => {
    docRef.onSnapshot(doc => {
        if(doc && doc.exists) {
            const uploadedData = doc.data();
            // console.log(doc)
            loadedData.innerHTML = uploadedData.email;
        }
    })
}
getRealTimeUpdates()