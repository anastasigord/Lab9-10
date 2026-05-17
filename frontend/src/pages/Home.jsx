import { useEffect, useState } from "react";

export default function Home() {
  const [trains, setTrains] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/trains")
      .then(res => res.json())
      .then(data => setTrains(data));
  }, []);

  const filtered = trains.filter(t =>
    t.number.toLowerCase().includes(query.toLowerCase()) ||
    t.from.toLowerCase().includes(query.toLowerCase()) ||
    t.to.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">

      <div className="title">Railway Ticket System</div>

      <input
        placeholder="Search by number, city or route"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filtered.map(train => (
        <div className="card" key={train.id}>
          <h3>{train.number}</h3>
          <p>{train.from} → {train.to}</p>
          <p>{train.departure} · {train.duration}</p>
        </div>
      ))}

    </div>
  );
}