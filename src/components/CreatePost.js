import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../redux/features/PostSlice';
import Spinner from './Spinner';


const CreatePost = () => {

  const [values, setValues] = useState({ title: "", body: "" })
  const [showPost, setShowPost] = useState(false);
  const { title, body } = values
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, post = [] } = useSelector(state => state.post || {});


  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(createPost({values}))
    setValues({title:'',body:''});
    setShowPost(true);
  }

  //show created post function
  const showCreatedPost = () =>{
    return(
      <>
      {loading? <Spinner/>: (
        
            <div className='card mt-4'>
              <div className='card-body'>
                <h5 className='card-title'>{post[0].title}</h5>
                <p className='card-text'> {post[0].body} </p>
                </div>
            </div>
      
      )}
      </>
    )
  }

  return (
    <>
      <div className='row  mt-4 d-flex align-items-center justify-content-center'>
        <div className='col-md-8'>
          <form>
            <div className='mb-3'>
              <h1 className='text-center p-2 bg-primary text-white'>Create Post</h1>
              <input type='text'
                placeholder='Enter Post Title'
                value={title}
                onChange={(e) => setValues({ ...values, title: e.target.value })}
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp' />

            </div>
            <div className='form-floating'>
              <textarea
                className='form-control'
                placeholder='Enter Post Description'
                value={body}
                onChange={(e)=> setValues({...values, body: e.target.value})}
                id='floatingTextarea'
                defaultValue={""} />
              <label htmlFor='floatingTextarea'>Add Post Description</label>
            </div>
            <button 
            className='btn btn-primary mt-4'
            onClick={()=>navigate('/')}
            >Go Home</button>
          <button 
          className='btn btn-danger ms-4 mt-4' 
          type="submit"
          onClick={handleSubmit} 
          >Submit</button>
                  
          </form>
<div className='mt-4'>
  {showPost && <div>{showCreatedPost()}</div> }
</div>
        </div>
      </div>

    </>
  )
}

export default CreatePost
