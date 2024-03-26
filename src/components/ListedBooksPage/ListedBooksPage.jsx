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
import { useContext } from "react";
import { ListedBooksContext } from "../../pages/ListedBooks";

const ListedBooksPage = () => {
  const { read, wishlist, handleSorting } = useContext(ListedBooksContext);
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
            <MenuItem onClick={() => handleSorting("rating")}>Rating</MenuItem>
            <MenuItem onClick={() => handleSorting("pages")}>
              Number Of Pages
            </MenuItem>
            <MenuItem onClick={() => handleSorting("year")}>
              Published Year
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div>
        <Tabs>
          <TabList className="border-[#9CCEF8] border-b">
            <Tab style={{ color: "#0D47A1" }}>Read Books</Tab>
            <Tab style={{ color: "#0D47A1" }}>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <AllListedBooks saved={read} whichOne={false} />
          </TabPanel>
          <TabPanel>
            <AllListedBooks saved={wishlist} whichOne={true} />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default ListedBooksPage;
