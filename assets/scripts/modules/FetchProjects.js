

const FetchProjects = async (username = "EseCurtis") => {
    const projectsFetch = await fetch(`https://api.github.com/users/${username}/repos`)
    try {
        let projects = await projectsFetch.json()

        return (projects?.filter) && projects.filter(project => !project.topics.map(topic => topic.toLowerCase()).includes("notportfolio")) || JSON.parse(localStorage?.getItem("projects") || "[]")
    } catch (error) {
        console.error(error)
        return []
    }
}

export default FetchProjects