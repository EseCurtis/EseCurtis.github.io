import FetchContributors from "./FetchContributors.js"

const Templates = {
    project: async ({ id, description, topics, contributors_url, owner, license, is_template, full_name, name, allow_forking, html_url }) => {
        let contributors = await FetchContributors(contributors_url);

        if (!contributors.message > 0) {
            localStorage?.setItem(`repo_${id}_contributors`, JSON.stringify(contributors));
        } else {
            contributors = JSON.parse(localStorage?.getItem(`repo_${id}_contributors`)) || [];
        }

        const contributorsItemWidth = 20
        const maxDisplayNameLength = 20;
        const contributorsContainerWidth = (contributorsItemWidth * contributors?.length) + (4 * contributors.length)

        let displayName = full_name.replace("EseCurtis/", ` &nbsp;`);
        let shortDisplayName = displayName.split("").splice(0, maxDisplayNameLength).join("");

        if((full_name.replace("EseCurtis", ``).length > maxDisplayNameLength)) {
            shortDisplayName += "...";
        }

        return `
        <div class="item">
            <div class="title">
                <!--<i class="--sub">${name}</i>-->
                <h3 onclick="window.open('${html_url}', '_blank')"><a href="${html_url}" target="_blank"><i class="la la-git"></i>&nbsp;&nbsp; • ${shortDisplayName}</a>&nbsp;<i class="las la-external-link-alt"></i></h3>
                <div class="countributors" stylex="width: calc(${contributorsContainerWidth}px);">
                ${(contributors?.slice) && contributors.slice(0, 3).map(contributor => `
                    <div class="contributor-item" onclick-disabled="location.assign('${contributor.html_url}')" data-id="${contributor.id}" data-meta='${"JSON.stringify(contributor)"}'>
                        <div class="item-main">
                            <img src="${contributor.avatar_url}" alt="${contributor.login}" title="${contributor.login}">
                        </div>
                    </div>
                `).join('') || ""}
            </div>
            </div>
            <p class="description">
                ${displayName}:
                ${description || "No Description"}
            </p>
            
            <div class="topics">
                ${topics.map(topic => `<span>${topic}</span>`).join('')}
            </div>
        </div>
        `
    },
    project_skeleton: () => {
       return  `
        <div class="item skeleton">
        
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
                <div class="actions ${(!github || !preview) && "mono"}">
                    ${preview && `<a href="${preview}" class="btn" target="_blank">Preview <i class="la la-eye"></i></a>` || ""}
                    ${github && `<a href="${github}" class="btn secondary-action" target="_blank"><i class="la la-git"></i></a>` || ""}
                </div>
                  </div>
                </div>
        `
    }
}

export default Templates