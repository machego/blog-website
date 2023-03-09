import './header.css'

const Header = () => {
  return (
      <div className='header'>
          <div className='headerTitles'>
              <span className='headerTitleSm'>React & Node</span>
              <span className='headerTitleLg'>Blog</span>
          </div>
          <img
              className='header-img'
              src='../../assets/main.jpg'
              alt='' 
          />
          
      </div>
  )
}

export default Header