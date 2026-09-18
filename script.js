/* ============ ICONS ============ */
const ICON_PRESENTATION = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="1"/><line x1="8" y1="20" x2="16" y2="20"/><line x1="12" y1="16" x2="12" y2="20"/></svg>`;
const ICON_PIN = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>`;
const ICON_BUILDING = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v15"/><path d="M14 21V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11"/><line x1="2" y1="21" x2="22" y2="21"/><line x1="7" y1="9" x2="9" y2="9"/><line x1="7" y1="13" x2="9" y2="13"/><line x1="7" y1="17" x2="9" y2="17"/></svg>`;
const ICON_LOCALITY_PIN = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>`;

/* ============ DATA ============ */
/* Edit this array to update inventory. Each property belongs to a locality. */
const LOCALITIES = [
  {
    name: "Vasant Vihar",
    properties: [
      { code:"A - 16/5 Vasant Vihar", tags:[["Ground Floor with Basement","2nd Floor","400 sq yards"]], age:"Old Resale (10-12 months)", locationUrl:"https://www.google.com/maps/place/16,+A-9+St,+Block+A,+Vasant+Vihar,+New+Delhi,+Delhi+110057/@28.5641599,77.1622793,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1da4647ba4dd:0xfdcf454749a041ae!8m2!3d28.5641552!4d77.1648542?entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D" },
      { code:"F - 3/16 Vasant Vihar", tags:[["Ground Floor with Basement","400 sq yards","Third Floor with Terrace"]], age:"Old Resale (2-4 months)", locationUrl:"#" },
      { code:"B - 7/1B Vasant Vihar", tags:[["Second Floor","280 sq yards","Park Facing"],["North East Facing","BOOKING"]], age:"Old Resale (12–14 months)", locationUrl:"#" },
      { code:"C - 1/9 Vasant Vihar", tags:[["Third Floor with Terrace","600 sq yards"],["Corner","Old Construction"]], age:"Old Resale", locationUrl:"#" },
      { code:"B - 1/27 Vasant Vihar", tags:[["Second Floor","400 sq yards"],["North East Facing","Prebooking"]], age:"Old Resale (18–20 months)", locationUrl:"#" },
      { code:"D - 1/22 Vasant Vihar", tags:[["First Floor"],["North Facing","Old Construction"]], age:"Old Resale (18–20 months)", locationUrl:"#" },
    ]
  },
  {
    name: "Anand Niketan",
    properties: [
      { code:"C - 57 Anand Niketan", tags:[["First Floor","Second Floor","Third Floor with Terrace"],["400 sq yards","Park Facing","Booking"]], age:"Old Resale  (16–18 months)", locationUrl:"#" },
      { code:"C - 34 Anand Niketan", tags:[["Ground Floor","400 sq yards","Newly Renovated"],["Park Facing","25-Year-Old Construction"]], age:"Old Resale (25 years)", locationUrl:"#" },
    ]
  },
  {
    name: "Greater Kailash - 1 (GK-1)",
    properties: [
      { code:"E - 25 Greater Kailash-1", tags:[["First Floor","Basement & Ground Floor","300 sq yards","BOOKING"]], age:"Old Resale (14–16 months)", locationUrl:"#" },
    ]
  },
  {
    name: "Shanti Niketan",
    properties: [
      { code:"4/9, Shanti Niketan", tags:[["Ground Floor with Basement","North Facing","10 year Old Construction"],["North Facing","Front Portion"]], age:"Old Resale (10 years)", locationUrl:"#" },
    ]
  }
];

/* ============ RENDER ============ */
const portfolio = document.getElementById('portfolio');
let currentView = 'grid';

function tagRowsHTML(tagGroups, listMode){
  const cls = listMode ? 'list-tags' : 'tag-row';
  return tagGroups.map(group =>
    `<div class="${cls}">${group.map(t => `<span class="tag">${t}</span>`).join('')}</div>`
  ).join('');
}

function renderGrid(){
  return LOCALITIES.map(loc => `
    <section class="locality">
      <div class="locality-head">
        ${ICON_LOCALITY_PIN}
        <h2>${loc.name}</h2>
        <span class="locality-count">${loc.properties.length} ${loc.properties.length === 1 ? 'Unit' : 'Units'}</span>
      </div>
      <div class="grid-view">
        ${loc.properties.map(p => `
          <article class="p-card">
            <h3 class="p-title">${p.code}</h3>
            <div class="tag-groups">${tagRowsHTML(p.tags, false)}</div>
            <div class="link-list">
              <div class="link-item action">${ICON_PRESENTATION}<span>Site Presentation</span></div>
              <div class="link-item loc">${ICON_PIN}<a href="${p.locationUrl}" target="_blank" rel="noopener">Click here for Location</a></div>
              <div class="link-item info">${ICON_BUILDING}<span>${p.age}</span></div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `).join('');
}

function renderList(){
  return LOCALITIES.map(loc => `
    <section class="locality">
      <div class="locality-head">
        ${ICON_LOCALITY_PIN}
        <h2>${loc.name}</h2>
        <span class="locality-count">${loc.properties.length} ${loc.properties.length === 1 ? 'Unit' : 'Units'}</span>
      </div>
      <div class="list-view">
        <div class="list-header-row">
          <span>Unit</span><span>Details</span><span>Presentation</span><span>Location</span><span>Status</span>
        </div>
        ${loc.properties.map(p => `
          <div class="list-row">
            <h3 class="p-title">${p.code}</h3>
            <div class="tag-groups">${tagRowsHTML(p.tags, true)}</div>
            <div class="list-col action">${ICON_PRESENTATION}<span>Site Presentation</span></div>
            <div class="list-col loc">${ICON_PIN}<a href="${p.locationUrl}" target="_blank" rel="noopener">Click here for Location</a></div>
            <div class="list-col info">${ICON_BUILDING}<span>${p.age}</span></div>
          </div>
        `).join('')}
      </div>
    </section>
  `).join('');
}

function render(){
  portfolio.innerHTML = currentView === 'grid' ? renderGrid() : renderList();
}

const btnGrid = document.getElementById('btn-grid');
const btnList = document.getElementById('btn-list');

function setView(view){
  currentView = view;
  btnGrid.classList.toggle('active', view === 'grid');
  btnList.classList.toggle('active', view === 'list');
  btnGrid.setAttribute('aria-pressed', view === 'grid');
  btnList.setAttribute('aria-pressed', view === 'list');
  render();
}

btnGrid.addEventListener('click', () => setView('grid'));
btnList.addEventListener('click', () => setView('list'));

render();