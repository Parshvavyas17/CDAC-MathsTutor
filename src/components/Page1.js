import './page1.css'

export default function Page1() {
  return (
    <div className='page1'>
      <div className='nav-container'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <b>Contents</b>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#Aim">
                    Aim
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#Procedure"
                  >
                    Procedure
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#Video Tutorial"
                  >
                    Video Tutorial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/Page2">
                    Simulation
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#Conclusion"
                  >
                    Conclusion
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="my-3 mx-3 page1-content">
        <div className="my-3 mx-3" id="Aim">
          <h3>Aim: </h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipisicing elit. 
            Fugit amet assumenda,
            tempore inventore dolorum modi
            <br />
            perspiciatis molestiae sed voluptatem sunt!
          </p>
        </div>
        <div className="my-3 mx-3" id="Procedure">
          <h3>Procedure: </h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipisicing elit. <br />
            Fugit amet assumenda, <br />
            tempore inventore dolorum modi
            <br />
            perspiciatis molestiae sed voluptatem sunt!
          </p>
        </div>
        <div className="my-3 mx-3" id="Video Tutorial">
          <h3>Video Tutorial: </h3>
          <br />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/c8W9_iaERnU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="my-3 mx-3" id="Simulation">
          <h3>Simulation: </h3>
          <br />
          <p>
            Will go to the integral solving page <br />
          </p>
        </div>
        <div className="my-3 mx-3" id="Conclusion">
          <h3>Conclusion: </h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipisicing elit. <br />
            Fugit amet assumenda, <br />
            tempore inventore dolorum modi <br />
            perspiciatis molestiae sed voluptatem sunt!
          </p>
        </div>
      </div>
    </div>
  );
}
