// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const container = document.querySelector(".header-container");

function Header() {

  const head = document.createElement('div');
  head.classList.add('header');

  const dateNow = document.createElement('span');
  dateNow.classList.add('date');
  head.appendChild(dateNow);  
  dateNow.textContent = "SEPTEMBER 6, 2019";
  
  const title = document.createElement("h1");
  head.appendChild(title);
  title.textContent = "Lambda Times";

  const degree = document.createElement('span');
  degree.classList.add("temp");
  head.appendChild(degree);  
  degree.textContent = "98°";

  return head;
}

const myHead = Header();
console.log(myHead);
container.appendChild(myHead);
