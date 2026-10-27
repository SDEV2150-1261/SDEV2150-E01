import Header from './components/Header';
import Filters from './components/Filters';
import Results from './components/Results';
import Details from './components/Details';
import Throwaway from './components/Throwaway';
import './App.css';

import { resources } from './data/resources';


function App() {
  return (
    <>
      <Throwaway text="no children" />
      <hr />
      <Throwaway text="has 1 child">
        {/* Anything I nest within a component is automatically *passed* as the {children} prop.
            I don't have to (and shouldn't) try to pass it directly.
        */}
        <p>some nested node (doesn't HAVE to be components)</p>
      </Throwaway>
      <hr />
      <Throwaway text="multiple children">
        <p>first child node</p>
        <p>second child node</p>
      </Throwaway>
      <hr />

      <Header tagline="Find the right resources, right away" />
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:items-stretch">
        <div className="w-full">
          <Filters />
        </div>
        <div className="w-full">
          <Results resources={resources} />
        </div>
        <div className="w-full">
          <Details />
        </div>
      </div>
    </>
  );
}

export default App;
