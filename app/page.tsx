import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Funnel from "./components/Funnel";
import ChooseUs from "./components/ChooseUs";
import WebsiteFeatures from "./components/WebsiteFeatures";
import Services from './components/Services'
import Partners from "./components/Partners";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import MessageForm from "./components/MessageForm";
import Footer from "./components/Footer";
import News from "./components/News";
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={montserrat.className}>
      <Navbar/>
      <Hero/>
      <Welcome/>
      <Funnel/>
      <ChooseUs/>
      <WebsiteFeatures/>
      <Services></Services>
      <Partners/>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <News></News>
      <MessageForm></MessageForm>
      <Footer></Footer>
    </div>
  );
}
