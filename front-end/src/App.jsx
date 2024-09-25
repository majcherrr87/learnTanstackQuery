import { useState } from "react";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { Detail } from "./components/Detail";
import "./App.css";

function App() {
  const [activePerseonId, setActivePerseonId] = useState(null);

  return (
    <div className="container">
      <Header />
      <Form />
      <List onPersonSelect={setActivePerseonId} />
      {activePerseonId !== null && (
        <Detail id={activePerseonId} onClose={() => setActivePerseonId(null)} />
      )}
    </div>
  );
}

export default App;
