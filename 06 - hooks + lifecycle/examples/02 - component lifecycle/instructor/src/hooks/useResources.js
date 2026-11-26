import { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:3000'; // normally this would live in its own API file/layer too


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
    // first thing to do when writing logic: "what does the initial condition need to be?"
    // if I'm about to send a fetch, loading should become true, and error should become null (new fetch = any existing error msg is now stale / based on prev. fetch)
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_BASE_URL}/resources`);

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status} ${res.statusText}`);
      }

      // set the data received to local state
      const data = await res.json();
      setResources(data)
    } catch (err) {
      setError(err);
    } finally {
      // you're used to try-catch; the full form is try-catch-finally.
      // anything in the finally block will at the very end regardless of what happens above
      setIsLoading(false);
    }
  
  }

  // 3. we're going to call that fetch inside an effect, so it only happens after component has mounted
  // (progress comment:) I don't need to do anything new to get the fetch to fire, because I already wired up the skeleton first
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