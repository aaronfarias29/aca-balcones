import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-gradient-to-r from-cyan-900 to-blue-900 overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative"> 
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback className="gradient-02 z-0" />
    </div>
    <Footer />
  </div>
);

export default Page;
