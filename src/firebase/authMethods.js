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
    firebase.auth().languageCode = 'fr';

    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(async res => {
        let token = '';
        const currentUserFB = firebase.auth().currentUser;
        currentUserFB
          .getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            token = idToken;
            localStorage.setItem('token', token);
            setToken(token);
          })
          .catch(function (error) {
            console.log('Erreur : ', error);
          });

        await currentUserFB
          .sendEmailVerification()
          .then(function () {})
          .catch(function (error) {
            console.log(error);
          });

        await currentUserFB.updateProfile({
          displayName: data.name,
        });

        return token;
      })
      .then(async token => {
        data = {
          providerId: 'data.email',
          displayName: data.name,
          firstName: data.firstname,
          lastName: data.lastname,
          mail: data.email,
        };
        axios
          .post(
            process.env.REACT_APP_API_PATH + '/api/users',
            {data},
            {
              headers: {
                authorization: token,
              },
            },
          )
          .then(response => {
            const email = response.data.userToAdd.mail;
            const displayName = response.data.userToAdd.displayName;

            setUser({
              ...user,
              loggedIn: true,
              email,
              displayName,
            });
          })
          .catch(error => {
            console.log('Erreur : ', error);
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
