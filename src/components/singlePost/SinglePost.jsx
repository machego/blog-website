import './singlePost.css'

const SinglePost = () => {
  return (
      <div className='singlePost'>
          <div className='singlePostWrapper'>
              <img className='singlePostImg'
                  src='./1647972.jpg'
                  alt='' 
              />   
              <h1 className='singlePostTitle'>
                  Lorem ipsum dolor sit amet
                  <div className='singlePostEdit'>
                      <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                      <i className="singlePostIcon fa-regular fa-trash-can"></i>
                  </div> 
              </h1>
              <div className='singlePostInfo'>
                  <span className='singlePostAuthor'>Author: <b>Jane</b></span>
                  <span className='singlePostDate'>40 min ago</span>
              </div>
              <p className='singlePostDescription'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut
              </p>
          </div>
      </div>
  )
}

export default SinglePost 