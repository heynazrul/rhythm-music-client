import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const AddClass = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [axiosSecure] = useAxiosSecure();

  const { user } = useAuth();

  const onSubmit = (data) => {
    const newClass = {
      name: data.name,
      img: data.img,
      instructorName: data.instructorName,
      instructorImg: user.photoURL,
      email: data.email,
      seats: parseInt(data.seats),
      price: parseFloat(data.price),
      status: 'pending',
      enrolled: 0,
    };
    // secured api call to backend
    axiosSecure.post('/classes', newClass).then((data) => {
      console.log('posting new class', data.data);
      if (data.data.insertedId) {
        reset();
        toast.success('Class added for approval');
      }
    });
  };

  return (
    <div className="w-full px-4">
      <Helmet>
        <title>Rhythm | Add Class</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl my-10">Add a New Class</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body w-1/3 mx-auto bg-base-200 rounded-md pb-6 mb-10">
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              Class Name <span className="text-error">*</span>
            </span>
          </label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            placeholder="Class Name"
            className="input input-bordered"
          />
          {errors.name && errors.name.type === 'required' && <span className="text-error">{errors.name.message}</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              Image URL <span className="text-error">*</span>
            </span>
          </label>
          <input
            type="text"
            {...register('img', { required: 'Class image is required' })}
            placeholder="Image URL"
            className="input input-bordered"
          />
          {errors.img && errors.img.type === 'required' && <span className="text-error">{errors.img.message}</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input
            {...register('instructorName')}
            readOnly
            value={user.displayName}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          <input
            {...register('email')}
            readOnly
            value={user.email}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">
              Available Seats <span className="text-error">*</span>
            </span>
          </label>
          <input
            type="number"
            {...register('seats', { required: 'Available seats is required' })}
            className="input input-bordered"
          />
          {errors.seats && errors.seats.type === 'required' && (
            <span className="text-error">{errors.seats.message}</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              Price <span className="text-error">*</span>
            </span>
          </label>
          <input
            type="number"
            {...register('price', { required: 'Price is required' })}
            className="input input-bordered"
          />
          {errors.price && errors.price.type === 'required' && (
            <span className="text-error">{errors.price.message}</span>
          )}
        </div>

        <div className="form-control mt-6">
          <input
            className="btn btn-primary"
            type="submit"
            value={'Add Class'}
          />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
