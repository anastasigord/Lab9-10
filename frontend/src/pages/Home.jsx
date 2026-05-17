import { useEffect, useState } from "react";

export default function Home() {
  const [trains, setTrains] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/trains")
      .then(res => res.json())
      .then(data => setTrains(data));
  }, []);

  return (
    <div className="container">

      <h1 className="title">🚆 Railway System</h1>

      <input
        placeholder="Пошук..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {trains
        .filter(t =>
          t.number.toLowerCase().includes(query.toLowerCase()) ||
          t.from.toLowerCase().includes(query.toLowerCase()) ||
          t.to.toLowerCase().includes(query.toLowerCase())
        )
        .map(train => (
          <div key={train.id} className="card">
            <h3>{train.number}</h3>
            <p>{train.from} → {train.to}</p>
            <p>⏰ {train.departure}</p>
            <p>⏳ {train.duration}</p>
          </div>
      ))}

    </div>
  );
}