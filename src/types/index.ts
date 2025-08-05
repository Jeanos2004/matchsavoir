export type TeamMember = {
    name: string;
    role: string;
    image: string;
    socialLinks: {
      twitter?: string;
      linkedin?: string;
      github?: string;
    };
  };


export type TestimonialType = {
    content : string,
    author : string,
    role : string,
    avatar: string,
}

export type StatsType = {
    value : string, 
    label : string,
    icon : React.JSX.Element,
}


export interface FormationType {
  id: number;
  title: string;
  instructor: string;
  price: number;
  duration: string;
  startDate: string;
  endDate: string;
  type: string;
  location: string;
  instructorImage: string;
}