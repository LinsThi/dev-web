import {
  collection,
  query,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { database } from "../firebase";

const FirebaseServiceTeacher = {
  getTeachers(callback) {
    const q = query(collection(database, "teachers"));

    onSnapshot(q, (querySnapshot) => {
      let teachers = [];
      querySnapshot.forEach((doc) => {
        const { name, university, degree } = doc.data();
        teachers.push({ _id: doc.id, name, university, degree });
      });
      callback(teachers);
    });
  },

  createTeacher(data, callback) {
    addDoc(collection(database, "teachers"), data)
      .then(() => callback())
      .catch((error) => console.log(error));
  },

  updateTeacher(callback, _id, body) {
    const docRef = doc(database, "teachers", _id);

    updateDoc(docRef, body)
      .then(() => callback())
      .catch((error) => console.log(error));
  },

  deleteTeacher(callback, _id) {
    const docRef = doc(database, "teachers", _id);

    deleteDoc(docRef)
      .then(() => callback())
      .catch((error) => console.log(error));
  },

  searchTeacher(callback, _id) {
    const docRef = doc(database, "teachers", _id);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists) callback(docSnap.data());
      })
      .catch((error) => console.log(error));
  },
};

export default FirebaseServiceTeacher;
