import GenerateFeatured from "./modules/GenerateFeatured.js";

const FeaturedGenerator = new GenerateFeatured();

FeaturedGenerator.addFeatured({
    image: "/assets/images/featured/streekapp.jpg",
    title: "StreekApp",
    description: "StreekApp is a health and fitness app for managing new and ongoing habits, also to help stop intrusive bad habits",
    topics: ["HabitTracker", "Health", "Fitness", "ReactJS", "Vite", "Capacitor"],
    preview: "https://play.google.com/store/apps/details?id=com.streek.dezrektech",

})

FeaturedGenerator.addFeatured({
    image: "/assets/images/featured/venttio.jpg",
    title: "Ventt.io",
    description: "Ventt.io is an app used for pairing two strangers to talk about thier challenges, built with Qwickkjs by yours truly   ",
    topics: ["Health", "Friendliness", "Happiness",  "Companion", "ReactJS", "Vite", "Capacitor"],
    github: "https://github.com/EseCurtis/vennt",
    preview: "https://ventt-io.netlify.app",

})

FeaturedGenerator.addFeatured({
    image: "/assets/images/featured/qwickk.png",
    title: "Qwickk",
    description: "Qwickk is a javascript framework that helps developers quickly setup realtime connections and triggers in web applications..",
    topics: ["Health", "Friendliness", "Happiness",  "Companion", "ReactJS", "Vite", "Capacitor"],
    github: "null",
    preview: "https://ventt-io.netlify.app",

})

const featured = FeaturedGenerator.getDataset();
export default featured;