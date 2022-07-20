import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/structural/adapter/blueprint">
        AdapterBlueprint
      </Link>
    </div>
  );
}

export default Nav;
