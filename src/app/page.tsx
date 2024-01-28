import Home from "./shared/components/home";
import Menu from "./shared/components/menu";
import "./shared/style/globals.css";

export default function Page() {
  return (
    <main>
      <Home />
      <Menu />
    </main>
  );
}