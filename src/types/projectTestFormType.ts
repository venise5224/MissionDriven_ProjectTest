export type ProjectTestFormType = {
  title: string;
  mainImage: File | null;
  subImages: File[];
  categories: string[];
  activityType: "online" | "offline" | "";
  sessionDetails: {
    date: string;
    startTime: {
      ampm: string;
      hour: string;
      minute: string;
    };
    endTime: {
      ampm: string;
      hour: string;
      minute: string;
    };
    description: string;
  }[];
};
