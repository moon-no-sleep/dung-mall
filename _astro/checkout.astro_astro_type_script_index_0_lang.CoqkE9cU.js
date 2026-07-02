import{g as p,u as b,a as x,c as h}from"./cart.B1pxIrl3.js";function o(){const a=p(),r=document.getElementById("cart-items-summary"),u=document.getElementById("empty-cart");if(!r)return;if(r.innerHTML="",a.length===0){r.classList.add("hidden"),u?.classList.remove("hidden");const t=document.getElementById("subtotal"),s=document.getElementById("summary-total");t&&(t.textContent="₹ 0"),s&&(s.textContent="₹ 0");return}u?.classList.add("hidden"),r.classList.remove("hidden"),a.forEach((t,s)=>{const n=document.createElement("div");n.className=`flex justify-between items-start gap-4 ${s!==0?"pt-6":""} ${s!==a.length-1?"pb-6 border-b border-gray-100":""}`;const i=t.quantity||1;n.innerHTML=`
        <div class="flex gap-4 items-start flex-1">
          <div class="relative">
            <img
              class="w-20 h-20 rounded-xl object-cover ring-1 ring-black/5"
              src="${t.image}"
              alt="${t.name}"
            />
          </div>
          <div class="flex flex-col gap-2 flex-1 pt-1">
            <div>
              <p class="font-semibold text-base leading-tight text-gray-900">${t.name}</p>
              <p class="font-medium text-sm text-gray-500">₹ ${t.price.toLocaleString()}</p>
            </div>
            
            <div class="flex items-center gap-3">
              <div class="flex items-center border border-gray-200 rounded-md">
                
                <button type="button" class="quantity-decrease-btn h-7 w-7 text-gray-600 hover:bg-gray-50 rounded-l-md" data-item-name="${t.name}" aria-label="Decrease quantity of ${t.name} (current quantity ${i})">
                  <svg class="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 12H4"></path></svg>
                </button>
                
                <span class="px-3 text-sm font-medium text-gray-900" aria-hidden="true">${i}</span>
                
                <button type="button" class="quantity-increase-btn h-7 w-7 text-gray-600 hover:bg-gray-50 rounded-r-md" data-item-name="${t.name}" aria-label="Increase quantity of ${t.name} (current quantity ${i})">
                  <svg class="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"></path></svg>
                </button>
              </div>

              <button type="button" class="remove-item-btn text-sm font-medium text-gray-500 hover:text-red-600" data-item-name="${t.name}" aria-label="Remove ${t.name} from cart">
                Remove
              </button>
            </div>
          </div>
        </div>
        <p class="font-bold text-base text-gray-900 pt-1">₹ ${(Number(t.price)*i).toLocaleString()}</p>
      `,r.appendChild(n);const c=n.querySelector(".quantity-decrease-btn"),d=n.querySelector(".quantity-increase-btn"),l=n.querySelector(".remove-item-btn");c&&c.addEventListener("click",()=>{const e=c.dataset.itemName,m=(t.quantity||1)-1;e&&(b(e,m),o())}),d&&d.addEventListener("click",()=>{const e=d.dataset.itemName,m=(t.quantity||1)+1;e&&(b(e,m),o())}),l&&l.addEventListener("click",()=>{const e=l.dataset.itemName;e&&(x(e),o())})});const y=h(a),g=document.getElementById("subtotal"),v=document.getElementById("summary-total");g&&(g.textContent=`₹ ${y.toLocaleString()}`),v&&(v.textContent=`₹ ${y.toLocaleString()}`)}o();window.addEventListener("storage",a=>{a.key==="cart"&&o()});window.addEventListener("cartUpdated",()=>{o()});const f=document.getElementById("checkout");f&&f.addEventListener("click",()=>{console.log("Checkout clicked")});
