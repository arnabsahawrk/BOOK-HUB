import { useContext } from "react";
import { FormDataContext } from "../../pages/JoinWithHub";
import { setUserDataStorage } from "../../utils/localStorage";

const RegistrationForm = () => {
  const { formData, setFormData, setRendering } = useContext(FormDataContext);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedFormData = { ...formData };
    if (type === "checkbox") {
      updatedFormData[name] = checked;
    } else {
      updatedFormData[name] = value;
    }
    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDataStorage(formData);
    setRendering(true);
  };

  return (
    <div className="py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 text-blue-900 rounded-lg shadow-sm p-6 flex flex-col items-center justify-center gap-2 lg:w-1/2 mx-auto text-lg lg:text-xl font-bold"
      >
        <div className="grid grid-cols-2 items-center">
          <label>Full Name</label>
          <input
            className="p-1 lg:p-2 text-base text-yellow-700 rounded-lg border-2 border-blue-900 focus:border-yellow-700 focus:outline-none"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-2 items-center">
          <label>Email Address</label>
          <input
            className="p-1 lg:p-2 text-base text-yellow-700 rounded-lg border-2 border-blue-900 focus:border-yellow-700 focus:outline-none"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-2 items-center">
          <label>Phone Number</label>
          <input
            className="p-1 lg:p-2 text-base text-yellow-700 rounded-lg border-2 border-blue-900 focus:border-yellow-700 focus:outline-none"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-2 items-center">
          <label>Interested Genre</label>
          <input
            className="p-1 lg:p-2 text-base text-yellow-700 rounded-lg border-2 border-blue-900 focus:border-yellow-700 focus:outline-none"
            type="text"
            name="interestedGenre"
            value={formData.interestedGenre}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-2 items-center">
          <label>Favorite Author</label>
          <input
            className="p-1 lg:p-2 text-base text-yellow-700 rounded-lg border-2 border-blue-900 focus:border-yellow-700 focus:outline-none"
            type="text"
            name="favoriteAuthor"
            value={formData.favoriteAuthor}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-2 items-center">
          <label>Favorite Book</label>
          <input
            className="p-1 lg:p-2 text-base text-yellow-700 rounded-lg border-2 border-blue-900 focus:border-yellow-700 focus:outline-none"
            type="text"
            name="favoriteBook"
            value={formData.favoriteBook}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            name="termsAgreed"
            checked={formData.termsAgreed}
            onChange={handleChange}
            required
          />
          <label>I agree to the Terms of Service and Privacy Policy</label>
        </div>

        <button
          type="submit"
          rel="noopener noreferrer"
          className="px-4 py-2 lg:px-6 lg:py-3 font-semibold text-sm lg:text-base rounded-lg bg-blue-900 text-white"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
