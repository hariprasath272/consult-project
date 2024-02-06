import React, { useEffect } from 'react'
import "./style.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScheduleButton = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <div class="outer pt-2"  data-aos="fade-up">
                <button class="button">
                    <div class="text d-flex"><div className='d-flex justify-content-center align-items-center ps-4'>Schedule a Consultation </div><span style={{fontSize:"2rem"}}><i class="bi bi-arrow-right-short"></i></span></div>
                </button>
            </div>
        </div>
    )
}

export default ScheduleButton