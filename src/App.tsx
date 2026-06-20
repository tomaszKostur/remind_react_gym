// import { Fragment } from "react";
// import { Outlet, ScrollRestoration } from "react-router-dom";

// export default function App() {
//   return (
//     <Fragment>
//       <Outlet />
//       <ScrollRestoration />
//     </Fragment>
//   );
// }
import {SetStateAction, useState} from "react";
import gymImg from "./assets/gym.png";
import benchPressImg from "./assets/02_bench_press.svg";
import deadliftImg from "./assets/03_deadlift.svg";
import barbelSquatImg from "./assets/01_barbell_squat.svg";

const gymTopics = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const description_map = {
  bench: "good for chest",
  deadlift: "good for spine",
  squat: "good_for legs",
};

function Header() {
  return (
    <header>
      <img src={gymImg} alt="Gym logo" />
      <h1>React Remind gym</h1>
      <p>Lets for once do not care about styling and use one from example.</p>
    </header>
  );
}

function ExcersiseTab({ img, name, level, onClickHandler}) {
  return (
    <li>
      <img src={img} alt={name} class="icon-white" />
      <h3>{name}</h3>
      <p>{level}</p>
      <button
        onClick={onClickHandler}
      >
        Do it
      </button>
    </li>
  );
}

function App() {
  const [current_excercise, current_excercise_setter] = useState('bench');
  function description_change(new_excercise){
    current_excercise_setter(new_excercise);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>
          Todays gym topic is: {gymTopics[genRandomInt(2)]}. Do{" "}
          {genRandomInt(100)} number of sets
        </h2>
        <section id="core-concepts">
          <ul>
            <ExcersiseTab
              img={benchPressImg}
              name="Bench"
              level="100"
              onClickHandler={()=>{description_change('bench')}}
            />
            <ExcersiseTab
              img={deadliftImg}
              name="Dead Lift"
              level="180"
              onClickHandler={()=>{description_change('deadlift')}}
            />
            <ExcersiseTab
              img={barbelSquatImg}
              name="Squat"
              level="34"
              onClickHandler={()=>{description_change('squat')}}
            />
          </ul>
          <p>{description_map[current_excercise]}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
