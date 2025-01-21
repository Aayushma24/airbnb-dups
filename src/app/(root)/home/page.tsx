import React from 'react';
import styles from "./page.module.css"

export default function HomePage() {
  return (
   <div className={styles.home}>
     <div className={styles.main}>
      <div className={styles.title}>
        A Natural Place Near Lake & Farming
      </div>
      <div className={styles.image}>
        <img src="https://imgs.search.brave.com/YbXWJXrpwyiwDUb3IrIcgnt7an2sfqKadWltxX_KOoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/NTk2MDQwNy9waG90/by9tb2Rlcm4tZHVw/bGV4LWhvdXNlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1F/UWttemlFclNVdkJH/cFVrbDFtZ2lHSzgw/dUdrZjJmWUExZ0lG/SkxERXZ3PQ" alt="home" />
      </div>
      <div className={styles.description}>
        <div className={styles.name}>
            Private room in bed and breakfast in Pokhara, Nepal
        </div>
        <div className={styles.seller}>
            <img src="https://a0.muscache.com/im/pictures/user/41c44867-6b9c-451b-9e88-afdb4916dd19.jpg?im_w=240&im_format=avif" alt="seller" />
            <div className={styles.sellerinfo}>
            <span className={styles.sellername}>
                Hosted by Bishnu Tarkari Bhandar
            </span>
            <span className={styles.exp}>
                Super host 10 years of hosting
            </span>
            </div>
        </div>

        <button className={styles.reserve}>
            Reserve
        </button>
      </div>
    </div>
   </div>
  )
}
