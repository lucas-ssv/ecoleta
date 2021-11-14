import { forwardRef } from "react";
import ReactAsyncSelect from "react-select/async";
import { customStyles } from "./customStyles";

interface AsyncSelectProps {
  items: {
    label: string;
    value: string;
  }[];
  placeholder?: string;
  name: string;
}

export const AsyncSelect = forwardRef(
  ({ items, name, placeholder }: AsyncSelectProps, ref: any) => {
    const filterCities = (inputValue: string) => {
      return items.filter((city) =>
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
        name={name}
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onInputChange={handleInputChange}
        placeholder={placeholder}
        ref={ref}
      />
    );
  }
);
