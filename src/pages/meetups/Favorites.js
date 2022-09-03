import { useContext } from "react";
import MeetUpList from "../../meetups/meet-up-list/MeetUpList";
import FavoritesContext from "../../store/favorites-context";

const FavoritesPage = () => {
  const favoriteCtx = useContext(FavoritesContext);
  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You don't have a favorite meetup yet. Start by adding some</p>;
  } else {
    content = <MeetUpList meetups={favoriteCtx.favorites} />;
  }
  return (
    <section>
      <h1>Favorites Page</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
