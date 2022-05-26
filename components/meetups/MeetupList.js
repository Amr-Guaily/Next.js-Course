import MeetupItem from './MeetupItem';

const MeetupList = ({ meetups }) => {
  return (
    <>
      {meetups.map((meetup) => {
        return <MeetupItem key={meetup.id} meetup={meetup} />;
      })}
    </>
  );
};

export default MeetupList;
