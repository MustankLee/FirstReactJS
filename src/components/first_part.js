import earth from "../asset/Earth.jpg";
import ContentSecond from "../components/second_part.js";
import ContentThird from "../components/third_part.js";
import {Link} from 'react-router-dom'

function ContentFirst() {
  return (
    <div>
      <div className="first-part d-flex">
        <div className="w-100 d-flex">
          <div className="position-relative left-content w-50 text-light">
            <div className="pos-lef position-absolute w-75">
              <h1 className="fw-bold">
                Rico <span className="fn-purp">Susanto</span>
              </h1>
              <p>
                Bring me to your team, to support your daily task, your problem,
                your code, your algorithm, your layout, and everything you need
                to get the next level of technology and anything modern.
              </p>
              <div className="mt-4 w-100 d-flex">
                <Link to="/about" className="rounded text-center text-decoration-none w-50 btn-active p-3">
                  My Project
               </Link>
                <Link to="/myproject" className="rounded btn-nonactive ms-4 p-3 w-50 text-center text-decoration-none">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
          <div className="right-content w-50 d-flex align-items-center">
            <img src={earth} className="motion img-fluid"></img>
          </div>
        </div>
      </div>
      <ContentSecond />
      <ContentThird />
    </div>
  );
}
export default ContentFirst;
