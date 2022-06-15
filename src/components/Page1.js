import React from 'react'

export default function Page1() {
  return (
      <>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><b>Contents</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#Aim">Aim</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#Procedure">Procedure</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#Video Tutorial">Video Tutorial</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#Simulation">Simulation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#Conclusion">Conclusion</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
<hr/>
    </div>
    <div className="my-3 mx-3">
    <div className="my-3 mx-3" id="Aim">
        <h3>Aim: </h3>
        <br />
        <p>Lorem ipsum dolor sit amet,<br/>
             consectetur adipisicing elit. <br/>
             Fugit amet assumenda, <br/>
             tempore inventore dolorum modi<br/> 
             perspiciatis molestiae sed voluptatem sunt!</p>
    </div>
    <div className="my-3 mx-3" id="Procedure">
    <h3>Procedure: </h3>
        <br />
        <p>Lorem ipsum dolor sit amet,<br/>
             consectetur adipisicing elit. <br/>
             Fugit amet assumenda, <br/>
             tempore inventore dolorum modi<br/> 
             perspiciatis molestiae sed voluptatem sunt!</p>
    </div>
    <div className="my-3 mx-3" id="Video Tutorial">
    <h3>Video Tutorial: </h3>
        <br />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/c8W9_iaERnU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className="my-3 mx-3" id="Simulation">
    <h3>Simulation: </h3>
        <br />
        <p>Will go to the integral solving page <br/></p>
    </div>
    <div className="my-3 mx-3" id="Conclusion">
    <h3>Conclusion: </h3>
        <br />
        <p>Lorem ipsum dolor sit amet,<br/>
             consectetur adipisicing elit. <br/>
             Fugit amet assumenda, <br/>
             tempore inventore dolorum modi <br/>
             perspiciatis molestiae sed voluptatem sunt!</p>
    </div>
    </div>
    </>
  )
}
