import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../Store";
import { useNavigate } from "react-router-dom";


const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(selector => selector.setSearchText)
  const navigate = useNavigate();

  return (
    <form
      style={{ width: "60%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
        navigate('/')
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="Search games... "
          borderRadius={20}
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};
export default SearchInput;
