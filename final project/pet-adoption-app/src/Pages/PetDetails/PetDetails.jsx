import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PetDetails.css';

export default function PetDetails() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    fetch('https://mocki.io/v1/7fa15266-831e-467e-8efd-ea8dd2a96c10')
      .then((res) => res.json())
      .then((data) => {
        const foundPet = data.find((item) => item.id === parseInt(id));
        setPet(foundPet);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!pet) return <p className="text-center my-5">Loading...</p>;

  const imageSrc = `/src/assets/photos/${pet.name}.jpg`;

  return (
    <div className="container pet-details-container">
      <h2 className="pet-title">{pet.name}'s Profile</h2>
      <div className="row pet-details-row">
        <div className="col-md-6">
          <img src={imageSrc} className="pet-image" alt={pet.name} />
        </div>
        <div className="col-md-6 pet-info">
          <h3>Name: {pet.name}</h3>
          <p>Breed: {pet.breed}</p>
          <p>Age: {pet.age} years old</p>

        
          <Link to="/adopt" className="btn btn-brown mt-3">
            Adopt {pet.name}
          </Link>
        </div>
      </div>
    </div>
  );
}

