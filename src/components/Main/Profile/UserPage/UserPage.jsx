import React from 'react'
import styles from './UserPage.module.css'

const UserPage = () => {
    return (
        <div className={styles.userPage}>
            <img className={styles.avatar} src="https://cdnb.artstation.com/p/assets/images/images/008/802/747/large/anton-chernoskutov-5.jpg" alt=""/>
            <div className={styles.info}>
                <div className={styles.name}>Yury Svirydzenka</div>
                <div className={styles.birthday}>04.01.1992</div>
            </div>
        </div>
    )
}

export default UserPage