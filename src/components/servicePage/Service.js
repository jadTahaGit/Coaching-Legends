import './Service.scss';
import blueTick from './../../assets/service/blueTick.svg';
import { Link } from 'react-router-dom';

import Overview from './leftSide/Overview';
import Description from './leftSide/Description';
import AboutTheSeller from './leftSide/AboutTheSeller';
import FAQ from './leftSide/FAQ';
import PackageSelector from '../ui/packageSelector/PackageSelector.js';

const Service = () => {
  return (
    <div className="Service">
      <div className="Service_navbar">{/* import it here */}</div>
      <div className="Service_body">
        <div className="Left_side">
          <Overview></Overview>
          <Description></Description>
          <AboutTheSeller></AboutTheSeller>
          <FAQ></FAQ>

          <div className="Compare_packages"></div>
          <div className="Recommendations"></div>
          <div className="FAQ"></div>
          <div className="Reviews"></div>
        </div>
        <PackageSelector></PackageSelector>
      </div>
    </div>
  );
};

export default Service;
