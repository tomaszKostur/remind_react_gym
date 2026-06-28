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

import ChooseExcersise from "./excersise_components/ChooseExcersise";
import Header from "./Header";
import NavButton from "./NavButton";

function App() {
  return (
    <div>
      <Header />
      <main>
        <ChooseExcersise />
        <div className="nav-bar">
          <NavButton target="/game" name="Go to Game" />
          <NavButton target="/external_data" name="Go External Data Example" />
        </div>
      </main>
    </div>
  );
}

export default App;
