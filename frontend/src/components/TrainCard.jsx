export default function TrainCard({ train }) {
  return (
    <div className="border p-3 rounded mb-2">
      <h3>🚆 {train.number}</h3>

      <p>
        {train.from} → {train.to}
      </p>

      <p>⏰ Відправлення: {train.departure}</p>
      <p>⏳ Тривалість: {train.duration}</p>
    </div>
  );
}