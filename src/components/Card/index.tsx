import React from 'react'
import styles from "./card.module.css"

export default function Card() {
  return (
  <div className={styles.card}>
      <div>
      <img className={styles.image}
      height={500} 
      width={500}
      
      src={"https://a0.muscache.com/im/pictures/74d3f1e5-32c8-44e6-a13c-a258b757a9cd.jpg?im_w=720&im_format=avif"} 
      alt="Next image"
      />
    </div>
   <div className={styles.meta}>
   <h3 className={styles.header}> Kathmandu, Nepal</h3>
    <span className={`${styles.lightFont} ${styles.host}`}>Hosted by Jennifer</span>
    <span className={`${styles.lightFont}`}>Feb1-6 </span>
    <div className={styles.price}>
        <span className={styles["price--unit"]}>$23</span> <span>night</span>
   </div>
        
    </div>
  </div>
  )
}
