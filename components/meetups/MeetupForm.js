import { useRef } from 'react';
import classes from './MeetupForm.module.css';

const MeetupForm = ({ onAdd }) => {
  const titleInput = useRef();
  const imageInput = useRef();
  const addressInput = useRef();
  const descriptionInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const title = titleInput.current.value;
    const image = imageInput.current.value;
    const address = addressInput.current.value;
    const description = descriptionInput.current.value;

    onAdd({ title, image, address, description });
  };

  return (
    <>
      <h1 className={classes.title}>New Meetup</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" ref={titleInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" ref={imageInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" id="address" ref={addressInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea rows="5" id="description" ref={descriptionInput} />
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Meetup</button>
        </div>
      </form>
    </>
  );
};

export default MeetupForm;
