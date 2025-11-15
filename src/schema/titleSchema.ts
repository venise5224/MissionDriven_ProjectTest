import { z } from "zod";

export const titleSchema = z.object({
  title: z
    .string()
    .min(8, "8자 이상 입력해주세요")
    .max(80, "80자 이하로 입력해주세요")
    .refine((v) => !/\s{2,}/.test(v), {
      message: "연속 공백은 사용할 수 없습니다.",
    }),
});

export type TitleFormType = z.infer<typeof titleSchema>;
