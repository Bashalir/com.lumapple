import firebaseconfig from './firebaseIndex';
import firebase from 'firebase/app';
import 'firebase/auth';

export const authMethods = {
  currentUser: callback => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        callback({loggedIn: true, email: user.email});
      } else {
        callback({loggedIn: false});
      }
    });
  },

  signup: (email, password, setErrors, setToken) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async res => {
        const token = await Object.entries(res.user)[5][1].b;
        await localStorage.setItem('token', token);
        setToken(window.localStorage.token);

        console.log(res);
      })
      .catch(err => {
        setErrors(prev => [...prev, err.message]);
      });
  },

  signin: (email, password, setErrors, setToken) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async res => {
        const token = await Object.entries(res.user)[5][1].b;
        await localStorage.setItem('token', token);
        await setToken(window.localStorage.token);
      })
      .catch(err => {
        setErrors(prev => [...prev, err.message]);
      });
  },

  signout: (setErrors, setToken) => {
    firebase
      .auth()
      .signOut()
      .then(res => {
        localStorage.removeItem('token');
        setToken(null);
      })
      .catch(err => {
        setErrors(prev => [...prev, err.message]);
        localStorage.removeItem('token');
        setToken(null);
        console.error(err.message);
      });
  },
};
