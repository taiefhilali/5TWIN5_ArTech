import { Categories } from "./Categories";

export interface Posts {
    postId: number;
  postTitle: string;
  voteCount: number;
  postDescription: string;
  category: Categories; // Make sure Categories is defined or imported
  dateCreated: Date;

  }
  