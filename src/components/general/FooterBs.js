import "./FooterBs.scss";
import { Link } from "react-router-dom";

const FooterBs = (opacity) => {
  return (
    <div className="Footer" style={{ opacity: opacity }}>
        <div className="row justify-content-center justify-content-md-start bg-primary m-0 footer__top px-1 px-md-4 py-4">
            <div className="col-12 col-md-6 col-lg-4 text-center text-md-start">
                <h1 className="text-white">About Us</h1>
                <h5><Link className="footer__link" to="#">Help</Link></h5>
                <h5><Link className="footer__link" to="#">Help</Link></h5>
                <h5><Link className="footer__link" to="#">Help</Link></h5>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center text-md-start">
                <h1 className="text-white">About Us</h1>
                <h5><Link className="footer__link" to="#">Help</Link></h5>
                <h5><Link className="footer__link" to="#">Help</Link></h5>
                <h5><Link className="footer__link" to="#">Help</Link></h5>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center text-md-start">
                <h1 className="text-white">About Us</h1>
                <h5><Link className="footer__link" to="#">Help</Link></h5>
                <h5><Link className="footer__link" to="#">Help</Link></h5>
                <h5><Link className="footer__link" to="#">Help</Link></h5>
            </div>
        </div>
        <div className="row m-0 footer__bottom bg-dark px-1 px-md-4 py-2">
            <div className="d-flex text-center justify-content-center flex-column flex-md-row ">
                <Link className="footer__link me-0 me-md-4" to="#">Terms and Conditions</Link>
                <Link className="footer__link me-0 me-md-4" to="#">Privacy Policy</Link>
                <Link className="footer__link me-0 me-md-4" to="#">Cookie Policy</Link>
                <Link className="footer__link me-0 me-md-4" to="#">Refund Policy</Link>
            </div>
        </div>
    </div>
  );
};

export default FooterBs;
