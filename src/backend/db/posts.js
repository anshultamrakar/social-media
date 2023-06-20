import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:"Non programmers on my timeline. Attention After placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well.Interested in helping me build this course? Join the telegram group (in next tweet)",
    likes: {
      likeCount: 4,
      isLiked : false, 
      likedBy: [],
      dislikedBy: [],
    },
    comment : "", 
    username: "Anshul Tamrakar",
    img : "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.701769884.1684604185&semt=ais", 
    bookmarked : false,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:"Non programmers on my timeline. Attention After placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well.Interested in helping me build this course? Join the telegram group (in next tweet)",
    likes: {
      likeCount: 4,
      isLiked : false, 
      likedBy: [],
      dislikedBy: [],
    },
    comment : "", 
    username: "Ali Ratlamwala",
    img : "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.701769884.1684604185&semt=ais", 
    bookmarked : false,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:"Non programmers on my timeline. Attention After placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well.Interested in helping me build this course? Join the telegram group (in next tweet)",
    likes: {
      likeCount: 4,
      isLiked : false, 
      likedBy: [],
      dislikedBy: [],
    },
    comment : "", 
    username: "Binod",
    img : "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.701769884.1684604185&semt=ais", 
    bookmarked : false,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:"Non programmers on my timeline. Attention After placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well.Interested in helping me build this course? Join the telegram group (in next tweet)",
    likes: {
      likeCount: 4,
      isLiked : false, 
      likedBy: [],
      dislikedBy: [],
    },
    comment : "", 
    username: "Binod",
    img : "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.701769884.1684604185&semt=ais", 
    bookmarked : false,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:"Non programmers on my timeline. Attention After placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well.Interested in helping me build this course? Join the telegram group (in next tweet)",
    likes: {
      likeCount: 4,
      isLiked : false, 
      likedBy: [],
      dislikedBy: [],
    },
    comment : "", 
    username: "Binod",
    img : "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.701769884.1684604185&semt=ais", 
    bookmarked : false,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:"Non programmers on my timeline. Attention After placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well.Interested in helping me build this course? Join the telegram group (in next tweet)",
    likes: {
      likeCount: 4,
      isLiked : false, 
      likedBy: [],
      dislikedBy: [],
    },
    comment : "", 
    username: "Binod",
    img : "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.701769884.1684604185&semt=ais", 
    bookmarked : false,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
