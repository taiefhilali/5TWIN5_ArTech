export interface Cv {
    _id: string; // Assuming your CV model has an _id field
    cv: string;
    content: string;
    skills: string[];
    experiences: string[];
    createdAt: Date;
    updatedAt: Date;
  }
  