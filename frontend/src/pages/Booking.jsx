import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Booking() {
  const { id } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/trains")
      .then(res => res.json())
      .then(data => {
        const found = data?.find(t => t.id == id);
        setTrain(found || null);
      });
  }, [id]);

  if (!train) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>Booking</h1>
      <div className="card">
        <p>{train.number}</p>
        <p>{train.from} → {train.to}</p>
      </div>
    </div>
  );
}