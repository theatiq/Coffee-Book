import { toast } from "react-toastify"

const getAllFavorites = () => {
    const all = localStorage.getItem("favorites")

    if (all) {
        const favorites = JSON.parse(all)
        return favorites
    } else {
        return []
    }
}



const addFavorite = (coffee) => {
    const favorites = getAllFavorites()
    const isExist = favorites.find(item => item.id === coffee.id)
    if (isExist) { return toast.error("Coffee Already exists") }
    favorites.push(coffee)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success("Successfully added ")
}


const removeFavorite = (id) => {
    const favorites = getAllFavorites()
    const remaining = favorites.filter(coffee => coffee.id != id)
    localStorage.setItem("favorites", JSON.stringify(remaining))
    toast.success("Successfully Removed")
}


export { getAllFavorites, addFavorite, removeFavorite }