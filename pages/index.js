import MeetupList from "../components/meetup/MeetupList";
import "bootstrap/dist/css/bootstrap.css";
import { MongoClient } from "mongodb";
const DUMMY_MEETUPS = [
  {
    id: 1,
    label: "Meetup 1",
    desc: "New Meetup",
    image: "https://picsum.photos/20/20",
    address: "1187 LX",
  },
  {
    id: 2,
    label: "Meetup 2",
    image: "https://picsum.photos/20/20",
    address: "1187 LX",
  },
  {
    id: 3,
    label: "Meetup 3",
    image: "https://picsum.photos/20/20",
    address: "1187 LX",
  },
];
export default function Home({ meetups }) {
  // const [meetupList, setMeetupList] = useState([]);
  // useEffect(() => {
  //   setMeetupList(DUMMY_MEETUPS);
  // }, []);
  //console.log(meetups);

  return <MeetupList list={meetups}></MeetupList>;
}

// export async function getStaticSideProps(context) {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://dbuser:dbuser@cluster0.efj9p.mongodb.net/meetupDB?retryWrites=true&w=majority"
  );
  const meetups = await (
    await client.db().collection("meetups").find().toArray()
  ).map((x) => ({
    ...x,
    _id: x._id.toString(),

    // id: x._id.toString(),
    // label: x.label,
    // desc: x.desc,
    // image: x.image,
    // address: x?.address ? x?.address : "",
  }));
  return {
    props: {
      meetups: meetups,
    },
  };
}
