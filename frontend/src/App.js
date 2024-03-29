// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import { KEY } from "./localKey";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import VideoPage from "./pages/VideoPage/VideoPage";
import DefaultSearchResults from "./pages/SearchResultsPage/DefaultSearchResults";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route exact path="/" element={<YouTubePage />}>
          <Route exact path="/" element={<DefaultSearchResults />}/>
          <Route path="/search/:query" element={<SearchResultsPage />}/>
          <Route path="/watch/:videoId" element={<VideoPage/>}/>
          {/* <Route path="watch/:videoId" 
          render={props => <VideoPage key={props.match.params.videoId} /> }
          /> */}
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
//render={callback()} 