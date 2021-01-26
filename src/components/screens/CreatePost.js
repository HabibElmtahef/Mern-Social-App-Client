import {useState} from 'react'

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')

    return (
        <div className="col-md-6 py-5 mx-auto">
           <div className="card p-4">
               <h3 className='mx-auto py-3'>Create Post</h3>
               <form action="" className="py-2">
                   <div className="form-group">
                       <label>Title:</label>
                       <input type="text" value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)} className="form-control"/>
                   </div>
                   <div className="form-group">
                       <label>Body:</label>
                       <input type="text" value={body} placeholder='Body' onChange={(e) => setBody(e.target.value)} className="form-control"/>
                   </div>
                   <div className="form-group">
                       <label>Image:</label>
                       <input type="file" placeholder='Image' onChange={(e) => setImage(e.target.value)} className="form-control"/>
                   </div>
                   <button className="btn btn-block btn-success">Save Post</button>
               </form>
           </div>
        </div>
    )
}

export default CreatePost
