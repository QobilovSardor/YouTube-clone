import { Route, Routes } from "react-router-dom";
import {Main, Chanel, VideoDetail, SearchBar, Navbar} from "../index";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chanel/:id" element={<Chanel />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:id" element={<SearchBar />} />
      </Routes>
    </div>
  );
}

export default App;