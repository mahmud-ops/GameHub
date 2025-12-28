import { Input, InputGroup, InputLeftElement, Kbd } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => (
  <InputGroup>
  <InputLeftElement children = {<BsSearch />} />
    <Input placeholder="Search games... " borderRadius={20} variant={"filled"} />
  </InputGroup>
);

export default SearchInput;
