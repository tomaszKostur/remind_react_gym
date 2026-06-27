import { SetStateAction, useState } from "react";
import benchPressImg from "@/assets/02_bench_press.svg";
import deadliftImg from "@/assets/03_deadlift.svg";
import barbelSquatImg from "@/assets/01_barbell_squat.svg";
import ExcersiseTab from "./ExcersiseTab";


const gymTopics = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

const description_map = {
  bench: "good for chest",
  deadlift: "good for spine",
  squat: "good_for legs",
};



function ChooseExcersise() {
  const [current_excercise, current_excercise_setter] = useState("bench");

  function description_change(new_excercise: SetStateAction<string>) {
    current_excercise_setter(new_excercise);
  }
  
  return (
    <div>
      <h2>Demo of dynamic text content. "Do it" exercise and see what is good for! </h2>
      <p>Look also at randimized topic and number of sets.</p>
      <hr/>
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
            onClickHandler={() => {
              description_change("bench");
            }}
          />
          <ExcersiseTab
            img={deadliftImg}
            name="Dead Lift"
            level="180"
            onClickHandler={() => {
              description_change("deadlift");
            }}
          />
          <ExcersiseTab
            img={barbelSquatImg}
            name="Squat"
            level="34"
            onClickHandler={() => {
              description_change("squat");
            }}
          />
        </ul>
        <h2 className="mt-1">{description_map[current_excercise]}</h2>
      </section>
    </div>
  );
}

export default ChooseExcersise;