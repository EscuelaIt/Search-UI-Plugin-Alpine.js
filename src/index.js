export default function (Alpine) {
  Alpine.directive('search-ui', (el, {modifiers}) => {
    let color = '#888888';
    if(modifiers.includes('white')) {
      color = '#fff';
    }
    if(modifiers.includes('black')) {
      color = '#000';
    }
    const icon = document.createElement('span');
    icon.className = 'search-icon';
    icon.innerHTML = `
      <style>
        .search-container {
          position: relative;
          display: inline-block;
        }

        .search-container input {
          padding: 5px 30px;
        }

        .search-icon {
          position: absolute;
          left: 5px;
          top: 3px;
          pointer-events: none;
          color: gray;
        }
      </style>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="${color}"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
    `;
    el.appendChild(icon);
  });
}
