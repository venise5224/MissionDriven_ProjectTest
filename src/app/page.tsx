"use client";

import { FormProvider, useForm } from "react-hook-form";
import CategorySelector from "@/components/CategorySelector";
import ContentTitleInput from "@/components/ContentTitleInput";
import MainImageUploader from "@/components/MainImageUploader";
import SubImageUploader from "@/components/SubImageUploader";
import ActivityTypeSelector from "@/components/ActivityTypeSelector";
import DetailSessionForm from "@/components/DetailSessionForm";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ProjectTestFormType,
  projectTestSchema,
} from "@/schema/projectTestSchema";
import { useFormStore } from "@/stores/useFormStore";
import { useEffect } from "react";

export default function Home() {
  const setIsValid = useFormStore((state) => state.setIsValid);
  const methods = useForm<ProjectTestFormType>({
    resolver: zodResolver(projectTestSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      mainImage: null,
      subImages: [],
      categories: [],
      activityType: "",
      sessionDetails: [
        {
          date: null,
          startTime: { ampm: "오전", hour: "10", minute: "00" },
          endTime: { ampm: "오전", hour: "11", minute: "00" },
          description: "",
        },
      ],
    },
  });

  const { isValid } = methods.formState;

  useEffect(() => {
    setIsValid(isValid);
  }, [isValid, setIsValid]);

  const onSubmit = (data: ProjectTestFormType) => {
    console.log("폼 제출 데이터:", data);
  };

  return (
    <FormProvider {...methods}>
      <main className="md:max-w-[1100px] mx-auto px-4 pb-40 md:px-5">
        <form
          id="projectForm"
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-full flex flex-col md:flex-row md:gap-10"
        >
          <section className="mt-10 flex flex-col gap-10">
            <MainImageUploader />
            <SubImageUploader />
          </section>

          <section className="mt-10 flex flex-col gap-10">
            <CategorySelector />
            <ContentTitleInput />
            <ActivityTypeSelector />
            <DetailSessionForm />
          </section>

          {/* 폼 제출 버튼 ? */}
        </form>
      </main>
    </FormProvider>
  );
}
