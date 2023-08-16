'use client';

import EmblaCarousel from '@/components/common/emblaCarousel';
import Image from 'next/image';
import Styles from './career.module.css';

import { useEffect, useState } from 'react';

const CareerPage = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        setWindowWidth(window.innerWidth);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const maxWidth = 600;
    const imageWidth = Math.min(windowWidth, maxWidth);
    return (
        <>
            <div className={Styles['main-div']}>
                <EmblaCarousel
                    slides={[
                        {
                            companyName: 'Dunet',
                            projectName: '학생역량시스템-LMS',
                            useLang: (
                                <div style={{ display: 'flex' }}>
                                    <div className={Styles['lang-div']}>#spring</div>
                                    <div className={Styles['lang-div']}>#Java</div>
                                    <div className={Styles['lang-div']}>#Oracle</div>
                                </div>
                            ),
                            image: '',
                        },
                        {
                            companyName: 'KTDS',
                            projectName: 'CodeEyes-monitoring',
                            useLang: (
                                <div style={{ display: 'flex' }}>
                                    <div className={Styles['lang-div']}>#spring</div>
                                    <div className={Styles['lang-div']}>#Java</div>
                                    <div className={Styles['lang-div']}>#postgresql</div>
                                </div>
                            ),
                            image: '',
                        },
                        {
                            companyName: 'mocha-company',
                            projectName: 'H201-B2B',
                            useLang: (
                                <div style={{ display: 'flex' }}>
                                    <div className={Styles['lang-div']}>#Next.js</div>
                                    <div className={Styles['lang-div']}>#React</div>
                                    <div className={Styles['lang-div']}>#AWS</div>
                                </div>
                            ),
                            image: (
                                <Image
                                    style={{ maxWidth: imageWidth, width: '100%' }}
                                    src={'/images/h201client.png'}
                                    className={Styles['career-image']}
                                    alt="Image"
                                    width={imageWidth}
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
