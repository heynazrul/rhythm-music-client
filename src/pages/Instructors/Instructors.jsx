import { Helmet } from 'react-helmet-async';
import PageCover from '../Shared/PageCover/PageCover';
import InstructorCard from './InstructorCard';
import { useQuery } from '@tanstack/react-query';
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader';

const Instructors = () => {
  const { data: instructors = [], isLoading } = useQuery(['instructors'], async () => {
    const res = await fetch(`https://rhythm-music-server.vercel.app/instructors`);
    return res.json();
  });
  // const [instructors, setInstructors] = useState([]);

  // useEffect(() => {
  //   fetch('https://rhythm-music-server.vercel.app/instructors')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setInstructors(data);
  //     });
  // }, []);

  return (
    <div>
      <Helmet>
        <title>Rhythm | Instructors</title>
      </Helmet>
      <PageCover
        img={
          'https://images.unsplash.com/photo-1470019693664-1d202d2c0907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
        }
        title={'Our Skilled instructors'}
        subTitle={'Meet your life coaches'}></PageCover>
      <div className="max-w-7xl mx-auto px-4 grid  md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {isLoading ? (
          <>
            <SkeletonLoader></SkeletonLoader>
            <SkeletonLoader></SkeletonLoader>
            <SkeletonLoader></SkeletonLoader>
          </>
        ) : (
          instructors.map((instructor) => (
            <InstructorCard
              key={instructor._id}
              instructor={instructor}></InstructorCard>
          ))
        )}
      </div>
    </div>
  );
};

export default Instructors;
