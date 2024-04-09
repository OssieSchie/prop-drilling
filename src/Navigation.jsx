function Navigation() {
  // const links = ["/", "/about-us", "/stuff"]
  const links = ["/", "/about-us", "/systuff"];
  const asLi = links.map((link) => <li>{link}</li>);
  return <nav>{asLi}</nav>;
}

export default Navigation;
