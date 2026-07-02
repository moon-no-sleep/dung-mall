function l(){const t=localStorage.getItem("cart");return t?JSON.parse(t):[]}function u(t){localStorage.setItem("cart",JSON.stringify(t)),window.dispatchEvent(new CustomEvent("cartUpdated",{detail:t}))}function m(t,a){const e=l();e[t]&&(e[t].quantity=(e[t].quantity||1)+a,e[t].quantity<=0&&e.splice(t,1),u(e))}function p(t){const e=l().filter(n=>n.name!==t);u(e)}function v(t,a){const e=l(),n=e.findIndex(o=>o.name===t);n>-1&&(a<=0?e.splice(n,1):e[n].quantity=a,u(e))}function f(t){return t.reduce((a,e)=>{const n=parseFloat(e.price.replace(/,/g,"")),o=e.quantity||1;return a+n*o},0)}function g(){localStorage.removeItem("cart"),u([])}function i(){const t=document.getElementById("cart-items-container"),a=document.getElementById("cart-count"),e=document.getElementById("cart-total");if(!t)return;const n=l();a&&(a.textContent=`CART (${n.length})`),t.innerHTML="",n.forEach((c,s)=>{const r=document.createElement("div");r.className="cart-item",r.innerHTML=`
  <div class="cart-item-info">
    <img
      class="cart-item-image"
      src="${c.image}"
      alt="${c.name}"
      width="200"
      height="200"
      loading="lazy"
    />
    <div class="cart-item-details">
      <strong>${c.name}</strong>
      <span>₹ ${c.price}</span>
    </div>
  </div>
  <div class="counter-wrapper" data-index="${s}">
    <button class="counter-btn decrease">-</button>
    <span class="counter-value">${c.quantity||1}</span>
    <button class="counter-btn increase">+</button>
  </div>
`,t.appendChild(r)});const o=f(n);e&&(e.textContent=`₹${o.toLocaleString()}`),document.querySelectorAll(".counter-wrapper").forEach(c=>{const s=parseInt(c.dataset.index||"0"),r=c.querySelector(".decrease"),d=c.querySelector(".increase");r&&r.addEventListener("click",()=>{m(s,-1),i()}),d&&d.addEventListener("click",()=>{m(s,1),i()})})}function I(){const t=document.getElementById("remove-all-btn");t&&t.addEventListener("click",()=>{g(),i()}),i()}export{p as a,f as c,l as g,I as i,i as r,v as u};
