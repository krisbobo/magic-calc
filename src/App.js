import { Link, Outlet } from 'react-router-dom';

const App = () => (
  <>
    <header className="header">
      <h1>Math Magician</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main className="detail">
      <Outlet />
    </main>
  </>
);

export default App;
