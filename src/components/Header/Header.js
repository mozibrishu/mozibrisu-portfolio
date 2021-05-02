import React from 'react';
import image from '../../images/MyPhoto_300x300-removebg-preview.png'
const Header = () => {
    return (
        <div className="p-5">
                <div className=" d-flex row justify-content-around" style={{ height: "80vh" }}>
                    <div className="col-12 col-md-6" >
                        <div className="text-center"><img className="myPhoto mx-auto" src={image} alt="" srcset="" /></div>
                    </div>
                    <div className="col-12 col-md-6 p-5">
                        <div className="m-auto w-70 ">
                            <h1>Hi!</h1>
                            <h2>I'm Mozibur Rahman</h2>
                            <h2>Web Developer</h2>
                            <a target="_blank" href="https://drive.google.com/file/d/12sDkBIYgYZrqfWlg8bw1WLGXP3ZyajKo/view?usp=sharing"><button className="btn btn-primary">Download Resume</button></a>
                        </div>

                    </div>
                </div>
            </div>
    );
};

export default Header;