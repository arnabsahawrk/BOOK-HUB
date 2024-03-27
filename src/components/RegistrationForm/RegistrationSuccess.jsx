import { useContext } from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FormDataContext } from "../../pages/JoinWithHub";

const RegistrationSuccess = () => {
  const { formData } = useContext(FormDataContext);

  return (
    <div className="py-10">
      <div className="bg-gray-200 text-blue-900 rounded-lg shadow-sm p-6 flex flex-col items-center justify-center gap-2 lg:w-1/2 mx-auto text-lg lg:text-xl font-bold">
        <button className="p-3 rounded-full bg-blue-900 text-white text-2xl">
          <IoCheckmarkDoneCircleOutline />
        </button>
        <p className="text-sm">Submission Done Successfully.</p>
        <p>
          Name:{" "}
          <span className="text-base lg:text-lg font-medium">
            {formData?.fullName}
          </span>
        </p>
        <p>
          Email:{" "}
          <span className="text-base lg:text-lg font-medium">
            {formData?.email}
          </span>
        </p>
        <p>
          Number:{" "}
          <span className="text-base lg:text-lg font-medium">
            {formData?.phoneNumber}
          </span>
        </p>
        <p>
          Interested Genre:{" "}
          <span className="text-base lg:text-lg font-medium">
            {formData?.interestedGenre}
          </span>
        </p>
        <p>
          Favorite Author:{" "}
          <span className="text-base lg:text-lg font-medium">
            {formData?.favoriteAuthor}
          </span>
        </p>
        <p>
          Favorite Book:{" "}
          <span className="text-base lg:text-lg font-medium">
            {formData?.favoriteBook}
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
