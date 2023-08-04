import Styles from './ProfileCard.module.css';
import Image from 'next/image';
import MyPicture from './../../../public/profilePicture/lhs_0.jpg';
import Java from './../../../public/icon/icons8-java.gif';
import Js from './../../../public/icon/icons8-js.gif';
import React from './../../../public/icon/icons8-react.gif';
import Github from './../../../public/icon/icons8-github.gif';

const ProfilePage = () => {
    return (
        <div className={Styles[`profile-main`]}>
            <div className={Styles['profile-card']}>
                <Image src={MyPicture} alt="Profile" className={Styles['profile-image']} />
                <div className={Styles['profile-name']}>Lhs</div>
                <div className={Styles['profile-occupation']}>Web Developer</div>
                <div className={Styles['profile-occupation']}>1992. 12</div>
                <div>
                    <Image src={Java} alt="Profile" className={Styles['icon-image']} />
                    <Image src={Js} alt="Profile" className={Styles['icon-image']} />
                    <Image src={React} alt="Profile" className={Styles['icon-image']} />
                    <Image src={Github} alt="Profile" className={Styles['icon-image']} />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
