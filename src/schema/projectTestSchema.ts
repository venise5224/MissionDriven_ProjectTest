import { z } from "zod";

export const sessionDetailSchema = z.object({
  date: z
    .date()
    .nullable()
    .refine((v) => v !== null, "날짜를 선택해주세요"),
  startTime: z.object({
    ampm: z.enum(["오전", "오후"]),
    hour: z.string().nonempty("시작 시간을 입력해주세요"),
    minute: z.string().nonempty("시작 분을 입력해주세요"),
  }),
  endTime: z.object({
    ampm: z.enum(["오전", "오후"]),
    hour: z.string().nonempty("종료 시간을 입력해주세요"),
    minute: z.string().nonempty("종료 분을 입력해주세요"),
  }),
  description: z
    .string()
    .min(8, "최소 8자 이상 입력해주세요")
    .max(800, "최대 800자까지 입력 가능합니다"),
});

export const projectTestSchema = z.object({
  title: z
    .string()
    .min(8, "8자 이상 입력해주세요")
    .max(80, "80자 이하로 입력해주세요")
    .refine((v) => !/\s{2,}/.test(v), {
      message: "연속 공백은 사용할 수 없습니다.",
    }),
  mainImage: z
    .any()
    .nullable()
    .refine((v) => v !== null, "메인 이미지를 선택해주세요"),
  subImages: z.array(z.any()).min(1, "서브 이미지를 최소 1개 선택해주세요"),
  categories: z.array(z.string()).min(1, "카테고리를 선택해주세요"),
  activityType: z.string().nonempty("활동 유형을 선택해주세요"),
  sessionDetails: z
    .array(sessionDetailSchema)
    .min(1, "회차 정보를 입력해주세요"),
});

export type ProjectTestFormType = z.infer<typeof projectTestSchema>;
