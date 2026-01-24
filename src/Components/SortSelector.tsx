import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../Store";

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];

const SortSelector = () => {
  const onSelectSortOrder = useGameQueryStore(s => s.setSortOrder);
  const [selectedOrder, setSelectedOrder] = useState<string>(
    "Order by: Relevance"
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedOrder}
      </MenuButton>

      <MenuList overflow={"auto"}>
        {sortOrders.map((option) => (
          <MenuItem
            onClick={() => {
              onSelectSortOrder(option.value);
              setSelectedOrder(`Order by: ${option.label}`);
            }}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
