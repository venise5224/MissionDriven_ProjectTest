import CategorySelector from "@/components/CategorySelector";
import MainImageUploader from "@/components/MainImageUploader";
import SubImageUploader from "@/components/SubImageUploader";

export default function Home() {
  return (
    <main className="md:max-w-[1100px] mx-auto px-4 md:px-5 flex flex-col md:flex-row md:gap-10">
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
      </section>
    </main>
  );
}
