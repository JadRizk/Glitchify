export type Colors = {
  magenta1: string;
  magenta2: string;
  magenta3: string;
  magenta4: string;
  magenta5: string;
  magenta6: string;
  magenta7: string;
  magenta8: string;
  magenta9: string;
  magenta10: string;

  green1: string;
  green2: string;
  green3: string;
  green4: string;
  green5: string;
  green6: string;
  green7: string;
  green8: string;
  green9: string;
  green10: string;

  white1: string;
  white2: string;
  white3: string;
  white4: string;
  white5: string;

  black1:string;
  black2:string;
  black3:string;
  black4:string;
  black5:string;
  black7: string;
  black8:string;
  black9:string;
  black10:string;
};

const magentaColors = {
  magenta1: '#FFADFF',
  magenta2: '#FF85FF',
  magenta3: '#FF5CFF',
  magenta4: '#FF33FF',
  magenta5: '#FF00FF',
  magenta6: '#E000E0',
  magenta7: '#B800B8',
  magenta8: '#8F008F',
  magenta9: '#660066',
  magenta10: '#3D003D',
};

const greenColors = {
  green1: '#B8F4B8',
  green2: '#95EE95',
  green3: '#72E972',
  green4: '#4FE34F',
  green5: '#2BDE2B',
  green6: '#1EC21E',
  green7: '#199F19',
  green8: '#137C13',
  green9: '#0E580E',
  green10: '#083508',
};

const whiteColors = {
  white1: '#FFFFFF',
  white2: '#F8F1F1',
  white3: '#F1E4E4',
  white4: '#EAD6D6',
  white5: '#DFBFBF',
};

const blackColors = {
  black1: '#ADADAD',
  black2: '#999999',
  black3: '#858585',
  black4: '#707070',
  black5: '#5C5C5C',
  black7: '#4747474',
  black8: '#333333',
  black9: '#1F1F1F',
  black10: '#0A0A0A',
};


export const colors: Colors = {
  ...magentaColors,
  ...greenColors,
  ...blackColors,
  ...whiteColors,
};
