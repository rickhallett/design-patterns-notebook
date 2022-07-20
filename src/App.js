import { Outlet, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/structural/adapter/blueprint">
        AdapterBlueprint
      </Link>
      <Outlet />
    </div>
  );
}

export default App;
