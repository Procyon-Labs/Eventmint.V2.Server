import React, { useState } from "react";
import Select, { components, StylesConfig } from "react-select";
import { MainSelectProps, SelectOption } from "./index.types";
// import { useNavigate } from "react-router-dom";

const SelectComp: React.FC<MainSelectProps> = (props) => {
  //   const Navigate = useNavigate();

  type StylesType = StylesConfig<SelectOption, false>;

  const styles: StylesType = {
    control: (styles, { isFocused }) => ({
      ...styles,
      height: "64px",
      width: "100%",
      fontFamily: "open-sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      textAlign: "start",
      color: "#654EF2",
      backgroundColor: "##0000001a",
      boxShadow: isFocused ? "0 0 0 1px #00D300" : "0 0 0 1px #4B5768",
      //   "&:hover": {
      //     borderColor: isFocused ? "#00D300" : "0",
      //   },
    }),

    singleValue: (styles: any) => ({
      ...styles,
      color: "#654EF2", // Apply text color for the selected value
    }),

    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        width: "100%",
        fontFamily: "Cabinet Grotesk, sans-serif",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "16px",
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? ""
          : isFocused
          ? ""
          : null,
        color: isSelected ? "#654EF2" : isFocused ? "" : null,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      } as any;
    },

    dropdownIndicator: (styles) => ({
      ...styles,
      borderLeft: "none",
    }),
  };

  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  );

  const handleChange = (e: SelectOption | null) => {
    setSelectedOption(e);
    if (e && e.value) {
      console.log("fuzzy is great");
    }
    console.log(e?.value, "event");
  };

  const CustomOption = (props: any) => (
    <components.Option {...props}>
      {props.data.label}
      {props.isSelected && (
        <svg
          width="15"
          height="10"
          viewBox="0 0 15 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.12559 10.0001C4.95993 9.99785 4.8011 9.93376 4.68027 9.82041L0.305274 5.44541C0.20561 5.32398 0.154677 5.16981 0.162383 5.0129C0.17009 4.856 0.235884 4.70756 0.346968 4.59648C0.458052 4.4854 0.606484 4.4196 0.763392 4.4119C0.9203 4.40419 1.07446 4.45512 1.1959 4.55479L5.12559 8.49229L13.4303 0.179786C13.5517 0.0801216 13.7059 0.0291889 13.8628 0.0368952C14.0197 0.0446015 14.1681 0.110396 14.2792 0.22148C14.3903 0.332564 14.4561 0.480996 14.4638 0.637904C14.4715 0.794811 14.4206 0.948976 14.3209 1.07041L5.5709 9.82041C5.45007 9.93376 5.29124 9.99785 5.12559 10.0001Z"
            fill="#654EF2"
          />
        </svg>
      )}
    </components.Option>
  );
  return (
    <div>
      <Select
        placeholder={props?.placeholder}
        inputId="select-center"
        styles={styles}
        options={props?.options?.map((option) => ({
          value: option.value,
          label: option.label,
        }))}
        value={selectedOption}
        onChange={handleChange}
        components={{
          DropdownIndicator: (props) => (
            <components.DropdownIndicator {...props}>
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8333 1.5L7 7.33333L1.16667 1.5"
                  stroke="#654EF2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </components.DropdownIndicator>
          ),
          Option: CustomOption,
        }}
      />
    </div>
  );
};

export default SelectComp;
