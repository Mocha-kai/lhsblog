import Styles from './ProfileCard.module.css';
import Image from 'next/image';

const ProfilePage = () => {
    return (
        <div className={Styles[`profile-main`]}>
            <div className={Styles['profile-card']}>
                <Image
                    src="/images/lhs_0.jpg"
                    alt="Profile"
                    className={Styles['profile-image']}
                    width={160}
                    height={180}
                    priority
                />
                <div className={Styles['profile-name']}>Lhs</div>
                <div className={Styles['profile-occupation']}>Web Developer</div>
                <div className={Styles['profile-occupation']}>1992. 12</div>
                <div>
                    <Image
                        src="/images/icons8-java.gif"
                        alt="jv"
                        className={Styles['icon-image']}
                        width={50}
                        height={50}
                    />
                    <Image
                        src="/images/icons8-js.gif"
                        alt="js"
                        className={Styles['icon-image']}
                        width={50}
                        height={50}
                    />
                    <Image
                        src="/images/icons8-react.gif"
                        alt="ra"
                        className={Styles['icon-image']}
                        width={50}
                        height={50}
                    />
                    <Image
                        src="/images/icons8-github.gif"
                        alt="gh"
                        className={Styles['icon-image']}
                        width={50}
                        height={50}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
