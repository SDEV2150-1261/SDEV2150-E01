import { useState, useEffect } from 'react';

// I want to write a hook that fetches the resources data from the backend server, that I can populate my Results card with.
// Because I'm side-effecting (talking to something outside the application), I use useEffect to make sure that behaviour only fires
// when the component calling this hook has mounted into the DOM. This way, I make sure data that arrives has a place to be shown.
export function useResources() {

  // 1. use state to hold data retrieved from server (data itself, loading state, potential error message)

  // 2. i'm going to fetch the data from the API (normally, API functions would be in their own file/layer)

  // 3. we're going to call that fetch inside an effect, so it only happens after component has mounted

  // 4. semi-bonus: we'll supply a retry function so that we can call that from UI

}