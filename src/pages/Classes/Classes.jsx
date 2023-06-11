import { Helmet } from "react-helmet-async";
import PageCover from "../Shared/PageCover/PageCover";
import ClassCard from "./ClassCard";


const Classes = () => {
    return (
      <div>
        <Helmet>
          <title>Rhythm | Classes</title>
        </Helmet>
        <PageCover
          img={
            'https://images.unsplash.com/photo-1470019693664-1d202d2c0907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
          }
          title={'Courses we offer'}
          subTitle={'Explore our wide range of classes'}></PageCover>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          <ClassCard></ClassCard>
          <ClassCard></ClassCard>
          <ClassCard></ClassCard>
          <ClassCard></ClassCard>
          <ClassCard></ClassCard>
          <ClassCard></ClassCard>
        </div>
      </div>
    );
};

export default Classes;