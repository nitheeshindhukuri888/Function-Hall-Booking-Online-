async function loadHalls(){
 const city=document.getElementById('city')?.value||'';
 const r=await fetch('/api/halls?city='+encodeURIComponent(city));
 const halls=await r.json();
 const grid=document.getElementById('hallGrid');
 grid.innerHTML=halls.map(h=>`
 <article class="card">
  <img src="${h.imageUrl}" alt="${h.name}">
  <div class="card-body">
   <p class="eyebrow">${h.city}</p>
   <h3>${h.name}</h3>
   <p>${h.address}</p>
   <p>Up to ${h.capacity} guests</p>
   <p class="price">₹${Number(h.pricePerDay).toLocaleString('en-IN')} / day</p>
   <a class="btn" href="/hall.html?id=${h.id}">View details</a>
  </div>
 </article>`).join('') || '<p>No halls found.</p>';
}
loadHalls();
