import React from 'react'

const Profile = () => {
    return (
        <div className="py-3 border-bottom">
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                
            }} >
                <div>
                    <img src="https://icdn.football-espana.net/wp-content/uploads/2020/09/Messi2709.jpg" alt="" style={{width: '200px', height: '200px', borderRadius:'100px', backgroundSize: 'cover', border: 'black'}} />
                </div>
                <div className="py-3" style={{marginRight: "200px"}}><h3>Lionel Messi</h3>
                <div className='py-3' style={{display: 'flex', justifyContent: 'space-between'}} >
                    <h5>40 posts</h5>
                    <h5 style={{paddingLeft: '15px' ,paddingRight: '15px'}}>40 followers</h5>
                    <h5>40 following</h5>
                </div>
                </div>
            </div>
            <div className="row py-3">
                <div className="col-md-4">
                    <img src="https://cdn.vox-cdn.com/thumbor/wCFSiMI4F53gU2RlSf4u9UeDCNA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9635235/069_Stephen_Thompson_vs_Jorge_Masvidal.jpg" alt="" 
                        style= {{height:'340px', borderRadius:'15px'}}
                    />
                </div>
                <div className="col-md-4">
                    <img src="https://cdn.vox-cdn.com/thumbor/wCFSiMI4F53gU2RlSf4u9UeDCNA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9635235/069_Stephen_Thompson_vs_Jorge_Masvidal.jpg" alt="" 
                        style= {{height:'340px',  borderRadius:'15px'}}
                    />
                </div>
                <div className="col-md-4">
                    <img src="https://cdn.vox-cdn.com/thumbor/wCFSiMI4F53gU2RlSf4u9UeDCNA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9635235/069_Stephen_Thompson_vs_Jorge_Masvidal.jpg" alt="" 
                        style= {{height:'340px', borderRadius:'15px'}}
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Profile
