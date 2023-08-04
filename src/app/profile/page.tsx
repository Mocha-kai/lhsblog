import styles from './ProfileCard.module.css';
import myPicture from './../../../public/profilePicture/lhs_0.jpg';
import Java from './../../../public/icon/icons8-java.gif';
import Js from './../../../public/icon/icons8-js.gif';
import React from './../../../public/icon/icons8-react.gif';
import Github from './../../../public/icon/icons8-github.gif';
import Image from 'next/image';

const ProfilePage = () => {
    return (
        <div className={styles[`profile-main`]}>
            <div className={styles['profile-card']}>
                <Image src={myPicture} alt="Profile" className={styles['profile-image']} />
                <div className={styles['profile-name']}>Lhs</div>
                <div className={styles['profile-occupation']}>Web Developer</div>
                <div className={styles['profile-occupation']}>1992. 12</div>
                <div>
                    <Image src={Java} alt="Profile" className={styles['icon-image']} />
                    <Image src={Js} alt="Profile" className={styles['icon-image']} />
                    <Image src={React} alt="Profile" className={styles['icon-image']} />
                    <Image src={Github} alt="Profile" className={styles['icon-image']} />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
