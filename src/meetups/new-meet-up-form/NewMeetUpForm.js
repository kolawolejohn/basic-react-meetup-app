import { useRef } from "react";
import Card from "../../ui/Card";
import classes from "./NewMeetUpForm.module.css";

const NewMeetUpForm = (props) => {
  const titleInputRef = useRef();
  const ImageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = ImageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionputRef.current.value;

    const meetUpData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetUp(meetUpData);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title"> Title</label>
          <input type="text" id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image"> Image</label>
          <input type="url" required id="image" ref={ImageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address"> address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description"> Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetUpForm;
