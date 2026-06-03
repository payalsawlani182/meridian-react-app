import FontLink from "./components/FontLink";
import Cursor from "./components/Cursor";
import NoiseOverlay from "./components/NoiseOverlay";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Intelligence from "./components/Intelligence";
import Presence from "./components/Presence";
import Team from "./components/Team";
import Cases from "./components/Cases";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <FontLink />
      <Cursor />
      <NoiseOverlay />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Intelligence />
        <Presence />
        <Team />
        <Cases />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
