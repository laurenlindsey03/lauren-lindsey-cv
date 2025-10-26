export type Honor = { 
  honor: string; 
  date: string 
};

export type ExperienceItem = { 
  position: string; 
  date: string; 
  link?: string 
};

export type Project = { 
  title: string; 
  image: string; 
  descr: string[] 
};

export type Education = {
  school: string;
  gpa: string;
  degree: string;
  graduation_date: string;
};

export type Contact = {
  address: string;
  phone: string;
  email: string;
  linkedin: string;
};

export type Resume = {
  name: string;
  tagline: string;
  headshot: string;
  contact: Contact;
  education: Education;
  honors_and_awards: Honor[];
  skills: string[];
  leadership_and_experience: ExperienceItem[];
  projects: Project[];
};
