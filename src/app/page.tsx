import MainImageUploader from "@/components/MainImageUploader";
import SubImageUploader from "@/components/SubImageUploader";

export default function Home() {
  return (
    <main className="md:max-w-[1100px] mx-auto px-4 md:px-5">
      <div className="mt-10">
        <MainImageUploader />
      </div>
      <div className="mt-10">
        <SubImageUploader />
      </div>
    </main>
  );
}
