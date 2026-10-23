import './App.css'

import Header  from './components/Header'
import Filters from './components/Filters'
import Results from './components/Results'
import Details from './components/Details'


function App() {

  // every React component must return one single node.
  // instead of wrapping stuff in empty divs to achieve this purpose (which is bloat and might mess up styling),
  // we can use the fragment, a placeholder empty node in React:
  //   <>   </>
  return (
    <>
      <Header />
      <Filters />
      <Results />
      <Details />
    </>
  )
}

export default App
