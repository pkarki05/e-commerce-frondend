import React from 'react'
import { Link } from 'react-router-dom'
import blogImage from '../images/blog-1.jpg'

const BlogCart = () => {
  return (
    <div className='col-3'>
        <div className="blog-card">
            <div className="card-image">
                <img src={blogImage} className='img-fluid' alt="" />
            </div>
            <div className="blog-content">
                <p className='date'>11 Feb, 2024</p>
                <h5 className='title'>A beautiful sunday morning</h5>
                <p className='desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.

                 tempore dignissimos maiores voluptatem tempora? laborum!</p>
                <Link to='/' className='button'>Read More</Link>
            </div>
        </div>
      
    </div>
  )
}

export default BlogCart
