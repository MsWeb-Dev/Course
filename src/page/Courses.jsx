import React from 'react';
import "./courses.css";

function Courses({ data }) {
  return (
    <div className="container  mt-2">
      <h1 className="text-center text-white">
        Kurslar
      </h1>
      <div className="row  justify-content-around ">
        {data.map((item, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 col-xl-3  box">
            <div className="content">
              <div className="content-img">
                <img src={item.image} alt="" className="img img-fluid" />
              </div>
              <h1 className="h1 text-center">
                {item.title}
              </h1>
              <p className="h4 text-center">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
