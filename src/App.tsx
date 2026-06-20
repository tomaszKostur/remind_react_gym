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
const gymTopics = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src="src/assets/gym.png" alt="Gym logo" />
      <h1>React Remind gym</h1>
      <p>
        Lets for once do not care about styling and use one from example.
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Todays gym topic is: {gymTopics[genRandomInt(2)]}. Do {genRandomInt(100)} number of sets</h2>
      </main>
    </div>
  );
}

export default App;