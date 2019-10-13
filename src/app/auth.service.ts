import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { FirebaseService } from './firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseService: FirebaseService,
    public auth: AngularFireAuth
  ) {}

  createUser(email, password) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(
        res => resolve(res),
        err => reject(err));
    });
  }

  loginUser(email, password) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        res => resolve(res),
        err => reject(err));
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      this.auth.auth.signOut()
      .then(() => {
        resolve();
      }).catch((error) => {
        reject();
      });
    });
  }
}
