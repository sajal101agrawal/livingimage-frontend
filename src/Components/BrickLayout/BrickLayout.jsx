import styles from "./BrickLayout.module.css"
import {motion} from "framer-motion"

const BrickLayout = () => {


  const forwardVariants = {
    animate:{
      y:[0, "-153%"],
      transition: {
        repeat:Infinity,
        repeatType:"loop",
        duration: 5,
        ease: "linear",
      }
    }
  }
  const reverseVariants = {
    animate:{
      y:["-153%", "3%"],
      transition: {
        repeat:Infinity,
        repeatType:"loop",
        duration: 5,
        ease: "linear",
      }
    }
  }


  return (
    <div className={styles["brick-layout"]}>
      <motion.div variants={forwardVariants} animate="animate" className={styles["brick-column"]}>
        <img src="img/dummy_image/1.jpg" alt="" />
        <img src="img/dummy_image/2.jpg" alt="" />
        <img src="img/dummy_image/3.jpg" alt="" />
        <img src="img/dummy_image/1.jpg" alt="" />
        <img src="img/dummy_image/2.jpg" alt="" />
        <img src="img/dummy_image/3.jpg" alt="" />
      </motion.div>
      <motion.div variants={reverseVariants} animate="animate" className={styles["brick-column"] + " " + styles["brick-column-2"]}>
        <img src="img/dummy_image/4.jpg" alt="" />
        <img src="img/dummy_image/5.jpg" alt="" />
        <img src="img/dummy_image/6.jpg" alt="" />
        <img src="img/dummy_image/4.jpg" alt="" />
        <img src="img/dummy_image/5.jpg" alt="" />
        <img src="img/dummy_image/6.jpg" alt="" />
      </motion.div>
      <motion.div variants={forwardVariants} animate="animate" className={styles["brick-column"]}>
        <img src="img/dummy_image/7.jpg" alt="" />
        <img src="img/dummy_image/8.jpg" alt="" />
        <img src="img/dummy_image/9.jpg" alt="" />
        <img src="img/dummy_image/7.jpg" alt="" />
        <img src="img/dummy_image/8.jpg" alt="" />
        <img src="img/dummy_image/9.jpg" alt="" />
      </motion.div>
    </div>
  )
}

export default BrickLayout