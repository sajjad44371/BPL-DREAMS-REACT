import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/Players/Players";
import Selected from "./components/SelectedPlayers/Selected";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

const fetchPlayersApi = async () => {
  const res = await fetch("/public/players.json");
  return res.json();
};
const promisePlayers = fetchPlayersApi();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(10000000);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleRemovePlayer = (player) => {
    const filteredPlayer = selectedPlayers.filter(
      (delPlayer) => delPlayer.id !== player.id
    );
    setSelectedPlayers(filteredPlayer);
    setAvailableBalance(availableBalance + player.price);
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <Banner></Banner>

      {toggle === true ? (
        <Suspense fallback={<Loader></Loader>}>
          <Players
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            promisePlayers={promisePlayers}
            handleToggle={handleToggle}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></Players>
        </Suspense>
      ) : (
        <Selected
          selectedPlayers={selectedPlayers}
          handleToggle={handleToggle}
          handleRemovePlayer={handleRemovePlayer}
        ></Selected>
      )}

      {/* tost  */}
      <ToastContainer></ToastContainer>

      <Newsletter></Newsletter>

      <Footer></Footer>
    </>
  );
}

export default App;
