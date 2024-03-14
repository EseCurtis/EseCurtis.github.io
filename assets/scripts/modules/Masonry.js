import { ToNode, chunkArray } from "./Helpers.js";

function Masonry(dataset, template, elementQuery = "body", masonify = true) {

    document.querySelector(elementQuery).innerHTML = "";
    
    if (!masonify) {
        dataset.forEach(async (data) => {
            const projectDom = await template(data);
            document.querySelector(elementQuery).appendChild(ToNode(projectDom))
        })
    } else {

        // Split the dataset into sets of three.
        const chunkedDataset = chunkArray(dataset, 3);

        // Loop through each set of data.
        chunkedDataset.forEach(async (data) => {
            const flexContainer = document.createElement("div");
            flexContainer.className = "flexx";

            // Loop through the projects in the current set.
            data.forEach(async (project) => {
                const projectDOM = await template(project);
                flexContainer.appendChild(ToNode(projectDOM));
            });

            // Append the flex container to the specified element.
            document.querySelector(elementQuery).appendChild(flexContainer);
            //console.log(flexContainer)
        });
    }

}

export default Masonry;
