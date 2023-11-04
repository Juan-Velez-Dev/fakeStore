import './NavBar.css'

function NavBar() {
  return (
    <div className='navBar-Container'>
        <h1 className='navBar-title'>FakeStore</h1>
        <div>
            <ul className='navBar-links-container'>
                <li>Home</li>
                <li>About</li>
                <li>Shopping Cart</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar