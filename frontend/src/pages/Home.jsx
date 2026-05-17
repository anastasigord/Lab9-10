import { useEffect, useState } from "react";
import TrainList from "../components/TrainList";
import { getTrains, searchTrains } from "../services/api";

export default function Home() {
  const [trains, setTrains] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    loadTrains();
  }, []);

  async function loadTrains() {
    const data = await getTrains();
    setTrains(data);
  }

  async function handleSearch(e) {
    const value = e.target.value;
    setQuery(value);

    if (!value) {
      loadTrains();
      return;
    }

    const data = await searchTrains(value);
    setTrains(data);
  }

  return (
    <div>
      <h1>🚆 Потяги</h1>

      <input
        placeholder="Пошук..."
        value={query}
        onChange={handleSearch}
      />

      <TrainList trains={trains} />
    </div>
  );
}