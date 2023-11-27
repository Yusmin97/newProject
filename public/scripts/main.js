import { createHeader } from "./header.js";
import { createHomePage } from "./homePage.js";

document.addEventListener('DOMContentLoaded', () => {
  const mainContainer = document.getElementById('main');

  // Header component
  const header = createHeader();
  mainContainer.appendChild(header);

  // HomePage component
  const homePage = createHomePage();
  mainContainer.appendChild(homePage);
});
