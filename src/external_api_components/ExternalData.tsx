import Header from "@/Header";
import JsonplaceholderUsers from "./JsonplaceholderUsers";
import CatApiImages from "./CatApiImages";
import NavButton from "@/NavButton";

function ExternalData() {
  return (
    <div>
      <Header />
      <main>
        <JsonplaceholderUsers />
        <CatApiImages />
        <div className="nav-bar">
          <NavButton target="/game" name="Go to Game" />
          <NavButton target="/" name="Go Gym Home" />
        </div>
      </main>
    </div>
  );
}

export default ExternalData;
