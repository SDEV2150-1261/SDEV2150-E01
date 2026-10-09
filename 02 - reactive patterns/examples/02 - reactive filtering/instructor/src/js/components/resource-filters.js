// I don't need to do anything to the template, because it's just an as-is input interface.
const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
  <aside class="h-100">
    <div class="card h-100">
      <div class="card-header">
        <strong>Filters</strong>
      </div>

      <div class="card-body">
        <form id="frm-filter">
          <label for="q" class="form-label">Search</label>
          <input id="q" class="form-control" type="text" placeholder="Try: tutoring, mental health, bursary" />

          <hr class="my-3" />

          <div class="mb-2"><strong>Category</strong></div>
          <div class="d-flex flex-wrap gap-2" aria-label="Category filters">
            <button class="btn btn-sm btn-outline-primary" type="button">All</button>
            <button class="btn btn-sm btn-outline-primary" type="button">Academic</button>
            <button class="btn btn-sm btn-outline-primary" type="button">Wellness</button>
            <button class="btn btn-sm btn-outline-primary" type="button">Financial</button>
            <button class="btn btn-sm btn-outline-primary" type="button">Tech</button>
          </div>

          <hr class="my-3" />

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="openNow" />
            <label class="form-check-label" for="openNow">Open now</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="virtual" />
            <label class="form-check-label" for="virtual">Virtual options</label>
          </div>

          <hr class="my-3" />

          <div class="d-flex gap-2">
            <button class="btn btn-outline-secondary" type="button">Reset</button>
            <button class="btn btn-primary" type="submit">Filter</button>
          </div>
        </form>
      </div>
    </div>
  </aside>`;

class ResourceFilters extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    // annoyingly, I 'need' to bind handler methods to the *instance* (belong to instance, not class template)
    //   explanation if curious: https://dev.to/aman_singh/why-do-we-need-to-bind-methods-inside-our-class-component-s-constructor-45bn
    this._handleCategoryClick = this._handleCategoryClick.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleReset = this._handleReset.bind(this);
    // next time, we'll use arrow functions and we won't have to do this at all!
  }

  connectedCallback() { // for when component mounts (i.e. loads into DOM)
    // I'm going to want "All" categories selected by default
    this.render();
    // I'm going to need a click listener for those category clicks
    
    // for 'internal events', i.e. don't need to care about DOM outside this component,
    // we *could* put those in the constructor as long as we were applying our HTML there too.
  }

  disconnectCallback() { // for when component unmounts (i.e. removed from DOM)
    // if I'm setting up listeners when the component loads/attaches into the DOM,
    // I should clean up those listeners here (so they don't linger if component unloads)
  }

  _handleCategoryClick(event) {
    // - (internally) clicking a category adds that category to an array of selected categories   
  }

  _handleSubmit(event) {
    // - clicking Filter fires custom event w/ filter configs sent as event message/payload
    event.preventDefault();
    // if I'm handling <form> submission with JS, I already know I need to do this to prevent page reload
  }

  _handleReset(event) {
    // - clicking Reset clears all filters / resets to initial state
  }

  render() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('resource-filters', ResourceFilters);
