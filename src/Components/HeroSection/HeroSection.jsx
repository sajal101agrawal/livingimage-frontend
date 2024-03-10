import styles from './HeroSection.module.css'

import ContainerCard from '../ContainerCard/ContainerCard';
import BrickLayout from '../BrickLayout/BrickLayout';
import { SearchNormal1 } from 'iconsax-react';
import { Setting4 } from 'iconsax-react';
import HeaderBoxes from '../Header/HeaderBoxes/HeaderBoxes';
import JsonHeader from './../../Jsons/HeaderBoxes.json'

const HeroSection = () => {

    return (
        <section className={`${styles.header} flex justify-content-center`}>

            <ContainerCard className="flex flex-column">
                <div className={styles["blur-circle-shape"]}></div>
                <BrickLayout />
                <div className={`${styles["headings-header"]} flex justify-content-center flex-column `}>
                    <h2 className={styles["heading-header-title"]}>Be one whose art evolves for future's canvas. 😎🤘</h2>
                    <h1 className={styles["heading-header-second-title"]}>
                        Enter the realm where images<br />
                        dance with <span>rhythm</span> of tomorrow
                    </h1>

                    <div className={`${styles["search-bar"]} flex align-items-center`}>
                        <SearchNormal1 size="30" color="var(--white-100)" />
                        <input type="text" className={styles["search-input"]} placeholder="Search our vibrant gallery" />
                        <button className={`${styles["search-btn"]} flex justify-content-center align-items-center`}>
                            <Setting4 size="20" color="var(--dark-900)" />
                        </button>
                    </div>

                    <HeaderBoxes titles_numbers={JsonHeader.informations} />
                </div>
            </ContainerCard>
        </section>
    )
}

export default HeroSection;