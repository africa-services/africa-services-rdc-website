/* Carte des zones d'intervention (Leaflet + OpenStreetMap).
   Modifiez la liste ZONES pour refléter vos zones réelles. */
const ZONES = [
  { name: "Nord-Kivu", city: "Goma, Beni, Rutshuru", lat: -1.6792, lng: 29.2228, people: "21 000", focus: "Urgence · SPS · Éducation" },
  { name: "Sud-Kivu", city: "Bukavu, Uvira, Minova", lat: -2.5083, lng: 28.8608, people: "15 500", focus: "SPS · Leadership · Moyens de subsistance" },
  { name: "Ituri", city: "Bunia", lat: 1.5594, lng: 30.2522, people: "4 800", focus: "Urgence · Éducation" },
  { name: "Tanganyika", city: "Kalemie", lat: -5.9475, lng: 29.1947, people: "3 200", focus: "Santé mentale" },
  { name: "Maniema", city: "Kindu", lat: -2.9437, lng: 25.9224, people: "1 900", focus: "Développement socio-économique" },
  { name: "Kinshasa", city: "Coordination nationale", lat: -4.3217, lng: 15.3125, people: "1 600", focus: "Leadership · Plaidoyer" },
];

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("zones-map");
  const list = document.getElementById("zone-list");
  if (!el || !list) return;

  list.innerHTML = ZONES.map(
    (z, i) => `<button class="zone" data-i="${i}"><span class="zone__dot"></span><span><strong>${z.name}</strong><small>${z.city}</small></span><span class="zone__num">${z.people}</span></button>`
  ).join("");

  if (!window.L) {
    el.innerHTML = '<p style="padding:24px">La carte n\'a pas pu être chargée.</p>';
    return;
  }

  const map = L.map(el, { scrollWheelZoom: false }).setView([-2.8, 23.6], 5);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const icon = L.divIcon({
    className: "",
    html: '<span style="display:block;width:18px;height:18px;border-radius:50%;background:#f26a1b;border:3px solid #fff;box-shadow:0 0 0 6px rgba(242,106,27,.25),0 4px 10px rgba(0,0,0,.3)"></span>',
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });

  const markers = ZONES.map((z) =>
    L.marker([z.lat, z.lng], { icon })
      .addTo(map)
      .bindPopup(`<strong style="font-size:15px">${z.name}</strong><br>${z.city}<br><b style="color:#d9560c">${z.people}</b> bénéficiaires<br><small>${z.focus}</small>`)
  );

  list.querySelectorAll(".zone").forEach((btn) =>
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.i);
      list.querySelectorAll(".zone").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      map.flyTo([ZONES[i].lat, ZONES[i].lng], 8, { duration: 0.8 });
      markers[i].openPopup();
    })
  );
});
