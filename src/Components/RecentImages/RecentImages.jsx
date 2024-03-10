import styles from './RecentImages.module.css'
import ContainerCard from '../ContainerCard/ContainerCard';
import Dropdown from '../Elements/Dropdown/Dropdown';
import MasonryLayout from '../MasonryLayout/MasonryLayout';
import images from "./../../Jsons/Images.json"
import { useState } from 'react';

const RecentImages = () => {

    const ddItems = [
        {
            id: 1,
            title: "All Images",
            active: true
        },
        {
            id: 2,
            title: "Topic Images",
            active: false
        },
        {
            id: 3,
            title: "Nature Images",
            active: false
        },
        {
            id: 4,
            title: "NFT Images",
            active: false
        },
        {
            id: 5,
            title: "Space Images",
            active: false
        }
    ]

    const [categoryImage, setCategoryImage] = useState(images.categories.all)

    const takeDdTitle = (ddTitle) => {
        setCategoryImage(() => {
            let categoryChoose = Object.keys(images.categories).filter(item => {
                const titleSplited = ddTitle.toLowerCase().split(" ")[0]
                return item.toLowerCase().includes(titleSplited)
            })
            return [...images.categories[categoryChoose]]
        })
    }

    return (
        <div className="flex justify-content-center" style={{ marginTop: "50px", padding: '50px' }}>
            <ContainerCard>
                <div className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}>
                    <h1>All images</h1>
                    <Dropdown title="All Images" items={ddItems} liftingDdTextUp={takeDdTitle} />
                </div>
                <MasonryLayout images={categoryImage} />
            </ContainerCard>
        </div>
    )
}

export default RecentImages;