import React from 'react';
import { Link } from 'react-router-dom';
import './PetCard.css'; 
export default function PetCard({ pet }) {
  const imageSrc = `/src/assets/photos/${pet.name}.jpg`;

  return (
    <div className='card h-100 pet-card'>
      <img src={imageSrc} className='card-img-top pet-card-img' alt={pet.name} />
      <div className='card-body pet-card-body'>
        <h5 className='card-title pet-card-title'>{pet.name}</h5>
        <p className='card-text pet-card-text'>{pet.breed}</p>
        <Link to={`/pets/${pet.id}`} className='btn btn-primary'>
          View Details
        </Link>
      </div>
    </div>
  );
}










