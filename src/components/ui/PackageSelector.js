import React, { useState } from 'react';
import blueTick from './../../assets/service/blueTick.svg';
import { Link } from 'react-router-dom';

const PackageSelector = () => {
  const [packageType, setPackageType] = useState('basic'); // Default package

  const renderPackage = () => {
    switch (packageType) {
      case 'basic':
        return (
          <div className="package_skeleton">
            <h2 className="Price">US$75</h2>
            <p className="description">
              <span>One Off Call - Advice & Analysis </span>
              We’ll discuss your life, mental blocks & goals - 45 Minutes
              Duration (Subscribe for 1 call a month)
            </p>
            <div className="more_info">
              <div>
                <img src={blueTick} alt="" />
                <p className="delivery">30 Days Delivery</p>
              </div>
              <div>
                <img src={blueTick} alt="" />
                <p className="session">
                  <span> {'1'}</span> Session
                </p>
              </div>
            </div>
            <button className="continue">Continue </button>
          </div>
        );
      case 'standard':
        return (
          <div className="package_skeleton">
            <h2 className="Price">US$175</h2>
            <p className="description">
              <span>One Off Call - Advice & Analysis </span>
              We’ll discuss your life, mental blocks & goals - 45 Minutes
              Duration (Subscribe for 1 call a month)
            </p>
            <div className="more_info">
              <div>
                <img src={blueTick} alt="" />
                <p className="delivery">30 Days Delivery</p>
              </div>
              <div>
                <img src={blueTick} alt="" />
                <p className="session">
                  <span> {'1'}</span> Session
                </p>
              </div>
            </div>
            <button className="continue">Continue </button>
          </div>
        );
      case 'premium':
        return (
          <div className="package_skeleton">
            <h2 className="Price">US$375</h2>
            <p className="description">
              <span>One Off Call - Advice & Analysis </span>
              We’ll discuss your life, mental blocks & goals - 45 Minutes
              Duration (Subscribe for 1 call a month)
            </p>
            <div className="more_info">
              <div>
                <img src={blueTick} alt="" />
                <p className="delivery">30 Days Delivery</p>
              </div>
              <div>
                <img src={blueTick} alt="" />
                <p className="session">
                  <span> {'1'}</span> Session
                </p>
              </div>
            </div>
            <button className="continue">Continue </button>
          </div>
        );
      default:
        return <div>Select a Package</div>;
    }
  };

  return (
    <div className="Right_side">
      <div className="Plans_Wrapper">
        <div className="btns">
          <button className="btn basic" onClick={() => setPackageType('basic')}>
            Basic
          </button>
          <button
            className="btn standard"
            onClick={() => setPackageType('standard')}
          >
            Standard
          </button>
          <button
            className="btn premium"
            onClick={() => setPackageType('premium')}
          >
            Premium
          </button>
        </div>

        {renderPackage()}
      </div>
      <div className="Contact_seller_btn">
        <button>
          <Link to={`/chat`} state={{ seller: 'Pedro' }}>
            Contact Seller
          </Link>
        </button>
      </div>
    </div>
  );
};

export default PackageSelector;
