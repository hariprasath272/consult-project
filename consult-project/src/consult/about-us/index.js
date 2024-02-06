import React from 'react'
import "./style.css"
import AboutUsImg from "../assets/images/about-us-img.png"
import AboutUsImgOne from "../assets/images/about2-img.png"
import AboutUsImgTwo from "../assets/images/about3-img.png"
import ScheduleButton from "../../components/schedule-consult-btn"



const AboutUs = () => {
    return (
        <div style={{ paddingTop: "6rem" }}>
            <div>
                <div className='container'>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div>
                                <img src={AboutUsImg} />
                            </div>
                            <div className='d-flex gap-4 pt-4'>
                                <div>
                                    <img src={AboutUsImgOne} />
                                </div>
                                <div>
                                    <img src={AboutUsImgTwo} />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12  d-flex align-items-center ">
                            <div className='text-start ps-5'>
                                <div className='mb-4'>
                                    <span className='fw-semibold about-us-title p-2 mb-3'>About Us</span>
                                </div>
                               
                                <div className='mb-5'>
                                    <h1 className='about-us-heading fw-bolder'>Maximize your potential with expert consultation.</h1>

                                </div>
                                <div className='mb-4 img-grey-bg '>  
                                    <p className='blue-text' >Ready to experience the benefits of partnering with PAE Business Consulting? Schedule a free consultation with our experienced team today and discover how our expertise can drive growth, optimize operations, and unlock your business's full potential.</p>
                                </div>
                                <div className='mb-3'>
                                    <p>Experience: Our team brings years of experience across various industries, allowing us to offer insights and strategies that are tailored to your specific business needs. Results-Driven Approach: We are committed to delivering tangible results and measurable outcomes for our clients.</p>
                                 <ScheduleButton/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs