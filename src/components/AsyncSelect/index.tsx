import ReactAsyncSelect from "react-select/async";
import { customStyles } from "./customStyles";

interface AsyncSelectProps {
  placeholder?: string;
}

const cities = [
  { label: "São Paulo", value: "São Paulo" },
  { label: "Rio de Janeiro", value: "Rio de Janeiro" },
  { label: "Sorocaba", value: "Sorocaba" },
  { label: "Osasco", value: "Osasco" },
  { label: "Ribeirão Preto", value: "Ribeirão Preto" },
];

export function AsyncSelect({ placeholder }: AsyncSelectProps) {
  const filterCities = (inputValue: string) => {
    return cities.filter((city) =>
      city.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (
    inputValue: string,
    callback: (options: any) => void
  ) => {
    setTimeout(() => {
      callback(filterCities(inputValue));
    }, 1000);
  };

  function handleInputChange(newValue: string) {
    const inputValue = newValue.replace(/\W/g, "");
    return inputValue;
  }

  return (
    <ReactAsyncSelect
      styles={customStyles}
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      onInputChange={handleInputChange}
      placeholder={placeholder}
    />
  );
}
