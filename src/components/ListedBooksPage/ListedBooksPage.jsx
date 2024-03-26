import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllListedBooks from "./AllListedBooks";

const ListedBooksPage = () => {
  return (
    <section className="space-y-6 md:space-y-8">
      <h1 className="text-2xl md:text-3xl text-blue-900 font-bold text-center py-6 rounded-lg bg-gray-100 shadow-sm">
        Books
      </h1>
      <div className="flex justify-center">
        <Menu>
          <MenuHandler>
            <Button className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-yellow-700 text-white font-semibold text-base shadow-none hover:shadow-none">
              Sort By <IoIosArrowDown className="text-lg" />
            </Button>
          </MenuHandler>
          <MenuList className="bg-gray-100 text-blue-900">
            <MenuItem>Rating</MenuItem>
            <MenuItem>Number Of Pages</MenuItem>
            <MenuItem>Published Year</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab style={{ color: "#0D47A1" }}>Read Books</Tab>
            <Tab style={{ color: "#0D47A1" }}>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <AllListedBooks props="read" />
          </TabPanel>
          <TabPanel>
            <AllListedBooks props="wishlist" />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default ListedBooksPage;
