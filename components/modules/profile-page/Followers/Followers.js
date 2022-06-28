import { Avatar, Button } from '@mui/material';

const style = {};

const Followers = ({ items, type }) => {
  return (
    <>
      <div className={style.followers}>
        <div className={style.followersList}>
          {items && items.length ? (
            items.map((item, key) => (
              <div key={index} className={style.followersItem}>
                <div className={style.followersUser}>
                  <Avatar href="images/avatar-creator.jpeg" />
                  <div className={style.followersDetails}>
                    <div className={style.followersName}></div>
                    <div className={style.followersCounter}></div>
                    <Button className={style.followersBtn}>Follow</Button>
                  </div>
                </div>
                <div className={style.followersWrap}>
                  <div className={style.gallery}>
                    {items.gallery.map((image, index) => (
                      <div className={style.preview} key={index}>
                        <img src={image} alt="Follower" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Followers;
