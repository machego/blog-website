import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

const Settings = () => {
  return (
      <div className='settings'>
          <div className='settingsWrapper'>
             <div className='settingsTitle'>
                  <span className='settingsUpdateTitle'>Update Your Account</span> 
                  <span className='settingsDeleteTitle'>Delete Account</span>    
              </div>
              <form className='settingsForm'>
                  <label>Profile Picture</label>
                  <div className='settingsProfilePicture'>
                      <img
                          src='./1324803.jpg' 
                          alt='' 
                      />
                      <label htmlFor='fileInput'>
                      <i className="settingsProfilePictureIcon fa-regular fa-circle-user"></i>
                      </label> 
                      <input type='file' id='fileInput' style={ { display: 'none' } } /> 
                  </div>
                  <label>Username</label>
                  <input type='text' placeholder='Jane' />
                  <label>Email</label>
                  <input type='email' placeholder='jane@gmail.com' />
                  <label>Password</label>
                  <input type='password' placeholder='...' />
                  <button className='settingsSubmit'>Update</button>
             </form>  
          </div> 
          <Sidebar />
      </div>
  )
}

export default Settings