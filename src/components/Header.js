/*eslint-disable */
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <h1>Todos</h1>
      <p>Items will persist in the browser local storage</p>
      <Navbar />
    </header>
  );
};

export default Header;
