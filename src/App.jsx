import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/Players/Players";

const fetchPlayersApi = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const promisePlayers = fetchPlayersApi();

  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>

      <Suspense fallback={<h3>Players data loading</h3>}>
        <Players promisePlayers={promisePlayers}></Players>
      </Suspense>
    </>
  );
}

export default App;
