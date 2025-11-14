import CategorySelector from "@/components/CategorySelector";
import ContentTitleInput from "@/components/ContentTitleInput";
import MainImageUploader from "@/components/MainImageUploader";
import SubImageUploader from "@/components/SubImageUploader";
import ActivityTypeSelector from "@/components/ActivityTypeSelector";
import DetailSessionForm from "@/components/DetailSessionForm";

export default function Home() {
  return (
    <main className="md:max-w-[1100px] mx-auto px-4 pb-40 md:px-5 flex flex-col md:flex-row md:gap-10">
      <section>
        <div className="mt-10">
          <MainImageUploader />
        </div>
        <div className="mt-10">
          <SubImageUploader />
        </div>
      </section>
      <section>
        <div className="mt-10">
          <CategorySelector />
        </div>
        <div className="mt-10">
          <ContentTitleInput />
        </div>
        <div className="mt-10">
          <ActivityTypeSelector />
        </div>
        <div className="mt-10">
          <DetailSessionForm />
        </div>
      </section>
    </main>
  );
}
