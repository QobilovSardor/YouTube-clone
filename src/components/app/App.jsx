import { Route, Routes } from "react-router-dom";
import {Main, Chanel, VideoDetail, Search, Navbar} from "../index";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chanel/:id" element={<Chanel />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;