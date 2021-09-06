const firebaseConfig = {
      apiKey: "AIzaSyCM8v9jZyRwN7aG98VWnvrptYT1yaHR9_A",
      authDomain: "classtest-77b93.firebaseapp.com",
      projectId: "classtest-77b93",
      storageBucket: "classtest-77b93.appspot.com",
      messagingSenderId: "884808284840",
      appId: "1:884808284840:web:1fff9dd780a552e37b609d",
      measurementId: "G-M9X6MQ8DFN"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
