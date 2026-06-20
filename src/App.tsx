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

import gymImg from "./assets/gym.png";
import benchPressImg from "./assets/02_bench_press.svg";
import deadliftImg from "./assets/03_deadlift.svg";
import barbelSquatImg from "./assets/01_barbell_squat.svg";

const gymTopics = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src={gymImg} alt="Gym logo" />
      <h1>React Remind gym</h1>
      <p>Lets for once do not care about styling and use one from example.</p>
    </header>
  );
}

function ExcersiseTab(props) {
  return (
    <li>
      <img src={props.img} alt={props.name} class="icon-white" />
      <h3>{props.name}</h3>
      <p>{props.level}</p>
    </li>
  );
}

function App() {
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
            <ExcersiseTab img={benchPressImg} name="Bench" level="100" />
            <ExcersiseTab img={deadliftImg} name="Dead Lift" level="180" />
            <ExcersiseTab img={barbelSquatImg} name="Squat" level="34" />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
