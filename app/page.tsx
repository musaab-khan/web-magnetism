import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Funnel from "./components/Funnel";
import FullScreen from "./components/FullScreen";
import ChooseUs from "./components/ChooseUs";
import { Montserrat } from 'next/font/google';

// Use the Montserrat font with the 'latin' subset
const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={montserrat.className}>
      <Navbar/>
      <Hero/>
      <Welcome/>
      <Funnel/>
      <ChooseUs/>
      <FullScreen/>
    </div>
  );
}
