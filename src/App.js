import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/navbar";
import { Banner } from "./components/banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Project";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;