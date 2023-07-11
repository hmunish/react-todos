import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
  }, [dropdown]);
  return (
    <nav>
      <ul>
        <li ref={ref}>Home</li>
        <li>About</li>
        <li>
          <button onClick={() => setDropdown(!dropdown)} type="button">
            Services
            {' '}
            <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
