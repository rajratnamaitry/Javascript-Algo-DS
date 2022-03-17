import { firbaseDbConnection } from "./fireBaseStore";
import firebase from "firebase";
import "firebase/firebase-firestore";

export class Master extends firbaseDbConnection {
    dbConnection : any;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(_parameters: any) {
        super(_parameters)        
       this.dbConnection = firebase.firestore();
    }
    collections(collectionName: string): firebase.firestore.CollectionReference{
        return this.dbConnection.collection(collectionName)
    }
    get(collectionName: string) {
        return this.collections(collectionName).get();
    }
    getById(collectionName: string,doc : any) {
        return this.collections(collectionName).doc(doc).get();
    }
    post(collectionName: string,data : object){
        return this.collections(collectionName).add(data)
    }
    update(collectionName: string,doc : any ,data : object){
        return this.collections(collectionName).doc(doc).update(data);
    }
    delete(collectionName: string,doc : any) {
        return this.collections(collectionName).doc(doc).delete();
    }
}