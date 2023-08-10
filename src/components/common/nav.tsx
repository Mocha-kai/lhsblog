'use client';

import styles from '@/components/common/commonStyle/nav.module.css';
import Link from 'next/link';

const NavBottom = () => {
    // bottom을 구성하는 data
    const MainNavData = [
        {
            id: 'm00',
            url: '/profile',
            name: 'ProfilePage',
            as: '/dashboard',
            h2: 'Profile',
            p: '인적사항',
        },
        {
            id: 'm01',
            url: '/study',
            name: 'StudyPage',
            as: '/dashboard',
            h2: 'Study',
            p: '자료',
        },
        {
            id: 'm02',
            url: '/career',
            name: 'CareerPage',
            as: '/dashboard',
            h2: 'Career',
            p: '경력',
        },
        {
            id: 'm03',
            url: '/good',
            name: 'GoodPage',
            as: '/dashboard',
            h2: 'Good',
            p: '좋은것',
        },
    ];

    return (
        <>
            <div className={styles.grid}>
                {MainNavData.map((MainNavData) => (
                    <Link
                        key={MainNavData.id}
                        href={{
                            pathname: MainNavData.url,
                            query: {
                                search: MainNavData.name,
                            },
                        }}
                        className={styles.card}
                    >
                        <h2>{MainNavData.h2}</h2>
                        <p>{MainNavData.p}</p>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default NavBottom;
