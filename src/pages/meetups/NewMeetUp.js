import { useHistory } from "react-router-dom";
import NewMeetUpForm from "../../meetups/new-meet-up-form/NewMeetUpForm";

const NewMeetUpPage = () => {
  const history = useHistory();
  const addMeetUpHandler = (meetUpData) => {
    fetch(
      "https://test-meetup-app-6d4e1-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetUpData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  };
  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetUpForm onAddMeetUp={addMeetUpHandler} />
    </div>
  );
};

export default NewMeetUpPage;
