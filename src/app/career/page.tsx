'use client';

import EmblaCarousel from '@/components/common/emblaCarousel';
import Image from 'next/image';
import Styles from './career.module.css';

import { useEffect } from 'react';

const CareerPage = () => {
    let imgWidth = 0;
    let windowWidth = 0;

    useEffect(() => {
        windowWidth = window.innerWidth;
    }, [windowWidth]);

    if (windowWidth >= 450) {
        imgWidth = 600;
    } else {
        imgWidth = 400;
    }

    return (
        <>
            <div className={Styles['main-div']}>
                <EmblaCarousel
                    slides={[
                        {
                            companyName: 'dunet',
                            projectName: '학생역량시스팀-LMS',
                            useLang: <div className={Styles['spring-div']}>spring</div>,
                            image: '',
                        },
                        {
                            companyName: 'KTDS',
                            projectName: 'CodeEyes-Guide Page',
                            useLang: <div className={Styles['spring-div']}>spring</div>,
                            image: '',
                        },
                        {
                            companyName: 'mocha-company',
                            projectName: 'H201-B2B',
                            useLang: <div className={Styles['nextJs-div']}>Next.js</div>,
                            image: (
                                <Image
                                    src={'/images/h201client.png'}
                                    className={Styles['career-image']}
                                    alt="Image"
                                    width={imgWidth}
                                    height={300}
                                    priority
                                />
                            ),
                        },
                    ]}
                    options={{
                        align: 'start',
                        loop: true,
                        skipSnaps: true,
                        inViewThreshold: 0.7,
                    }}
                />
            </div>
        </>
    );
};

export default CareerPage;
