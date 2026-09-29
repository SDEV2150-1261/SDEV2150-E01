/* Here, we'll define a custom event for when one of the result items is selected in the result component,
   and handle emitting it. We'll also highlight the selected item so the UI reacts to the user's actions and 
   stays 1:1 with how data is changing.
*/

const template = document.createElement('template');
// TODO: Update the template to support dynamic results (NOTE: we are not altering the badge count at this time)
template.innerHTML = `
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
  <section class="h-100">
    <div class="card h-100">
      <div class="card-header d-flex justify-content-between align-items-center">
        <strong>Results</strong>
        <span class="badge text-bg-secondary">4</span>
      </div>

      <div class="list-group list-group-flush">
        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
          <div class="d-flex w-100 justify-content-between">
            <h2 class="h6 mb-1">Peer Tutoring Centre</h2>
            <small>Academic</small>
          </div>
          <p class="mb-1 small text-body-secondary">Drop-in tutoring and study support.</p>
          <small class="text-body-secondary">Building W, Room W101</small>
        </button>

        <button type="button" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h2 class="h6 mb-1">Counselling Services</h2>
            <small>Wellness</small>
          </div>
          <p class="mb-1 small text-body-secondary">Confidential mental health supports.</p>
          <small class="text-body-secondary">Virtual and in-person</small>
        </button>

        <button type="button" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h2 class="h6 mb-1">Student Awards and Bursaries</h2>
            <small>Financial</small>
          </div>
          <p class="mb-1 small text-body-secondary">Funding options and application help.</p>
          <small class="text-body-secondary">Student Services, Main Floor CAT</small>
        </button>

        <button type="button" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h2 class="h6 mb-1">IT Service Desk</h2>
            <small>Tech</small>
          </div>
          <p class="mb-1 small text-body-secondary">Account access, Wi-Fi, BYOD support.</p>
          <small class="text-body-secondary">Library</small>
        </button>
      </div>
    </div>
  </section>`;

class ResourceResults extends HTMLElement {
  // TODO: Create a private field for results data
  /* !! important to understand !! -> we use private fields
     mostly to get inside a function every time we change data,
     because once we're inside a function, we can also fire *other*
     behaviour. In this case, we want a re-render to occur every time
     data changes (i.e. render the new data).

     If we *didn't* have this, then whatever code outside this object
     (e.g. ResourceResults.data = [1,2,3] in some other file) would always
     have to remember to fire ResourceResults.render() every time. 

     Now, imagine keeping track of 10 different stateful fields, and an app that
     has 20 files all of which interact with this component. That would be terrible in general,
     but also very bug-prone (all it takes is forgetting to manually fire that render() once, and
     the entire app state is bugged). 
  */   
  #results = [];

  set results(data) {
    // I really just care about forcing data mutation to go through a setter function,
    // since when I'm in a function, I can fire anything else too (e.g. re-rendering).
    this.#results = data;
    this.render();
  }

  constructor() {
    super();
    // TODO: Bind the handleResultClick method to this instance

    this.attachShadow({ mode: 'open' });
  }

  // TODO: Implement setter for results data, remember to render

  // TODO: Add an event handler method for result selection

  connectedCallback() {
    // TODO: Add a click event listener to handle result selection
    
    this.render();
  }

  // TODO: Clean up event listener in disconnectedCallback

  

  render() {
    // TODO: Update to render from the private results field, if it's empty, show "No results found" message
    
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('resource-results', ResourceResults);