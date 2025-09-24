// src/scripts/utils/renderIframe.js
export function renderIframe(url, title = "Project", height = 400) {
  return `
    <iframe 
      src="${url}"
      title="${title}"
      width="100%"
      height="${height}px"
      style="border:1px solid #ccc; margin-top:1em;"
      allowfullscreen
    ></iframe>
    <a href="${url}" target="_blank" rel="noopener">Open ${title} in new tab</a>
  `;
}
