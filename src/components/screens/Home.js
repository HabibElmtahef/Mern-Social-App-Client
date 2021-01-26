import React from 'react'


const Home = () => {
    return (
      <div className="row">
        <div className="col-md-7 py-4">
        <div className="card p-3" style={{borderRadius:'10px', boxShadow:'2px 2px 2px 2px rgba(0,0,0,0.15)'}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <img src="https://cdn.vox-cdn.com/thumbor/wCFSiMI4F53gU2RlSf4u9UeDCNA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9635235/069_Stephen_Thompson_vs_Jorge_Masvidal.jpg" alt=""
              style={{width:'60px',height:'60px', borderRadius:'50%'}}
            />
            <h5 style={{marginLeft:'15px'}}>Habib Elm</h5>
          </div>
          <div className="py-3">
            <img src="https://cdn.vox-cdn.com/thumbor/Cj5LGM26HmemaXAuvANZftsO8Ak=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19342617/100_Stephen_Thompson_x_Vicente_Luque.jpg" alt=""
              style={{height:'500px', width:'500px', borderRadius:'15px'}}
            />
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <i className="far fa-heart" style={{color:'red',width:'40px',height:'40px'}}></i>
            <i className="far fa-comment" style={{width:'40px',height:'40px'}}></i>
            <i className="fas fa-retweet" style={{width:'40px',height:'40px'}}></i>
          </div>
            <div className='py-2' style={{display: 'flex', alignItems: 'center'}}>
            <img src="https://cdn.vox-cdn.com/thumbor/wCFSiMI4F53gU2RlSf4u9UeDCNA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9635235/069_Stephen_Thompson_vs_Jorge_Masvidal.jpg" alt=""
              style={{width:'60px',height:'60px', borderRadius:'50%'}}
            />
            <h5 style={{marginLeft:'15px'}}>Title</h5>
          </div>
          <input type="text" placeholder="Add Comment" className="form-control border-none"/>
          </div>
        </div>
        <div className="col-md-5 py-4">
          <div className="card p-3" style={{borderRadius:'10px', boxShadow:'2px 2px 2px 2px rgba(0,0,0,0.15)'}}>
            <h3>Suggestion</h3>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <img src="https://cdn.vox-cdn.com/thumbor/wCFSiMI4F53gU2RlSf4u9UeDCNA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9635235/069_Stephen_Thompson_vs_Jorge_Masvidal.jpg" alt=""
              style={{width:'60px',height:'60px', borderRadius:'50%'}}
            />
            <h5 style={{marginLeft:'15px'}}>Habib Elm</h5>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <img src="https://cdn.vox-cdn.com/thumbor/wCFSiMI4F53gU2RlSf4u9UeDCNA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9635235/069_Stephen_Thompson_vs_Jorge_Masvidal.jpg" alt=""
              style={{width:'60px',height:'60px', borderRadius:'50%'}}
            />
            <h5 style={{marginLeft:'15px'}}>Habib Elm</h5>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <img src="https://cdn.vox-cdn.com/thumbor/wCFSiMI4F53gU2RlSf4u9UeDCNA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9635235/069_Stephen_Thompson_vs_Jorge_Masvidal.jpg" alt=""
              style={{width:'60px',height:'60px', borderRadius:'50%'}}
            />
            <h5 style={{marginLeft:'15px'}}>Habib Elm</h5>
          </div>
          </div>
        </div>
        </div>
    )
}

export default Home
