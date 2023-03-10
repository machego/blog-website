import './write.css'

const Write = () => {
    return (
      <div className='write'>
          <img
              className='writeImage'
              src=''
              alt=''
          >
          <form className='writeForm'>
              <div className='writeFormGroup'>
                  <label htmlFor='fileInput'>
                  <i className="writeIcon fa-solid fa-plus"></i>
                  </label> 
                      <input
                          type='file'
                          id='fileInput'
                          style={ { display: 'none' } } 
                          
                      />
                      <input 
                          type='text'
                          placeholder='Title'
                          className='writeInput'
                          autoFocus='{true}' 
                      />
              </div>
              <div className='writeFormGroup'>
                  <textarea
                      placeholder='Tell your story...'
                      type='text'
                      className='writeInput writeText'
                      autoFocus={true}
                  />
              </div>
              <button className='writeSubmit' type='submit'>
                Publish
              </button>
            </form>
                
        </div>

    )
}

export default Write