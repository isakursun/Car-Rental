import ReactSelect from "react-select";
import { makes } from "../../constants";
import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

type ButtonProps = {
  design?: string;
};

const SearchButton = ({ design }: ButtonProps) => {
  return (
    <button className={`ml-3 z-10 ${design}`}>
      <img src="/magnifying-glass.svg" width={40} height={40} />
    </button>
  );
};

const SearchBar = () => {
  const [params,setParams] = useSearchParams();
  const [make, setMake] = useState<string>('');
  const [model, setModel] = useState<string>('');

  type OptionType = {
    label: string;
    value: string;
  };

  const options: OptionType[] = useMemo(
    () =>
      makes.map((make) => ({
        label: make,
        value: make,
      })),
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setParams({
      make,
      model,
    }); 
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect
          onChange={(e: OptionType | null) => e && setMake(e.value)}
          options={options}
          className="w-full text-black"
        />
        <SearchButton design={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <img width={25} src="/model-icon.png" className="absolute ml-4" />
        <input
          onChange={(e) => setModel(e.target.value)}
          placeholder="Örn: Golf "
          className="searchbar__input rounded text-black"
          type="text"
        />
        <SearchButton />
      </div>
    </form>
  );
};

export default SearchBar;
