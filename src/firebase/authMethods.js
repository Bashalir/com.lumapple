import firebaseconfig from './firebaseIndex';
import firebase from 'firebase/app';
import 'firebase/auth';

import axios from 'axios';

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

  signup: (data, setErrors, setToken) => {
    const token = '4efad9bb-90a4-4dfa-92e8-f5f86404e177';

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
    createUserAccount({
      providerId: 'data.email',
      firebaseId: token,
      displayName: data.name,
      firstName: data.firstname,
      lastName: data.lastname,
      mail: data.email,
      token,
    });

    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(data.email, data.password)
    //   .then(async res => {
    //     const token = await Object.entries(res.user)[5][1].b;
    //     localStorage.setItem('token', token);
    //     setToken(token);

    //     const createUserAccount = async data => {
    //       const res = await axios.post(
    //         'http://localhost:3030/api/users',
    //         {data},
    //         {
    //           headers: {
    //             id_token: data.token,
    //           },
    //         },
    //       );
    //       return res;
    //     };
    //     await createUserAccount({
    //       provider_id: 'data.email',
    //       firebase_id: token.h,
    //       display_name: data.name,
    //       first_name: data.firstname,
    //       last_name: data.lastname,
    //       mail: data.email,
    //       token,
    //     });
    //   })
    //   .catch(err => {
    //     setErrors(prev => [...prev, err.message]);
    //   });
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
