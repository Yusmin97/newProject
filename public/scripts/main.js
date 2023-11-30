import { createHambuger } from "./hambuger.js";
import { createContainer } from "./container.js";

document.addEventListener('DOMContentLoaded', () => {
  const mainContainer = document.getElementById('main');

  // Header component
  const hambuger = createHambuger();
  mainContainer.appendChild(hambuger);

  // HomePage component
  const container = createContainer();
  mainContainer.appendChild(container);
});
