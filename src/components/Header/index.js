import './style.scss';

const Header = () => {
  const menu = ['home', 'about', 'contact us'];

  const nav = menu
    .map((item, i) => {
      const href = item === 'home' ? '/' : `/${item}`;
      return `
        <a href=${href} data-link>
          ${item}
        </a>
      `;
    })
    .join('');

  return `
    <header class="header">
      <h2>Office Direct</h2>
      <ul class="nav">
        ${nav}
      </ul>
    </header>
  `;
};

export default Header;
