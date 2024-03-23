import styles from './HowItWorks.module.css'
import processIcon from './../../assets/icons/process.svg'
import { motion, useScroll, useTransform} from "framer-motion"
import { useRef } from 'react'

const HowItWorks = () => {

    const ref = useRef()
    function useParallax(value, distance) {
        return useTransform(value, [0, 0.1], [distance, -distance]);
    }
    const { scrollYProgress } = useScroll({target:ref, offset: ["start start", "end end"]})
    const y = useParallax(scrollYProgress, 485);

    console.log(y)

    
      
        

    return (
        <section ref={ref} className={styles.section}>

            <div  className={styles["how-it-works"]}>
                <div className={styles["how-it-works-left"]}>
                    <div className={styles["top-line"]}></div>
                    <div className={styles["item-between-line"]}>
                        <div className={styles["blur-circle-between"]}></div>
                        <img src={processIcon} alt="" />
                    </div>
                    <div className={styles["bottom-line"]}></div>
                    <div className={styles["blur-circle"]}>
                    </div>
                </div>
                <div className={styles["how-it-works-box"]}>
                    <div className={styles.titleContainer}>
                        <div className={styles["h2-cont"]}>
                            <h2>how it works?</h2>
                        </div>
                    </div>
                    <div className={styles["content-container"]}>
                        <div className={styles["content-box"] + " " + styles["content-box-1"]}>
                            <div className={styles["content"] + " " + styles["content-1"]}>

                            </div>
                        </div>
                        <motion.div className={styles["content-box"] + " " + styles["content-box-2"]} style={{ y }}>
                            <div className={styles["content"] + " " + styles["content-2"]}>

                            </div>
                        </motion.div>
                        <motion.div className={styles["content-box"] + " " + styles["content-box-3"]} style={{ y }}>
                            <div className={styles["content"] + " " + styles["content-3"]}>

                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;