import MeetUpItems from "../meet-up-items/MeetUpItems";
import classes from "./MeetUpList.module.css";

const MeetUpList = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map(({ id, title, image, address, description }) => (
        <MeetUpItems
          key={id}
          title={title}
          id={id}
          image={image}
          address={address}
          description={description}
        />
      ))}
    </ul>
  );
};

export default MeetUpList;
