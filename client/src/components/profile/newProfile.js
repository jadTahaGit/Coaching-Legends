import './NewProfile.scss';
import profilePhoto from '../../assets/coachProfile/jad.jpeg';
import Star from '../../assets/service/star.svg';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import UpdateUserInfoForm from '../form/UpdateUserInfoForm';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const CoachProfile = () => {
  return (
    <div className="newCoachProfile">
      <div className="leftSidebar">
        <div className="userInfoBox">
          <div className="header">
            <div className="imgWrapper">
              <img src={profilePhoto} alt="user Profile" />
            </div>
            <div className="info">
              <p className="username">Jadtaha13</p>
              <p className="catagory">Dev Coach</p>
              <div className="rating">
                <div className="stars">
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                </div>
                <span className="avg_rating">5</span>
                <span className="num_of_orders">({'104'})</span>
              </div>
            </div>
            <hr className="hrGray" />
            <div className="btnWrapper">
              <button className="btn contactMe">Contact Me</button>
            </div>
          </div>
          <div className="middleSection">
            <div className="flex country">
              <LocationOnIcon /> Germany
            </div>{' '}
            <div className="flex memberSince">
              <PersonIcon /> Feb 2022
            </div>{' '}
          </div>
        </div>
        <div className="user2ndInfoBox">
          <div className="Description">
            <h3 className="title">Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              sunt error, placeat culpa cupiditate adipisci blanditiis, sit
              aspernatur inventore voluptas nulla dolor! Repudiandae, incidunt.
              Ad nisi dolorem perferendis alias dignissimos. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Necessitatibus quisquam
              inventore tempora! Amet eius quasi perferendis fugiat eligendi
              velit ea maxime pariatur iusto. Illum quasi maiores architecto sit
              laboriosam sunt.{' '}
            </p>
          </div>
          <div className="languages">
            <div className="language">
              English - <span className="langLevel">Fluent</span>
            </div>
            <div className="language">
              Spanish - <span className="langLevel">Conversational</span>
            </div>
            <div className="language">
              Serbian - <span className="langLevel">Nativ/Bilingual</span>
            </div>
          </div>
          <div className="skillTests">
            <div className="test">
              English Language <span className="testGrade"></span>/10
            </div>
          </div>
          <div className="linkedAccounts">
            <div className="account">
              <GoogleIcon></GoogleIcon>
              <span>Google</span>
            </div>{' '}
            <div className="account">
              <FacebookIcon></FacebookIcon>
              <span>Facebook</span>
            </div>
          </div>
          <div className="skills">
            <div className="skill"> Goal setting</div>
            <div className="skill"> Psychological counseling</div>
            <div className="skill">Mindset coaching</div>
            <div className="skill">Mental health</div>
          </div>
        </div>
      </div>
      <div className="main">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
        pariatur aliquam vel deserunt at libero laboriosam? Omnis error qui
        architecto! Cupiditate inventore minus ullam perferendis expedita iure
        saepe assumenda magnam? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Exercitationem distinctio aperiam velit quisquam
        voluptatem animi omnis doloribus reiciendis deserunt sint? Quasi cum
        soluta earum maiores iure voluptas dolorem sit aut? Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Nesciunt maxime obcaecati cumque
        voluptatem dolorum officiis odit consequuntur iste excepturi dolore ipsa
        et, odio magnam in sapiente repellat alias quos ullam?
      </div>
    </div>
  );
};

export default CoachProfile;
