'use client';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Styles from '@/components/common/commonStyle/emblaCarousel.module.css';
type SlideData = {
    companyName: string;
    projectName: string;
    useLang: ReactNode;
    image?: ReactNode;
};

type PropType = {
    options: EmblaOptionsType | undefined;
    slides: SlideData[];
};

const EmblaCarousel = (props: PropType) => {
    //slides and option data
    const { options, slides } = props;
    /// 슬라이더 구현에 필요한 요소들을 useEmblaCarousel 에서 가져온다
    const [emblaRef, embla] = useEmblaCarousel(options);
    // 현재 보여지는 인덱스를 설정
    const [selectIndex, setSelectIndex] = useState(0);
    // 스크롤 스냅 Point 를 설정할 때 사용할 state
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    //슬라이더의 순서 저장
    const onSlideSequenceSave = useCallback(() => {
        if (!embla) return;
        setSelectIndex(embla.selectedScrollSnap());
    }, [embla, setSelectIndex]);

    useEffect(() => {
        if (!embla) return;
        onSlideSequenceSave();
        setScrollSnaps(embla.scrollSnapList());
        embla.on('select', onSlideSequenceSave);
    }, [embla, setScrollSnaps, onSlideSequenceSave]);

    return (
        <div className={Styles['main-div']}>
            <div className={Styles['carousel-div']} ref={emblaRef}>
                <div className={Styles['slide-div']}>
                    {slides.map((slide, index) => (
                        <div className={Styles['text-div']} key={index + 'slideItem'}>
                            {slide.image !== '' ? (
                                <div className={Styles['slide-item-div']}>{slide.image}</div>
                            ) : (
                                <div className={Styles['slide-No-item-div']}></div>
                            )}

                            <div className={Styles['content-div']}>{slide.companyName}</div>
                            <div className={Styles['content-div']}>{slide.projectName}</div>
                            <div className={Styles['lang-div']}>
                                <div>{slide.useLang}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={Styles['slide-bottom-div']}>
                    <div className={Styles['slide-page-div']}>
                        <span className={Styles['now-slider-sequence']}>{selectIndex + 1}</span>
                        <div className={Styles['between-div']} />
                        <span className={Styles['last-slider-sequence']}>{slides.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;
