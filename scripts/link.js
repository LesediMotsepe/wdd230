const baseURL = 'https://your-github-pages-url.com/';
const linksURL = 'data/links.json';

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data); // Test the JSON result
    displayLinks(data.weeks);
  } catch (error) {
    console.error(error);
  }
}

getLinks(); // Call the getLinks function

function displayLinks(weeks) {
  const linksContainer = document.getElementById('links-container');
  weeks.forEach((week) => {
    const weekElement = document.createElement('div');
    weekElement.innerHTML = `
      <h2>${week.week}</h2>
      <ul>
        ${week.links.map((link) => `<li><a href="${baseURL}${link.url}">${link.title}</a></li>`).join('')}
      </ul>
    `;
    linksContainer.appendChild(weekElement);
  });
}