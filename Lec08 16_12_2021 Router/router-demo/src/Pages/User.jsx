import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function User() {
  const navigate = useNavigate();
  const { state } = useLocation();
  let userObj = state;

  if (userObj == null) {
    return <div>no for u!</div>
  }

  // useEffect(() => {
  //   if (userObj == null)
  //     navigate('home');
  // }, [])

  return (
    <div>
      <h2>User</h2>
      user id is {userObj.userId} <br />
      user name is {userObj.userName}
    </div>
  )
}
