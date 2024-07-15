import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BackgroundImage     from "./assets/background.jpeg";
import HomeScreen          from "./routes/Home/homeScreen";
import About               from "./routes/About/about";

import Header              from "./components/header";
import Footer              from "./components/footer";

import StLuciaPics         from "./routes/StLucia/stLuciaPics";
import AddPicsStLucia      from "./components/addPicsStLucia";
import ViewUpdateSLPost    from "./components/viewUpdateSLPost";
import AddBlogSL           from "./components/addBlogSL";

import GrandAntiguaPics    from "./routes/GrandAntigua/grandAntiguaPics";
import AddPicsGrandAntigua from "./components/addPicsGrandAntigua";
import ViewUpdateGAPost    from "./components/viewUpdateGAPost";
import AddBlogGA           from "./components/addBlogGA";

function App() {
  return (
    <Router>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/stLuciaPics" element={<StLuciaPics />} />
          <Route path="/grandAntiguaPics" element={<GrandAntiguaPics />} />
          <Route path="/addPicsStLucia" element={<AddPicsStLucia />} />
          <Route path="/addPicsGrandAntigua" element={<AddPicsGrandAntigua />} />
          <Route path="/addBlogSL" element={<AddBlogSL />} />
          <Route path="/addBlogGA" element={<AddBlogGA />} />
          <Route path="/viewUpdateSLPost/:id" element={<ViewUpdateSLPost />} />
          <Route path="/viewUpdateGAPost/:id" element={<ViewUpdateGAPost />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
