import { Icon } from '../Icon';
import { ButtonWrapper } from './Button.styled';

function Button({ type, content, isIcon, iconId, fill, styledType, onClick }) {
  return (
    <ButtonWrapper type={type} styledType={styledType} iconId={iconId} onClick={onClick}>
      <span className="content">{content}</span>
      {isIcon ? <Icon iconId={iconId} fill={fill} /> : null}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  type: 'button',
  styledType: '',
};

export default Button;
