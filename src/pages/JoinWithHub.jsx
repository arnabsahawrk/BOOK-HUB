import { createContext, useEffect, useState } from "react";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import RegistrationSuccess from "../components/RegistrationForm/RegistrationSuccess";
import { getUserDataStorage } from "../utils/localStorage";
import { Helmet } from "react-helmet-async";

export const FormDataContext = createContext({});

const JoinWithHub = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    interestedGenre: "",
    favoriteAuthor: "",
    favoriteBook: "",
    termsAgreed: false,
  });
  const [rendering, setRendering] = useState(false);

  useEffect(() => {
    const userData = getUserDataStorage();
    if (Object.keys(userData).length !== 0) {
      setFormData(userData);
      setRendering(true);
    }
  }, []);

  return (
    <FormDataContext.Provider value={{ formData, setFormData, setRendering }}>
      <section className="space-y-6 md:space-y-8">
        <Helmet>
          <title>Join Hub</title>
        </Helmet>
        <h1 className="text-2xl md:text-3xl text-blue-900 font-bold text-center py-6 rounded-lg bg-gray-100 shadow-sm">
          Join With Hub
        </h1>
        <div className="bg-gray-100 text-blue-900 rounded-lg shadow-sm">
          {rendering ? <RegistrationSuccess /> : <RegistrationForm />}
        </div>
      </section>
    </FormDataContext.Provider>
  );
};

export default JoinWithHub;
