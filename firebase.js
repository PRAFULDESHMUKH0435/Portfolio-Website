// firebase.js

let servicesData = null;

// Firebase configuration
const firebaseConfig = {
  authDomain: "googleapis.com",
  databaseURL: "https://companywebsite-874f5-default-rtdb.firebaseio.com/",
  projectId: "companywebsite-874f5",
};

  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// // Function to fetch data from Firebase and display it
// function fetchDataAndDisplay() {
//   const db = firebase.database();
//   const ref = db.ref("/about/discription"); // Adjust the path to point to your root or a specific node

//   ref.on("value", (snapshot) => {
//     const data = snapshot.val();
//     const container = document.getElementById('data-container');
//     container.innerHTML = JSON.stringify(data, null, 2);
//   }, (error) => {
//     console.error("Error fetching data: ", error); 
//   });
// }

// function fetchServicesAndDisplay() {
//     const db = firebase.database();
//     const ref = db.ref("/services"); // Reference to the "services" node in your Firebase database
  
//     ref.once("value", (snapshot) => {
//       const services = snapshot.val(); // Get the services data from the snapshot
//       servicesData = services
//     }, (error) => {
//       console.error("Error fetching services data: ", error);
//     });
//   }

// // Call the function to fetch and display data
// fetchDataAndDisplay();
// fetchServicesAndDisplay();


// Function to fetch data from Firebase and display it
function fetchDataAndDisplay(path, elementId) {
  const db = firebase.database();
  const ref = db.ref(path);

  ref.on("value", (snapshot) => {
    const data = snapshot.val();
    const container = document.getElementById(elementId);
    container.innerHTML = JSON.stringify(data, null, 2); // Use JSON.stringify for debugging, replace with actual data rendering
  }, (error) => {
    console.error(`Error fetching data from ${path}: `, error); 
  });
}

// Function to fetch and display multiple sections
function updateContent() {
  fetchDataAndDisplay("/about/discription", "about-container");
  fetchDataAndDisplay("/services", "services-container");
  fetchDataAndDisplay("/skills", "skills-container");
  fetchDataAndDisplay("/contact", "contact-container");
  fetchDataAndDisplay("/applications", "applications-container");
}

// Call the function to fetch and display data
updateContent();