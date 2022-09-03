import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../../ui/Card";
import classes from "./MeetUpItems.module.css";
const MeetUpItems = ({ id, image, title, address, description }) => {
  const favoriteCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(id);
  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(id);
    } else {
      favoriteCtx.addFavorite({
        id,
        title,
        image,
        address,
        description,
      });
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetUpItems;
