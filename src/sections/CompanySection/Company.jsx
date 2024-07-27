import React from "react";
import styles from "../CompanySection/Company.module.css";
const Company = ({ img1, img2 }) => {
    return (
        <section className={styles.companySection}>
            {/* Tagline Container */}
            <div className={styles.containerP}>
                <div className={styles.containerC}>
                    <h1 className={styles.tagline}>
                        Top <span>companies</span> our students work with
                    </h1>
                </div>
            </div>

            {/* Companies Name */}
            <div className={styles.companyP}>

                <div className={styles.imgContainer}>
                    {img1.map((item, index) => (
                        <div key={index} className={styles.image}>
                            <img src={item.image} className={styles.cImg} />
                        </div>
                    ))}
                </div>

                <div className={styles.imgContainer}>
                    {img2.map((item, index) => (
                        <div key={index} className={styles.image}>
                            <img src={item.image} className={styles.cImg} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Company;
