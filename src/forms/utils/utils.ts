export const capitalizeTitle = (title: string) => {
    return title.split(" ").map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ")
}