import './post.css'

const Post = () => {
  return (
      <div clssName='post'>
          <img 
              className='postImg'
              src='./1155577.jpg'
              alt=''
          />
          <div className='postInfo'>
              <div className='postCats'>
                  <span className='postCat'>Music</span>
                  <span className='postCat'>Life</span>
              </div>
              <span className='postTitle'>Lorem ipsum dolor
              </span> 
              <hr />
              <span className='postDate'>40 min ago</span> 
          </div>
          <p className='postDescription'>Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua.
          </p>

      </div>
  )
}

export default Post