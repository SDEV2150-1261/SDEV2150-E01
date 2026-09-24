// I'm going to store the HTML for the component in a 'safe' place we'll *copy* from.
// That way, we don't risk permanently / irreversibly mutating the HTML.
const template = document.createElement('template'); // an unattached DOM element/node where we'll inject our HTML
template.innerHTML = `
    <header class="mb-4">
      <div class="d-flex flex-wrap justify-content-between align-items-end gap-2">
        <div>
          <h1 class="h3 mb-1">NAIT Resource Directory</h1>
          <p class="text-body-secondary mb-0">
            Find student support services, labs, and campus resources.
          </p>
        </div>
      </div>
    </header>
`
