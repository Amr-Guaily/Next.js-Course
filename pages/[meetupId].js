import MeetupDetails from '../components/meetups/MeetupDetails';
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';

export async function getStaticPaths() {
  const clint = await MongoClient.connect(
    'mongodb+srv://AmrGuaily:zay58RiojeVteAT5@cluster0.9nmhkfh.mongodb.net/?retryWrites=true&w=majority'
  );

  const collection = clint.db('meetups').collection('meetups');

  const meetups = await collection.find().toArray();

  clint.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const id = context.params.meetupId;

  const clint = await MongoClient.connect(
    'mongodb+srv://AmrGuaily:zay58RiojeVteAT5@cluster0.9nmhkfh.mongodb.net/?retryWrites=true&w=majority'
  );
  const collection = clint.db('meetups').collection('meetups');
  // I need access to a single meetup
  const selectedMeetup = await collection.findOne({
    _id: ObjectId(id),
  });

  clint.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

const DetailsPage = ({ meetupData }) => {
  return (
    <div>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description} />
      </Head>
      <MeetupDetails
        image={meetupData.image}
        title={meetupData.title}
        address={meetupData.address}
        description={meetupData.description}
      />
    </div>
  );
};

export default DetailsPage;
