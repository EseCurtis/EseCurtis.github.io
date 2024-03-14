import GenerateFeatured from "./modules/GenerateFeatured.js";

const FeaturedGenerator = new GenerateFeatured();

FeaturedGenerator.addFeatured({
    image: "/assets/images/featured/streekapp.png",
    title: "StreekApp",
    description: "StreekApp is a health and fitness app for managing new and ongoing habits, also to help stop intrusive bad habits",
    topics: ["HabitTracker", "Health", "Fitness", "ReactJS", "Vite", "Capacitor"],
    github: "null",
    preview: "https://play.google.com/store/apps/details?id=com.streek.dezrektech",

})

FeaturedGenerator.addFeatured({
    image: "/assets/images/featured/streekapp.png",
    title: "Ventt.io",
    description: "Ventt.io is an app used for pairing two strangers to talk about thier challenges",
    topics: ["Health", "Friendliness", "Happiness",  "Companion", "ReactJS", "Vite", "Capacitor"],
    github: "null",
    preview: "https://ventt-io.netlify.app",

})

FeaturedGenerator.addFeatured({
    image: "/assets/images/featured/streekapp.png",
    title: "Ventt.io",
    description: "Ventt.io is an app used for pairing two strangers to talk about thier challenges",
    topics: ["Health", "Friendliness", "Happiness",  "Companion", "ReactJS", "Vite", "Capacitor"],
    github: "null",
    preview: "https://ventt-io.netlify.app",

})

const featured = FeaturedGenerator.getDataset();
export default featured;