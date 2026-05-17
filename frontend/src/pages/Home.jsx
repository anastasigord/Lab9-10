import { useEffect, useState } from "react";

  useEffect(() => {
    const filtered = trainsMock.filter(
      (train) =>
        train.number.toLowerCase().includes(query.toLowerCase()) ||
        train.from.toLowerCase().includes(query.toLowerCase()) ||
        train.to.toLowerCase().includes(query.toLowerCase())
    );

    setTrains(filtered);
  }, [query]);

  return (
    <div className="page">
      <div className="container">
        <section className="hero">
          <span className="hero-label">RAILWAY TICKET SALES SYSTEM</span>

          <h1>
            Пошук рейсів для
            <br />
            бронювання квитків
          </h1>

          <p>Пошук за номером потяга або маршрутом</p>

          <input
            type="text"
            placeholder="Наприклад: 091К або Київ"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </section>

        <section className="results">
          <div className="results-header">
            <span>ДОСТУПНІ РЕЙСИ</span>
            <h2>{trains.length} знайдено</h2>
          </div>

          <div className="cards">
            {trains.map((train) => (
              <div className="card" key={train.id}>
                <div className="train-badge">Потяг {train.number}</div>

                <h3>
                  {train.from} → {train.to}
                </h3>

                <div className="info-block">
                  <span>Відправлення</span>
                  <strong>{train.departure}</strong>
                </div>

                <div className="info-block">
                  <span>Прибуття</span>
                  <strong>{train.arrival}</strong>
                </div>

                <div className="info-block">
                  <span>Тривалість</span>
                  <strong>{train.duration}</strong>
                </div>

                <button>Обрати рейс</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
