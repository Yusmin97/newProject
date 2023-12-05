import { createHambuger } from "./hambuger.js";
import { createContainer } from "./container.js";
import { createfooter } from "./footer.js";

document.addEventListener('DOMContentLoaded', () => {
  const mainContainer = document.getElementById('main');

  // hambuger component
  const hambuger = createHambuger();
  mainContainer.appendChild(hambuger);

  // container component
  const container = createContainer();
  mainContainer.appendChild(container);

  // footer component
  const footer = createfooter();
  mainContainer.appendChild(footer);
});
