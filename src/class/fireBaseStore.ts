import firebase from "../../src/firebase.js"
import "firebase/firebase-firestore" 

export class firbaseDbConnection {
    dbConnection : firebase.firestore.DocumentReference
    constructor(doc:string) {
       this.dbConnection = firebase.firestore().collection('fileList')
        .doc(doc);
    }
}