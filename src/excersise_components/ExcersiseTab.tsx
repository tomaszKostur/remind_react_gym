type ExerciseTabProps = {
  img: string;
  name: string;
  level: string;
  onClickHandler: () => void;
};

function ExcersiseTab({ img, name, level, onClickHandler }: ExerciseTabProps): import("react").JSX.Element {
  return (
    <li>
      <img src={img} alt={name} className="icon-white" />
      <h3>{name}</h3>
      <p>{level}</p>
      <button onClick={onClickHandler}>Do it</button>
    </li>
  );
}

export default ExcersiseTab;