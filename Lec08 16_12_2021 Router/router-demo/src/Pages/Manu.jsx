import React from 'react';
import { useParams } from 'react-router-dom';

export default function Manu() {
  const params = useParams();
  
  return (
    <div>
      <h2>Menu</h2>
      user id is {params.userId}
    </div>
  )
}
