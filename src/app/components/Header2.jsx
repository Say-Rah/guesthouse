export default function Header2() {
    return (
      <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
          {/* Text Section */}
          <div className="col-md-6 p-5 mt-lg-5">
            <h1 className="display-5 animated fadeIn mb-4"></h1>
            <nav aria-label="breadcrumb animated fadeIn">
              <ol className="breadcrumb text-uppercase">
                <li className="breadcrumb-item">
                  <a href="#"></a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#"></a>
                </li>
                <li className="breadcrumb-item text-body active" aria-current="page">
                  
                </li>
              </ol>
            </nav>
          </div>
          
          {/* Image Section */}
          <div className="col-md-6 animated fadeIn">
            <img className="img-fluid" src="/img/header.jpg" alt="Property Agent Header" />
          </div>
        </div>
      </div>
    );
  }
