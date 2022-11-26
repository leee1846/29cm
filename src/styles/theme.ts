type ZIndex =
  | 'LEVEL_ONE'
  | 'LEVEL_TWO'
  | 'LEVEL_THREE'
  | 'LEVEL_FOUR'
  | 'LEVEL_FIVE'
  | 'LEVEL_SIX'
  | 'LEVEL_SEVEN';

interface ThemeType {
  zIndex: {
    [key in ZIndex]: number;
  };
}

const theme: ThemeType = {
  zIndex: {
    LEVEL_ONE: 1010, // background
    LEVEL_TWO: 1020,
    LEVEL_THREE: 1030,
    LEVEL_FOUR: 1040,
    LEVEL_FIVE: 1050,
    LEVEL_SIX: 1060,
    LEVEL_SEVEN: 1070, // loading-spinner
  },
};

export default theme;
