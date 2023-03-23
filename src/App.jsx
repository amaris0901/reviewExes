// import FavouriteSites from "./components/FavouriteSites";
// import Profile from "./components/Profile";
// import Gallery from "./components/Gallery";
import StateAssignmentOne from "./components/StateAssignmentOne";
import StateAssignmentTwo from "./components/StateAssignmentTwo";
function App() {
  return(
    <div className="App">
      <div className="one">
      <StateAssignmentOne />
      </div>
      <div className="two">
        <StateAssignmentTwo />
      </div>
      
     {/* <div className="FavouriteSites">
      <FavouriteSites />
     </div>
     <div className="Profile">
      <Profile />
     </div>
     <div className="Gallery">
      <Gallery />
     </div> */}
    </div>
  );
}

export default App;
