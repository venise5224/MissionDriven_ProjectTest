import MainImageUploader from "@/components/MainImageUploader";

export default function Home() {
  return (
    <main className="md:max-w-[1100px] mx-auto px-4 md:px-5">
      <div className="mt-10">
        <MainImageUploader />
      </div>
    </main>
  );
}
