
async function loadPresskit() {
  const res = await fetch('presskit.json');
  const data = await res.json();

  const g = data.game;
  const s = data.studio;
  const vis = data.media;
  const meta = data.meta;

  document.getElementById('title').textContent = g.title || 'Game Title';
  document.getElementById('tagline').textContent = g.tagline || '';
  document.getElementById('short').textContent = g.short_description || '';
  document.getElementById('long').innerHTML = g.long_description || '';

  document.getElementById('cover').src = vis.cover || '';

  const facts = [
    ['Genres', (g.genres || []).join(', ')],
    ['Platforms', (g.platforms || []).join(', ')],
    ['Release', g.release_date || 'TBA'],
    ['Modes', (g.modes || []).join(', ')],
  ];
  document.getElementById('facts').innerHTML = facts.map(([k, v]) => `<div class='fact'><b>${k}</b><div>${v}</div></div>`).join('');

  document.getElementById('studio').textContent = `${s.name} (Using Discord for Contact)`;
  const contacts = s.contact || {};
  document.getElementById('contacts').innerHTML = Object.entries(contacts).filter(([k, v]) => v).map(([k, v]) => `<li><a class='brand' target='_blank' href='${v}'>${k}</a></li>`).join('');

  document.getElementById('lastUpdated').textContent = "Last Updated: 2025-08-30";
}

loadPresskit();
