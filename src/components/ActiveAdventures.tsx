import { useEffect, useState } from "react";
import axios from "axios";

export default function ActiveAdventures() {
  const [activeAdventures, setActiveAdventures] = useState({});

  useEffect(() => {
    axios.get("/api/get-active-adventures")
      .then(res => setActiveAdventures(res.data))
  }, []);

  return (
    <>
      <h1>These are the active adventures</h1>
      {activeAdventures && <p>{JSON.stringify(activeAdventures)}</p>}
    </>
  )
};