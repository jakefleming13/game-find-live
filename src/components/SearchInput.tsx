import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSeatchText = useGameQueryStore(s => s.setSearchText);

  return (
    //Need a form to handle the search function
    <form
      onSubmit={(event) => {
        
        event.preventDefault(); //prevents the event from getting access to the server
        
        //When submitting the form, check:
        if (ref.current) setSeatchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
