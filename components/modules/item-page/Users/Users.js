import { Avatar } from '@mui/material';

const style = {
  item: `border-b border-[#353945] mb-[1rem] last:mb-0 flex items-center pb-[1rem]`,
  avatarBox: `relative shrink-0 w-[3rem] h-[3rem] mr-[1rem]`,
  avatar: `w-full h-full`,
  reward: `absolute right-[-0.313rem] bottom-[-0.313rem]`,
  description: `grow`,
  position: `text-[#777E90]`,
  name: `font-medium`
};

const Users = ({ items }) => {
  return (
    <>
      <div className={style.list}>
        {items.map((item, index) => (
          <div key={index} className={style.item}>
            <div className={style.avatarBox}>
              <Avatar className={style.avatar} alt="creator photo" src={item.avatar} />
              {item.reward && (
                <div className={style.reward}>
                  <img src={item.reward} alt="reward" />
                </div>
              )}
            </div>
            <div className={style.description}>
              <div className={style.position}>{item.position}</div>
              <div className={style.name}>{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
