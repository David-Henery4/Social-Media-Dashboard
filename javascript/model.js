import {
  facebookIcon,
  instagramIcon,
  twitterIcon,
  youtubeIcon,
} from "../assets";

const overviewData = [
  {
    id: 1,
    statType: "page views",
    socialIcon: facebookIcon,
    mainStat: 87,
    percentage: 3,
  },
  {
    id: 2,
    statType: "likes",
    socialIcon: facebookIcon,
    mainStat: 52,
    percentage: -2,
  },
  {
    id: 3,
    statType: "likes",
    socialIcon: instagramIcon,
    mainStat: 5426,
    percentage: 2257,
  },
  {
    id: 4,
    statType: "profile views",
    socialIcon: instagramIcon,
    mainStat: "52k",
    percentage: 1375,
  },
  {
    id: 5,
    statType: "retweets",
    socialIcon: twitterIcon,
    mainStat: 117,
    percentage: 303,
  },
  {
    id: 6,
    statType: "likes",
    socialIcon: twitterIcon,
    mainStat: 507,
    percentage: 553,
  },
  {
    id: 7,
    statType: "likes",
    socialIcon: youtubeIcon,
    mainStat: 107,
    percentage: -19,
  },
  {
    id: 8,
    statType: "total views",
    socialIcon: youtubeIcon,
    mainStat: 1407,
    percentage: -12,
  },
];

const statsData = [
  {
    id: 1,
    username: "@nathanf",
    socialIcon: facebookIcon,
    mainStat: 1987,
    changeDiff: 12,
    statType: "Followers",
    colorBorder: "facebook-color",
  },
  {
    id: 2,
    username: "@nathanf",
    socialIcon: twitterIcon,
    mainStat: 1044,
    changeDiff: 99,
    statType: "Followers",
    colorBorder: "twitter-color",
  },
  {
    id: 3,
    username: "@realnathanf",
    socialIcon: instagramIcon,
    mainStat: "11k",
    changeDiff: 1099,
    statType: "Followers",
    colorBorder: "instagram-color",
  },
  {
    id: 4,
    username: "Nathan F.",
    socialIcon: youtubeIcon,
    mainStat: 8239,
    changeDiff: -144,
    statType: "Subscribers",
    colorBorder: "youtube-color",
  },
];

export { overviewData, statsData };
