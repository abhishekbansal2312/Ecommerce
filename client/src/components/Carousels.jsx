import React from "react";

function UncontrolledExample() {
  const imageUrl = "";
  return (
    <div id="carouselExample" className="carousel slide h-96">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/e-commerce-8b8a2.appspot.com/o/first.png?alt=media&token=e11f62e3-c899-4ba1-a3ac-f9da541276a5"
            className="d-block w-100"
            alt="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/e-commerce-8b8a2.appspot.com/o/second.png?alt=media&token=cef06958-a5f5-4167-8da9-221ab5a50598"
            className="d-block w-100"
            alt="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/e-commerce-8b8a2.appspot.com/o/third.png?alt=media&token=34766ebb-5a80-4f2c-b876-8f8486ec82f8"
            className="d-block w-100"
            alt="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev black-button"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default UncontrolledExample;
