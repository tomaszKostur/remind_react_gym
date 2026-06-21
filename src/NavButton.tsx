function NavButton({target, name}) {
    return (
  <div className="centered">
    <button id="nav-button">
      <a href={target}>{name}</a>
    </button>
  </div>
  );
}

export default NavButton;
