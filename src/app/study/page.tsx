'use client';
import Styles from './study.module.css';

const StudyPage = () => {
    const onClickDataModal = () => {
        console.log('글작성할고얌');
    };

    return (
        <div className={Styles['main-div']}>
            <div className={Styles['div-card']}>
                <div className={Styles['study-button-div']}>
                    <button onClick={onClickDataModal} className={Styles['study-button']}>
                        ＋
                    </button>
                </div>
                <div className={Styles['head-div']}>
                    <div className={Styles['no-div']}>No</div>
                    <div className={Styles['title-div']}>Title</div>
                </div>
                <div className={Styles['div-card-table']}>
                    <div className={Styles['head-div-item']}>
                        <div className={Styles['no-div-data']}>1</div>
                        <div className={Styles['title-div-data']}>여기는 제목</div>
                    </div>
                    <div className={Styles['head-div-item']}>
                        <div className={Styles['no-div-data']}>1</div>
                        <div className={Styles['title-div-data']}>여기는 제목</div>
                    </div>
                    <div className={Styles['head-div-item']}>
                        <div className={Styles['no-div-data']}>1</div>
                        <div className={Styles['title-div-data']}>여기는 제목</div>
                    </div>
                    <div className={Styles['head-div-item']}>
                        <div className={Styles['no-div-data']}>1</div>
                        <div className={Styles['title-div-data']}>여기는 제목</div>
                    </div>
                    <div className={Styles['head-div-item']}>
                        <div className={Styles['no-div-data']}>1</div>
                        <div className={Styles['title-div-data']}>여기는 제목</div>
                    </div>
                    <div className={Styles['head-div-item']}>
                        <div className={Styles['no-div-data']}>1</div>
                        <div className={Styles['title-div-data']}>여기는 제목</div>
                    </div>
                    <div className={Styles['head-div-item']}>
                        <div className={Styles['no-div-data']}>1</div>
                        <div className={Styles['title-div-data']}>여기는 제목</div>
                    </div>
                    <div className={Styles['head-div-item']}>
                        <div className={Styles['no-div-data']}>1</div>
                        <div className={Styles['title-div-data']}>여기는 제목</div>
                    </div>
                    <div className={Styles['head-div-item']}>
                        <div className={Styles['no-div-data']}>1</div>
                        <div className={Styles['title-div-data']}>여기는 제목</div>
                    </div>
                    <div className={Styles['head-div-item']}>
                        <div className={Styles['no-div-data']}>1</div>
                        <div className={Styles['title-div-data']}>여기는 제목</div>
                    </div>
                    <div className={Styles['head-div-item']}>
                        <div className={Styles['no-div-data']}>1</div>
                        <div className={Styles['title-div-data']}>여기는 제목</div>
                    </div>
                    <div className={Styles['head-div-item']}>
                        <div className={Styles['no-div-data']}>1</div>
                        <div className={Styles['title-div-data']}>여기는 제목</div>
                    </div>
                    <div className={Styles['head-div-item']}>
                        <div className={Styles['no-div-data']}>1</div>
                        <div className={Styles['title-div-data']}>여기는 제목</div>
                    </div>
                    <div className={Styles['head-div-item']}>
                        <div className={Styles['no-div-data']}>1</div>
                        <div className={Styles['title-div-data']}>여기는 제목</div>
                    </div>
                    <div className={Styles['head-div-item']}>
                        <div className={Styles['no-div-data']}>1</div>
                        <div className={Styles['title-div-data']}>여기는 제목</div>
                    </div>
                    <div className={Styles['head-div-item']}>
                        <div className={Styles['no-div-data']}>1</div>
                        <div className={Styles['title-div-data']}>여기는 제목</div>
                    </div>
                    <div className={Styles['head-div-item']}>
                        <div className={Styles['no-div-data']}>1</div>
                        <div className={Styles['title-div-data']}>여기는 제목</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyPage;
