import firebase from "firebase";
import 'firebase/firestore'

if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: "AIzaSyC5a98rqOo0KLL2ruIslUoAaTYObJbI7Nk",
        authDomain: "nextproductregister.firebaseapp.com",
        projectId: "nextproductregister"
                
    })
}

export default firebase