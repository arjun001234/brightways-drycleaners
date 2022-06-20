export const getImageQuery = (imageKey: string) => {
    return `*[_type == "picture" && _id == ^.${imageKey}._ref]{
        "alt": image.alt,
        "caption": image.caption,
        "imageUrl": image.asset->url,
    }[0]`
}