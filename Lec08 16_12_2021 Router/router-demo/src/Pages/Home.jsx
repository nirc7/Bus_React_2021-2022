import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const btngo2U = () => {

    let userObj = {
      userId: 7,
      userName: 'avi'
    };

    navigate('user', { state: userObj });
  }

  return (
    <div>
      <h2>Home</h2>
      <button onClick={btngo2U}>go 2 User</button>
    </div>
  )
}
