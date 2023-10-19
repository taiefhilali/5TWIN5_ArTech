import { Category } from "./category";

export interface Quiz {
    title: string;
    description: string;
    maxMarks:string;
    numberofQuestions:string;
    category:Category; // This represents the associated category
    createdTimestamp: number; // Add a field for the created timestamp



  }
  