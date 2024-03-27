import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center py-3 text-center mt-4 bg-gray-100 shadow-sm rounded-lg">
      <Typography className="font-normal text-blue-900">
        &copy; 2024 <span className="font-bold">Arnab Saha</span>
      </Typography>
    </footer>
  );
};

export default Footer;
