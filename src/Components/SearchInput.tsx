import { Input, InputGroup, InputLeftElement, Kbd } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ width: "85%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
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
