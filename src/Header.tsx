import gymImg from "./assets/gym.png";

function Header() {
  return (
    <header>
      <img src={gymImg} alt="Gym logo" />
      <h1>React Remind gym</h1>
      <p>Lets for once do not care about styling and use one from example.</p>
    </header>
  );
}

export default Header;