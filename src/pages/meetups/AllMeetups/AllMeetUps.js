import { useEffect, useState } from "react";
import MeetUpList from "../../../meetups/meet-up-list/MeetUpList";

const AllMeetUpsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://test-meetup-app-6d4e1-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  } else {
    return (
      <div>
        <h1>All Meet</h1>
        <MeetUpList meetups={loadedMeetups} />
      </div>
    );
  }
};

export default AllMeetUpsPage;
