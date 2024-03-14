const FetchContributors = async ( countributorsUrl ) => {
    const countributorsFetch = await fetch(countributorsUrl)
    try {
        return await countributorsFetch.json()
    } catch (error) {
        console.error(error)
        return []
    }
}

export default FetchContributors