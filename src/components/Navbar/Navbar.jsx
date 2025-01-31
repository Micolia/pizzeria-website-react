import './Navbar.css'

const Navbar = () => {
    const token = false;
    const total = 25000;

    return (
      <div className="navigazione">
        <div className='bttleft'>
        <button className='btnfill'>Home</button>
        {token ? (
          <>
            <button className='btnempty'>Profile</button>
            <button className='btnempty'>Logout</button>
          </>
        ) : (
          <>
            <button className='btnempty'>Login</button>
            <button className='btnempty'>Register</button>
          </>
        )}
        </div>
        <div className='bttright'>
        <button className='btnfill'>Total: ${total.toLocaleString()}</button>
        </div>
      </div>
    );
  };

export default Navbar