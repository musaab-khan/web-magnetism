import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FullScreen from "./components/FullScreen";
import Welcome from "./components/Welcome";
import { Montserrat } from 'next/font/google';

// Use the Montserrat font with the 'latin' subset
const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={montserrat.className}>
      <Navbar/>
      <Hero/>
      <Welcome/>
      <FullScreen/>
    </div>
  );
}
