import DownloadActions from "@/components/DownloadActions";
import FloorPlanClient from "@/components/FloorPlanClient";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const floorPlans = [
  {
    id: 1,
    label: "2 BHK Floor Plan",
    image: "./images/floorplans/2bhk.webp",
    alt: "Sobha Parkcity 2 BHK floor plan, Hennur Main Road, Bangalore",
  },
  {
    id: 2,
    label: "3 BHK Floor Plan",
    image: "./images/floorplans/3bhk.webp",
    alt: "Sobha Parkcity 3 BHK floor plan, Hennur Main Road, Bangalore",
  },
  {
    id: 3,
    label: "4 BHK Floor Plan",
    image: "./images/floorplans/4bhk.webp",
    alt: "Sobha Parkcity 4 BHK floor plan, Hennur Main Road, Bangalore",
  },
];

function FloorPlanPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Floor Plan"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha Parkcity Floor Plan
          </h1>
          <DownloadActions/>
        </div>
      </main>
    </>
  );
}

export default FloorPlanPage;
