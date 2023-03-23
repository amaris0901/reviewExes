import FavouriteSites from "./components/FavouriteSites";
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
function App() {
  return(
    <div className="App">
     <div className="FavouriteSites">
      <FavouriteSites />
     </div>
     <div className="Profile">
      <Profile />
     </div>
     <div className="Gallery">
      <Gallery />
     </div>
    </div>
  );
}

export default App;
