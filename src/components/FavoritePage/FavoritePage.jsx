import css  from "./FavoritePage.module.css";

export function FavoritePage({images}) {
    return (
        <ul className={css.images_list}>
            {images.map((image) => {
                const {webformatURL, id, tags} = image;
                return(
                <li key = {id}>
                    <img src = {webformatURL} alt ={tags} width="300"/>
                </li>)
            })}
        </ul>
    )
}