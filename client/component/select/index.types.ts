export interface SelectOption {
    value?: string;
    label?: string;
  }
  
  export interface MainSelectProps {
    options?: SelectOption[];
    placeholder?: string;
  }
  
  export interface ValueOptionProps {
      data?: { label: string };
    }
  
  export interface StylesType {
      control: (styles: any, state: any) => any;
      option: (styles: any, state: any) => any;
      // Define other styles as needed
    }