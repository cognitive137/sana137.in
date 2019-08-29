const authorList = {
  display: `flex`,
  flexWrap: `wrap-reverse`,
  listStyle: `none`,
  margin: 0,
  padding: 0,
};

const authorListItem = {
  flexShrink: 0,
  margin: 0,
  padding: 0,
  position: `relative`,
};

const avatarWrapper = {
  background: `#e3e9ed`,
  borderRadius: `100%`,
  display: `block`,
  height: `100%`,
  objectFit: `cover`,
  width: `100%`,
};

const Excerpt = {
  fontSize: `18px`,
  fontStretch: `100%`,
  lineHeight: `28px`,
  marginBlockEnd: `27px`,
  marginBottom: `22.5px`,
};

const postCard = {
  background: `#f7f7f7 center center`,
  backgroundSize: `cover`,
  borderRadius: `10px`,
  boxShadow: `0 20px 25px 0 rgba(50, 50, 50, 0.2)`,
  display: `flex`,
  flex: `1 1 300px`,
  flexDirection: `column`,
  margin: `0 20px 40px`,
  minHeight: `300px`,
  overflow: `hidden`,
};

const postCardContent = {
  display: `flex`,
  flexDirection: `column`,
  flexGrow: 1,
  justifyContent: `space-between`,
};

const postCardContentLink = {
  color: `#454545`,
  display: `block`,
  flexGrow: 1,
  padding: `25px 25px 0`,
  position: `relative`,
  textDecoration: `none`,
};

const postCardImage = {
  background: `#c5d2d9 no-repeat 50%`,
  backgroundSize: `cover`,
  height: `200px`,
  width: `auto`,
};

const postCardImageLink = {
  borderRadius: `5px 5px 0 0`,
  display: `block`,
  overflow: `hidden`,
  position: `relative`,
};

const postCardMeta = {
  alignItems: `flex-end`,
  display: `flex`,
  justifyContent: `space-between`,
  padding: `0 25px 25px`,
};

const postCardTags = {
  color: `#434343`,
  display: `block`,
  fontSize: `12px`,
  fontWeight: `bolder`,
  letterSpacing: `0.5px`,
  lineHeight: `14px`,
  marginBottom: `4px`,
  textTransform: `uppercase`,
};

const postCardTitle = {
  marginTop: 0,
};

const postFeed = {
  display: `flex`,
  flexWrap: `wrap`,
  margin: `0 -20px`,
  padding: `40px 0 0 0`,
  position: `relative`,
};

const readingTime = {
  color: `#a6aaa9`,
  flexShrink: 0,
  fontSize: `12px`,
  fontWeight: `bolder`,
  letterSpacing: `0.5px`,
  lineHeight: `33px`,
  marginLeft: `20px`,
  textTransform: `uppercase`,
};

const staticAvatar = {
  border: `#e0e0e0 2px solid`,
  borderRadius: `100%`,
  display: `block`,
  height: `34px`,
  margin: `0 -5px`,
  overflow: `hidden`,
  width: `34px`,
};

module.exports = {
  authorList,
  authorListItem,
  avatarWrapper,
  Excerpt,
  postCard,
  postCardContent,
  postCardContentLink,
  postCardImage,
  postCardImageLink,
  postCardMeta,
  postCardTags,
  postCardTitle,
  postFeed,
  readingTime,
  staticAvatar,
};
