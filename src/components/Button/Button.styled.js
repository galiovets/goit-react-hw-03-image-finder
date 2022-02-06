import styled from 'styled-components';

const styledTypes = {
  default: {
    color: 'black',
    background: 'transparent',
    borderColor: '',
  },
  black: {
    color: 'white',
    background: 'black',
    borderColor: 'black',
  },
  white: {
    color: 'black',
    background: 'white',
    borderColor: 'black',
  },
  blue: {
    color: 'white',
    background: '#3f51b5',
    borderColor: 'none',
  },
};

export const ButtonWrapper = styled.button`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  max-width: 150px;
  cursor: pointer;
  align-items: center;
  justify-content: space-around;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background: ${({ styledType }) =>
    styledType ? styledTypes[styledType].background : styledTypes.default.background};
  color: ${({ styledType }) =>
    styledType ? styledTypes[styledType].color : styledTypes.default.color};
  border: 1px solid
    ${({ styledType }) =>
      styledType ? styledTypes[styledType].borderColor : styledTypes.default.borderColor};
  .content {
    margin-right: ${({ iconId }) => (iconId ? '10px' : '0')};
  }
`;
