import PropTypes from 'prop-types';
import noAvatar from '../../images/noAvatar.png';
import { Item, Status, Avatar, Name } from './FriendList.styled';

export const FriendListItem = ({ avatar = noAvatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.prototype = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
