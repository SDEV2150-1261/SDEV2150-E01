import { useState, useEffect } from 'react';

// I want to write a hook that fetches the resources data from the backend server, that I can populate my Results card with.
// Because I'm side-effecting (talking to something outside the application), I use useEffect to make sure that behaviour only fires
// when the component calling this hook has mounted into the DOM. This way, I make sure data that arrives has a place to be shown.
export function useResources() {

  // 1. use state to hold data retrieved from server (data itself, loading state, potential error message)
  const [resources, setResources] = useState([]);    // the actual data (NAIT services results)
  const [isLoading, setIsLoading] = useState(true);  // use a boolean to track whether we've loaded (toggle before/after fetch to e.g. show loading wheel)
  const [error, setError]         = useState(null);  // let's say I want to display an error message (if fetch fails) in the UI

  // 2. i'm going to fetch the data from the API (normally, API functions would be in their own file/layer)
  async function fetchResources() {

  }

  // 3. we're going to call that fetch inside an effect, so it only happens after component has mounted
  useEffect(
    () => { fetchResources() }, // param 1: the callback function, "what should actually happen?". -> fetch the data
    []                          // param 2: the dependency array,  "when should it happen"         -> empty array ([]) means, only when page loads
  )

  // 4. semi-bonus: we'll supply a retry function so that we can call that from UI
  function refetch() {
    fetchResources(); // I'll be doing more in here, but right now I know I'll at least need to try to fetch the data again
  }

  // return all those ingredients for use by a component calling this hook
  return { resources, isLoading, error, refetch }

}