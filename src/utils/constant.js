import img1 from "/img1.png";
import img2 from "/img2.png";
import img3 from "/img3.png";
import img4 from "/img4.png";
import img5 from "/img5.png";
import stepIcon from "/stepIcon.svg";

export const imagesData = [
    {
        id: 1,
        imageName: img1
    },
    {
        id: 2,
        imageName: img2
    },
    {
        id: 3,
        imageName: img3
    },
    {
        id: 4,
        imageName: img4
    },
    {
        id: 5,
        imageName: img5
    },
]

export const howItWorks = [
    {
        id: 1,
        icon: stepIcon,
        headingName: "Describe Your Vision",
        paraName: "Type a phrase, sentence, or paragraph that describes the image you want to create"
    },
    {
        id: 2,
        icon: stepIcon,
        headingName: "Watch the Magic",
        paraName: "Our AI-powered engine will transform your text into a high-quality, unique image in seconds"
    },
    {
        id: 3,
        icon: stepIcon,
        headingName: "Download & Share",
        paraName: "Instantly download your creation or share it with the world directly from our platform."
    },
]

export const pricingInfo = [
    {
        id: 1,
        plan: "Free",
        benefits: [
            {
                id: 11,
                benefit: "AI - Generated Images",
            },
            {
                id: 12,
                benefit: "Shareable Links",
            },
            {
                id: 13,
                benefit: "Download the Image",
            },
            {
                id: 14,
                benefit: " credits 5,"
            }
        ],
        price: 0
    },
    {
        id: 2,
        plan: "Premium",
        benefits: [
            {
                id: 11,
                benefit: "AI - Generated Images",
            },
            {
                id: 12,
                benefit: "Shareable Links",
            },
            {
                id: 13,
                benefit: "Download the Image",
            },
            {
                id: 14,
                benefit: "Unlimited Credits"
            }
        ],
        price: 100
    },
]

export const BASE_URL = "https://imagify-bd.vercel.app/"
// export const BASE_URL = "http://localhost:4040"