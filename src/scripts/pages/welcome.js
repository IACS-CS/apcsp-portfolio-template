// src/scripts/pages/welcome.js
import { renderMenu } from "../utils/renderMenu.js";

export function renderWelcome() {
  return `
    <h1>Student Portfolio</h1>
    ${renderMenu()}
    <h2>About Me</h2>
    <p>All About me...</p>
  `;
}
