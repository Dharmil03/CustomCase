import Image from "next/image";
import MaxWidth from "@/components/MaxWidth";

export default function Home() {
  return (
    <div className="bg-slate-50">
        <section>
          <MaxWidth className="pb-24 pt-10 lg:grid lg:grid-cols-3
           sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
            <div className="col-span-2 px-6 lg:px-0 lg:text-left">
              <div className="relative mx-auto text-center lg:text-left
              flex flex-col items-center lg:items-start">

              </div>

            </div>
           </MaxWidth>
        </section>
    </div>
  );
}
