import { useNavigate } from "react-router-dom";

function NavButton({ target, name }) {
  const navigate = useNavigate();
  return (
    <div className="centered">
      <button
        id="nav-button"
        onClick={() => {
          navigate(target);
        }}
      >
        {/* <a href={target}>{name}</a> */}
        {name}
      </button>
    </div>
  );
}

export default NavButton;
