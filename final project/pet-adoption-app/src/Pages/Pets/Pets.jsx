import React, { useEffect, useState } from 'react';
import PetCard from '../../components/PetCard/PetCard';
import './Pets.css'; 

export default function Pets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch('https://mocki.io/v1/7fa15266-831e-467e-8efd-ea8dd2a96c10')
      .then((res) => res.json())
      .then((data) => setPets(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='pets-page'>
      <div className='container my-5'>
      <div className="title-box">
  <h2 className="title-text">Our Lovely Pets</h2>
</div>

        <div className='row'>
          {pets.map((pet) => (
            <div className='col-md-4 mb-4' key={pet.id}>
              <div className="pet-card-custom">
                <PetCard pet={pet} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}












