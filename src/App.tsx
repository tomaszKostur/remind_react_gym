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


import ChooseExcersise from "./ChooseExcersise";
import Header from "./Header"



function App() {
  return (
    <div>
      <Header />
      <main>
        <ChooseExcersise/>
      </main>
    </div>
  );
}

export default App;
