import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        {/* Navbar and Hero section */}
        <div className="bg-darkblue">
          <Navbar />
          <Hero />
        </div>

        {/* About section */}
        <div className="bg-darkblue">
          <About />
        </div>

        {/* Tech section */}
        <div className="bg-darkblue pb-10">
          <Tech />
        </div>

        {/* Projects section */}
        <Projects />

        {/* Experience section */}
        <div className="bg-darkblue rounded-tl-[150px] rounded-br-[150px]">
          <div className="rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>

        {/* Contact section */}
        <div className="relative z-0 bg-darkblue">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
