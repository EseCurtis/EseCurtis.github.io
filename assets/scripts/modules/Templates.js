import FetchContributors from "./FetchContributors.js"

const Templates = {
    project: async ({ description, topics, contributors_url, owner, license, is_template, full_name, name, allow_forking, html_url }) => {
        const contributors = await FetchContributors(contributors_url)
        const contributorsItemWidth = 20
        const contributorsContainerWidth = (contributorsItemWidth*contributors.length)+(4*contributors.length)

        return `
        <div class="item">
            
            <div class="title">
                <!--<i class="--sub">${name}</i>-->
                <h3><a href="${html_url}">${full_name.replace("EseCurtis", "")}</a>&nbsp;<i class="las la-link"></i></h3>
                <div class="countributors" style="width: calc(${contributorsContainerWidth}px);">
                ${contributors.slice(0, 3).map(contributor => `
                    <span onclick-disabled="location.assign('${contributor.html_url}')" data-id="${contributor.id}" data-meta='${"JSON.stringify(contributor)"}'>
                        <img src="${contributor.avatar_url}" alt="${contributor.login}" title="${contributor.login}">
                    </span>
                `).join('')}
            </div>
            </div>
            <p class="description">
                ${description || "No Description"}
            </p>
            
            <div class="topics">
                ${topics.map(topic => `<span>${topic}</span>`).join('')}
            </div>
        </div>
        `
    },
}

export default Templates