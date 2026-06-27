import gymImg from "./assets/gym.png";

function Header() {
  return (
    <header>
      <img src={gymImg} alt="Gym logo" />
      <h1>React Demo Gym</h1>
      <p>Explore react functionalities as a personal demo.</p>
    </header>
  );
}

export default Header;