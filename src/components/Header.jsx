const links = [
  { id: 1, label: 'Features', href: '#features' },
  { id: 2, label: 'Contact', href: '#contact' },
];

function Header() {
  return (
    <header className="header">
      <a className="logo" href="#top">Launchly</a>
      <nav>
        <ul className="nav-links">
          {links.map(({ id, label, href }) => (
            <li key={id}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;