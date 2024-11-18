import { desc } from "framer-motion/client";
import {Metadata} from "next";
import { title } from "process";

export const SITE_CONFIG = {
    title: {
        default: "Spark Studio - Website Development and Design",
        template: "%s | Spark Studio",
    },
    description: "Spark Studio is a website development and design studio that specializes in creating beautiful, responsive websites for small businesses and individuals.",
    icons: {
        icon: [
            {
                url: "/icons/logo.png",
                href: "/icons/logo.png",
            }
        ]
    },
    openGraph: {
        title: "Spark Studio - Website Development and Design",
        description: "Spark Studio is a website development and design studio that specializes in creating beautiful, responsive websites for small businesses and individuals.",
        image: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        creator: "@mdshykat",
        cardType: "summary_large_image",
        title: "Spark Studio - Website Development and Design",
        description: "Spark Studio is a website development and design studio that specializes in creating beautiful, responsive websites for small businesses and individuals.",
        image: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
}