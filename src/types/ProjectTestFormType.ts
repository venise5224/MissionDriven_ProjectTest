export type ProjectTestFormType = {
  title: string;
  mainImage: File | null;
  subImages: File[];
  categories: string[];
  activityType: "online" | "offline" | "";
  sessionDetails: Record<string, string>; // 필요하면 더 구체적으로
};
