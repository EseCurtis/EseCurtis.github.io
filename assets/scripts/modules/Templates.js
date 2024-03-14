import FetchContributors from "./FetchContributors.js"

const Templates = {
    project: async ({ description, topics, contributors_url, owner, license, is_template, full_name, name, allow_forking, html_url }) => {
        const contributors = await FetchContributors(contributors_url)
        const contributorsItemWidth = 20
        const contributorsContainerWidth = (contributorsItemWidth * contributors.length) + (4 * contributors.length)

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
    featured: async ({ image, title, description, topics, github, preview }) => {

        return `
        <div class="item">
                  <div class="image">
                    <img src="${image}" alt="">
                  </div>
                  <div class="info">
                  <div class="description">
                  <h4>${title}</h4>
                  <p>${description || "No Description"}</p>
                </div>
                <div class="topics">
                   ${topics.map(topic => `<span>${topic}</span>`).join('')}
                </div>
                <div class="actions">
                    ${preview && `<a href="${preview}" class="btn" target="_blank">Preview <i class="la la-eye"></i></a>` || ""}
                    ${github && `<a href="${github}" class="btn secondary-action" target="_blank"><i class="la la-git"></i></a>` || ""}
                </div>
                  </div>
                </div>
        `
    }
}

export default Templates