import React, { useEffect } from 'react'
import "./style.css"
import HomeImage from "../assets/images/welcome-img.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScheduleButton from "../../components/schedule-consult-btn"
import chart  from "../assets/images/ecommers-img.png"
import RoundedBg  from "../assets/images/home-rounded.png"
import Curve  from "../assets/images/home-curve.png"
import Wave  from "../assets/images/home-wave.png"

const Home = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='background-img'>
            <div className='container'>
                <div class="row">
                    <div class="col-lg-5 d-flex align-items-center">
                        <div className='text-start ' data-aos="fade-right">
                            <div className='mb-4'>
                                <span className='fw-semibold heading-title p-2 mb-5'>Maximize Your Potential with Expert Consultation</span>
                            </div>
                            <h1 className='fw-bolder mb-4 heading'>
                                Consulting driving
                                 growth and <span className='grow'>grow </span>
                                for your business.
                            </h1>
                            <p className='mb-3'>Our team brings years of experience across various industries, fallowing us to offer insights and strategies that are tailored to your specific business needs to your business success.</p>
                            <ScheduleButton/>
                            <img src={Wave}/>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                    <div class="col-lg-6">
                        <div className='pt-4'>
                            <img src={HomeImage} className='half-img'/>
                            <img src={Curve} className='rounded-curve'/>
                            <img src={chart} className='chart' data-aos="fade-up"/>
                            <img src={RoundedBg} className='rounded-bg'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home