export default function Header(data) {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
      </nav>
      <div>
        <p>
          Velkommen {data.username} ({data.email})
        </p>
      </div>
    </header>
  );
}
