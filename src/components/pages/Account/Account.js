import React, {useContext} from 'react';
import {firebaseAuth} from '../../../providers/AuthProvider';
import {Redirect} from 'react-router-dom'; // Link

const Account = () => {
  const {handleSignout, user} = useContext(firebaseAuth);

  return (
    <div>
      {user.loggedIn ? (
        <button onClick={handleSignout}>sign out </button>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Account;
