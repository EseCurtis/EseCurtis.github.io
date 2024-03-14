const TFeatured = {
    image: String.prototype,
    title: String.prototype,
    description: String.prototype,
    topics: Array.prototype,
    github: String.prototype,
    preview: String.prototype
}

class GenerateFeatured {
    #featuredDataset = [];
    addFeatured(featuredPayload = TFeatured) {
        if (typeof featuredPayload === typeof TFeatured) {
            this.#featuredDataset.push(featuredPayload);
        }
    }

    getDataset() {
        return this.#featuredDataset;
    }
}

export default GenerateFeatured;
