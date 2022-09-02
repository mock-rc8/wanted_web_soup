import { atom } from "recoil";

export const userRecoilState = atom({
  key: "userRecoilState",
  default: {
    email:"soobin0818@naver.com",
    pw:"S972901Ss!",
    profile:"https://static.wanted.co.kr/images/avatars/1505318/1bc915d2.jpg",
    nickName:"숩"
  }
});