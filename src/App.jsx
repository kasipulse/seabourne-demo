import { useState } from "react";

export default function App() {
  const [orders, setOrders] = useState([]);
  const [manifest, setManifest] = useState([]);
  const [scans, setScans] = useState([]);
  const [inputManifest, setInputManifest] = useState("");
  const [inputScans, setInputScans] = useState("");

  const loadOrders = () => {
    setOrders([
      { id: 1001, customer: "Pick n Pay" },
      { id: 1002, customer: "Clicks" },
      { id: 1003, customer: "Dischem" },
      { id: 1004, customer: "Makro" }
    ]);
  };

  const handleManifest = () => {
    const data = inputManifest.split("\n").map(x => x.trim()).filter(Boolean);
    setManifest(data);
  };

  const handleScans = () => {
    const data = inputScans.split("\n").map(x => x.trim()).filter(Boolean);
    setScans(data);
  };

  const missing = manifest.filter(id => !scans.includes(id));
  const extra = scans.filter(id => !manifest.includes(id));

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
  <img 
    src="https://res.cloudinary.com/dwxgkbuln/image/upload/v1771237770/OIP-removebg-preview_fdjhwc.png" 
    alt="Seabourne Logo" 
    style={{ height: 80 }}
  />
  <h1 style={{ color: "#c1121f", marginTop: 10 }}>
    Seabourne Automation Demo
  </h1>
  <h3 style={{ color: "#555" }}>
    Status: Live Integration Environment
  </h3>
</div>
      <h3>Status: Live Integration Environment</h3>

      <button 
  onClick={loadOrders}
  style={{
    backgroundColor: "#c1121f",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "10px"
  }}
>
  Sync Orders
</button>

      <h2>Orders</h2>
      <ul>
        {orders.map(o => (
          <li key={o.id}>{o.id} - {o.customer}</li>
        ))}
      </ul>

      <h2>Manifest (one ID per line)</h2>
      <textarea
        rows="5"
        value={inputManifest}
        onChange={e => setInputManifest(e.target.value)}
      />
      <br />
      <button onClick={handleManifest}>Load Manifest</button>

      <h2>Scanned Parcels</h2>
      <textarea
        rows="5"
        value={inputScans}
        onChange={e => setInputScans(e.target.value)}
      />
      <br />
      <button onClick={handleScans}>Load Scans</button>

      <h2>Reconciliation</h2>
      <p><b>Missing:</b> {missing.join(", ") || "None"}</p>
      <p><b>Unexpected:</b> {extra.join(", ") || "None"}</p>
    </div>
  );
}
