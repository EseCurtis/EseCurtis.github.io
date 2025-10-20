import GenerateFeatured from "./modules/GenerateFeatured.js";

const FeaturedGenerator = new GenerateFeatured();


FeaturedGenerator.addFeatured({
    image: "/assets/images/featured/venttio.jpg",
    title: "Ventt.io",
    description: "Ventt.io is an app used for pairing two strangers to talk about thier challenges, built with Qwickkjs by yours truly   ",
    topics: ["Health", "Friendliness", "Happiness",  "Companion", "ReactJS", "Vite", "Capacitor"],
    github: "https://github.com/EseCurtis/vennt",
    preview: "https://ventt-io.netlify.app",
});
FeaturedGenerator.addFeatured({
    image: "/assets/images/featured/streekapp.jpg",
    title: "StreekApp",
    description: "StreekApp is a health and fitness app for managing new and ongoing habits, also to help stop intrusive bad habits",
    topics: ["HabitTracker", "Health", "Fitness", "ReactJS", "Vite", "Capacitor"],
    preview: "https://streekapp.vercel.app",

});
FeaturedGenerator.addFeatured({
    image: "/assets/images/featured/vybaa.png",
    title: "Vybaa",
    description: "Vybaa is the ultimate social streak app that turns habit building into a team sport. Create streaks, invite friends, and achieve your goals together.",
    topics: ["HabitTracker", "Health", "Fitness", "ReactJS", "Vite", "Capacitor"],
    github: "null",
    preview: "https://vybaa.app",
});




const featured = FeaturedGenerator.getDataset();
export default featured;