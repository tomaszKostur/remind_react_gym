function NavButton({target, name}) {
    return (
  <div className="centered">
    <button id="game-button">
      <a href={target}>{name}</a>
    </button>
  </div>
  );
}

export default NavButton;
