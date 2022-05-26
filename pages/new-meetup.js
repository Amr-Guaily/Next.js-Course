// our-domain.com/new-meetup
import { useRouter } from 'next/router';
import Head from 'next/head';
import MeetupForm from '../components/meetups/MeetupForm';

const NewMeetupPage = () => {
  const router = useRouter();

  async function addHandler(meetup) {
    const res = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetup),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    console.log(data);

    router.push('/');
  }

  return (
    <div>
      <Head>
        <title>Add a New Meetup</title>
        <meta name="description" content="Add Your own meetup" />
      </Head>
      <MeetupForm onAdd={addHandler} />
    </div>
  );
};

export default NewMeetupPage;
