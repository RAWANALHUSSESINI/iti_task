
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Child from '../Child/Child'

export default function Home() {
  const [selectedHotel, setSelectedHotel] = useState("")
  const [hotels] = useState(["Four Seasons", "Hilton", "Marriott"])
  const [booked, setBooked] = useState([])

  function bookHotel(name) {
    if (!booked.includes(name)) {
      setBooked([...booked, name])
      setSelectedHotel(name)
    }
  }

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h2>Available Hotels</h2>
        <ul className="list-group">
          {hotels.map((hotel, idx) => (
            <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
              {hotel}
              <button className="btn btn-success" onClick={() => bookHotel(hotel)}>
                <i className="fas fa-bed me-2"></i>Book
              </button>
            </li>
          ))}
        </ul>

        <Child selectedHotel={selectedHotel} />

        {booked.length > 2 && (
          <div className="alert alert-info mt-4">
            You've booked multiple hotels!
          </div>
        )}

        <div className="mt-4">
          <h4>Booked Hotels:</h4>
          <ul>
            {booked.map((hotel, i) => (
              <li key={i}>{hotel}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
