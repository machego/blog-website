import './sidebar.css'

const Sidebar = () => {
  return (
      <div className='sidebar'>
        <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src='./40192.jpg' alt='' />
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Life</li> 
          <li className='sidebarListItem'>Music</li> 
          <li className='sidebarListItem'>Style</li> 
          <li className='sidebarListItem'>Sport</li> 
          <li className='sidebarListItem'>Tech</li> 
          <li className='sidebarListItem'>Cinema</li> 
      </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i> 
        </div> 
      </div>
    </div>
  )
}

export default Sidebar