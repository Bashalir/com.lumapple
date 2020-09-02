import firebaseconfig from './firebaseIndex';
import firebase from 'firebase/app';
import 'firebase/auth';

import axios from 'axios';

export const authMethods = {
  currentUser: callback => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        callback({
          loggedIn: true,
          email: user.email,
          displayName: user.displayName,
          uid: user.uid,
        });
      } else {
        callback({loggedIn: false});
      }
    });
  },

  signup: (data, setErrors, setToken, setUser, user) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(async res => {
        const token = await Object.entries(res.user)[5][1].b;
        localStorage.setItem('token', token);
        setToken(token);

        const updateDisplayName = await res.user.updateProfile({
          displayName: data.name,
        });

        updateDisplayName();

        const createUserAccount = async data => {
          const res = await axios.post(
            'http://localhost:3030/api/users',
            {data},
            {
              headers: {
                id_token: data.token,
              },
            },
          );
          return res;
        };
        await createUserAccount({
          providerId: 'data.email',
          firebaseId: token.h,
          displayName: data.name,
          firstName: data.firstname,
          lastName: data.lastname,
          mail: data.email,
          token,
        });
        await setUser({
          ...user,
          loggedIn: true,
          email: data.email,
          displayName: data.name,
        });
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
        localStorage.setItem('token', token);
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
