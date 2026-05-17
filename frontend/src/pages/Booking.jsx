import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Booking() {
  const { id } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/trains")
      .then(res => res.json())
      .then(data => {
        const found = data.find(t => t.id == id);
        setTrain(found);
      });
  }, [id]);

  if (!train) return <div className="container">Loading...</div>;

  return (
    <div className="container">

      <h1 className="title">Booking page</h1>

      <div className="card">
        <h3>{train.number}</h3>

        <p>From: {train.from}</p>
        <p>To: {train.to}</p>

        <p>Departure: {train.departure}</p>
        <p>Duration: {train.duration}</p>
      </div>

      <button>Confirm booking</button>

    </div>
  );
}