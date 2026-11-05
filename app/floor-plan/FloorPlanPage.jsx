/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import FloorPlanClient from "@/components/FloorPlanClient";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const floorPlans = [
  {
    id: 1,
    label: "1 BHK Floor Plan",
    image: "./images/floorplans/1bhk.webp",
    alt: "Sobha Park City 1 BHK floor plan",
  },
  {
    id: 2,
    label: "2 BHK Floor Plan",
    image: "./images/floorplans/2bhk.webp",
    alt: "Sobha Park City 2 BHK floor plan",
  },
  {
    id: 3,
    label: "3 BHK Floor Plan",
    image: "./images/floorplans/3bhk.webp",
    alt: "Sobha Park City 3 BHK floor plan",
  },
  {
    id: 4,
    label: "4 BHK Floor Plan",
    image: "./images/floorplans/4bhk.webp",
    alt: "Sobha Park City 4 BHK floor plan",
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
            Sobha Park City Floor Plan
          </h1>
          <DownloadActions/>
          <div className="space-y-6 text-gray-800 mt-6">
  <p>The <strong>Sobha Park City Floor Plan</strong> offers four residential configurations, ranging from compact 1 BHK apartments to spacious 4 BHK homes. Developed by <strong>Sobha Limited</strong>, the proposed township is located on <b>Hennur Main Road, North Bangalore</b>, across approximately <b>50 acres</b>. It is planned to accommodate more than <b>4,000 residential</b> units across <b>12 towers and 24 wings</b>.</p>

  <p>Apartment sizes start at 721 sq.ft. SBA and extend up to 2,500 sq.ft. SBA. Each configuration is intended to serve different household requirements, with layouts planned around natural ventilation, wide windows and Vaastu-compliant entrances.</p>

  <p>This page explores the available apartment layouts, compares their sizes, explains the typical tower arrangement and outlines the interior specifications. Buyers can use these details to understand the space available in each configuration before choosing a home.</p>

  <h2 className="text-2xl font-bold">Explore the Sobha Park City Floor Plan Collection</h2>

  <p>The apartment planning at <a href="https://www.sobhaparkcity.com/"><strong>Sobha Park City</strong></a> covers four different BHK categories. Each option provides a different amount of residential space, allowing buyers to select a layout based on the number of bedrooms and their household's everyday requirements.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Apartment Layout</th>
          <th className="border border-gray-300 p-3 text-left">Saleable Built-up Area</th>
          <th className="border border-gray-300 p-3 text-left">Floor Plan</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3">1 BHK</td>
          <td className="border border-gray-300 p-3">721 sq.ft.</td>
          <td className="border border-gray-300 p-3">View 1 BHK Plan</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">2 BHK</td>
          <td className="border border-gray-300 p-3">1,000–1,200 sq.ft.</td>
          <td className="border border-gray-300 p-3">View 2 BHK Plan</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">3 BHK</td>
          <td className="border border-gray-300 p-3">1,600–1,900 sq.ft.</td>
          <td className="border border-gray-300 p-3">View 3 BHK Plan</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">4 BHK</td>
          <td className="border border-gray-300 p-3">2,400–2,500 sq.ft.</td>
          <td className="border border-gray-300 p-3">View 4 BHK Plan</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>The overall apartment size range is 721–2,500 sq.ft. SBA. The advertised apartment starting price is ₹1.10 Cr onwards. Buyers can use the respective enquiry buttons to request configuration-specific pricing.</p>

  <h2 className="text-2xl font-bold">Inside the Apartment Layouts</h2>
    <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            aria-label="Sobha Park City floor plans"
          >
            {floorPlans.map((plan) => (
              <li
                key={plan.id}
                className="rounded overflow-hidden border border-gray-200 shadow-sm cursor-pointer"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={plan.image}
                    alt={plan.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
  
                  <FloorPlanClient plan={plan} />
                </div>
  
                <div className="bg-primary text-white text-center font-semibold text-base md:text-lg py-3 px-4">
                  {plan.label}
                </div>
              </li>
            ))}
          </ul>
  <p>Understanding the available floor plans is easier when each configuration is considered separately. The following sections explain the intended residential use of the four apartment categories and their respective size ranges.</p>

  <h3 className="text-xl font-bold">1 BHK Layout – A Compact Residential Arrangement</h3>

  <p>Area: 721 sq.ft. SBA</p>

  <p>The 1 BHK layout is the smallest apartment option in Sobha Park City. With a saleable built-up area of 721 sq.ft., it provides a compact home for individuals and couples who do not require multiple bedrooms.</p>

  <p>The planning is centred around the essential residential spaces, including a living area, one bedroom, kitchen and bathroom. Wide windows and ventilation are among the stated features of the apartment layouts.</p>

  <p>For buyers looking for a smaller home within a large residential township, this configuration offers an alternative to the larger multi-bedroom options.</p>

  <h3 className="text-xl font-bold">2 BHK Layout – Additional Space for Everyday Living</h3>

  <p>Area: 1,200 sq.ft. SBA</p>

  <p>The 2 BHK apartments provide a larger residential arrangement with two bedrooms. The available area ranges from 1,200 sq.ft., giving buyers two size options within this category.</p>

  <p>The additional bedroom can be used by a family member, reserved for visiting guests or adapted into a home office according to household requirements.</p>

  <p>This configuration provides a middle ground between the compact 1 BHK and the more spacious 3 BHK apartments.</p>

  <h3 className="text-xl font-bold">3 BHK Layout – More Room for Growing Families</h3>

  <p>Area: 1,600–1,900 sq.ft. SBA</p>

  <p>The 3 BHK floor plan provides three bedrooms within a larger apartment area. With sizes ranging from 1,600 to 1,900 sq.ft., this category offers more accommodation for households with multiple family members.</p>

  <p>The additional bedroom capacity can be useful for families with children, households living with parents or buyers who want a separate room for working from home.</p>

  <p>The larger area also allows for a living and dining arrangement alongside the kitchen and bedrooms, with utility provisions included in the stated specifications.</p>

  <h3 className="text-xl font-bold">4 BHK Layout – The Largest Apartment Configuration</h3>

  <p>Area: 2,500 sq.ft. SBA</p>

  <p>The 4 BHK configuration is the largest apartment category planned at Sobha Park City. Its saleable built-up area ranges from 2,500 sq.ft.</p>

  <p>With four bedrooms, this option caters to larger households and families that require additional individual rooms. The extra accommodation can also provide flexibility for guests, a home office or extended family members.</p>

  <p>Buyers considering this configuration should examine the detailed 4 BHK drawing to understand the room arrangement and how the available space corresponds to their household needs.</p>

  <h2 className="text-2xl font-bold">Understanding the Space Available Across Different BHK Types</h2>

  <p>A comparison of the apartment areas helps explain how the available residential space changes from one configuration to another.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Configuration</th>
          <th className="border border-gray-300 p-3 text-left">Minimum SBA</th>
          <th className="border border-gray-300 p-3 text-left">Maximum SBA</th>
          <th className="border border-gray-300 p-3 text-left">Difference Between Sizes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3">1 BHK</td>
          <td className="border border-gray-300 p-3">721 sq.ft.</td>
          <td className="border border-gray-300 p-3">721 sq.ft.</td>
          <td className="border border-gray-300 p-3">Single listed size</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">2 BHK</td>
          <td className="border border-gray-300 p-3">1,000 sq.ft.</td>
          <td className="border border-gray-300 p-3">1,200 sq.ft.</td>
          <td className="border border-gray-300 p-3">200 sq.ft.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">3 BHK</td>
          <td className="border border-gray-300 p-3">1,600 sq.ft.</td>
          <td className="border border-gray-300 p-3">1,900 sq.ft.</td>
          <td className="border border-gray-300 p-3">300 sq.ft.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">4 BHK</td>
          <td className="border border-gray-300 p-3">2,400 sq.ft.</td>
          <td className="border border-gray-300 p-3">2,500 sq.ft.</td>
          <td className="border border-gray-300 p-3">100 sq.ft.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>The 1 BHK has one listed SBA, while the other three configurations have size ranges. This gives buyers an opportunity to compare different apartment areas within the same bedroom category.</p>

  <p>When reviewing the floor plans, pay attention to the complete room arrangement rather than considering only the total SBA. The way living areas, bedrooms, kitchen spaces and balconies are organised is also important when deciding whether a particular layout suits your needs.</p>

  <h2 className="text-2xl font-bold">How the Residential Towers Are Organised</h2>

  <p>Apartments are distributed across a planned development comprising 12 residential towers and blocks with 24 wings. The tower structure follows a 3B + G + 42-floor arrangement.</p>

  <p>This means each structure is planned with:</p>

  <ul className="list-disc space-y-2 pl-6">
    <li>Three basement levels.</li>
    <li>One ground floor.</li>
    <li>Forty-two floors above the ground level.</li>
    <li>Multiple residential wings within the overall tower arrangement.</li>
  </ul>

  <p>The typical floor plan explains how apartments are positioned within an individual wing and arranged around the common building core on a particular floor.</p>

  <p>With 4,000+ residential units distributed across the 50-acre township, tower-level planning forms an important part of understanding the overall residential layout.</p>

  <h3 className="text-xl font-bold">Key Tower Planning Details</h3>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Planning Element</th>
          <th className="border border-gray-300 p-3 text-left">Specification</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3">Residential Towers and Blocks</td>
          <td className="border border-gray-300 p-3">12</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Total Wings</td>
          <td className="border border-gray-300 p-3">24</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Basement Levels</td>
          <td className="border border-gray-300 p-3">3</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Ground Levels</td>
          <td className="border border-gray-300 p-3">1</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Upper Floors</td>
          <td className="border border-gray-300 p-3">42</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Total Residential Units</td>
          <td className="border border-gray-300 p-3">4,000+</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Parking Provisions</td>
          <td className="border border-gray-300 p-3">Dedicated parking with EV-charging provisions</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>The development also includes dedicated parking provisions with EV charging. Buyers can review the relevant tower and typical floor drawings to understand the arrangement of the residential blocks.</p>

  <h2 className="text-2xl font-bold">What to Examine When Reading an Apartment Floor Plan</h2>

  <p>A floor plan is more than a drawing showing the number of bedrooms. It provides an overview of how the available residential area is divided into different spaces.</p>

  <p>When comparing the Sobha Park City layouts, consider these aspects:</p>

  <ul className="list-disc space-y-2 pl-6">
    <li><strong>Living and dining arrangement:</strong> Examine how the common living spaces are positioned and whether the overall arrangement matches your household's daily activities.</li>
    <li><strong>Bedroom distribution:</strong> Compare the number of bedrooms and consider how each room could be used by different family members.</li>
    <li><strong>Kitchen and utility provisions:</strong> Review the kitchen arrangement and the specified provisions for washing machines and dishwashers.</li>
    <li><strong>Windows and ventilation:</strong> The project specifications mention wide windows and well-ventilated layouts. These are relevant when evaluating natural light and air circulation.</li>
    <li><strong>Entrance planning:</strong> Vaastu-compliant entries are included in the stated specifications. Buyers who consider entrance orientation important can review the respective apartment drawings.</li>
    <li><strong>Balconies and other spaces:</strong> Examine the balcony arrangement and the materials specified for these areas when reviewing the detailed drawings.</li>
  </ul>

  <p>A careful review of these elements can help distinguish between apartment configurations that may appear similar in terms of bedroom count but differ in their total area.</p>

  <h2 className="text-2xl font-bold">Interior Materials and Finishes Across the Homes</h2>

  <p>Apart from the room arrangement, the specified materials and finishes influence the overall interior character of an apartment.</p>

  <p>Sobha Park City lists several interior specifications covering flooring, entrance doors, windows and kitchen provisions.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Apartment Component</th>
          <th className="border border-gray-300 p-3 text-left">Stated Specification</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3">Overall Planning</td>
          <td className="border border-gray-300 p-3">Smartly planned and well-ventilated layouts</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Windows</td>
          <td className="border border-gray-300 p-3">Wide windows</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Main Entrance</td>
          <td className="border border-gray-300 p-3">Vaastu-compliant entry</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Main Door</td>
          <td className="border border-gray-300 p-3">Premium timber or wood-frame door with laminated shutter</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Living, Dining and Foyer</td>
          <td className="border border-gray-300 p-3">Premium vitrified tiles</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Bedrooms</td>
          <td className="border border-gray-300 p-3">Vitrified tiles</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Kitchen Flooring</td>
          <td className="border border-gray-300 p-3">Vitrified tiles</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Balconies</td>
          <td className="border border-gray-300 p-3">Anti-skid ceramic tiles</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Toilets</td>
          <td className="border border-gray-300 p-3">Anti-skid ceramic tiles</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Window Frames</td>
          <td className="border border-gray-300 p-3">UPVC</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Balcony Door Frames</td>
          <td className="border border-gray-300 p-3">UPVC</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Glass</td>
          <td className="border border-gray-300 p-3">Clear glass</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Additional Window Provision</td>
          <td className="border border-gray-300 p-3">Mosquito mesh</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Kitchen Counter</td>
          <td className="border border-gray-300 p-3">Granite</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Kitchen Utility Points</td>
          <td className="border border-gray-300 p-3">Washing machine and dishwasher provisions</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>These specifications provide a reference for understanding the materials planned for different parts of the apartment.</p>

  <h3 className="text-xl font-bold">Flooring and Interior Finish</h3>

  <p>Premium vitrified tiles are specified for the living, dining, foyer, bedrooms and kitchen. Balconies and toilets are planned with anti-skid ceramic tiles.</p>

  <h3 className="text-xl font-bold">Doors and Window Design</h3>

  <p>The main entrance specification includes a premium timber or wood-frame door with a laminated shutter. UPVC frames with clear glass are specified for windows and balcony doors, along with mosquito-mesh provision.</p>

  <h3 className="text-xl font-bold">Kitchen Planning</h3>

  <p>The kitchen specification includes granite counters and provisions for a washing machine and dishwasher. Buyers can refer to the apartment drawings to understand the kitchen arrangement and its relationship with the other residential spaces.</p>

  <h2 className="text-2xl font-bold">Selecting a Floor Plan Based on Your Household</h2>

  <p>The most suitable apartment layout depends on how many people will live in the home and how much space they require.</p>

  <p>Here is a practical way to compare the four configurations:</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Household Requirement</th>
          <th className="border border-gray-300 p-3 text-left">Configuration to Consider</th>
          <th className="border border-gray-300 p-3 text-left">SBA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3">Individual or couple</td>
          <td className="border border-gray-300 p-3">1 BHK</td>
          <td className="border border-gray-300 p-3">721 sq.ft.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Small family</td>
          <td className="border border-gray-300 p-3">2 BHK</td>
          <td className="border border-gray-300 p-3">1,200 sq.ft.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Growing family</td>
          <td className="border border-gray-300 p-3">3 BHK</td>
          <td className="border border-gray-300 p-3">1,600–1,900 sq.ft.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Large or multi-generation family</td>
          <td className="border border-gray-300 p-3">4 BHK</td>
          <td className="border border-gray-300 p-3">2,500 sq.ft.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>Apart from the present household size, think about your requirements over the next five to ten years. A family expecting additional members or planning for parents to live with them may require more bedrooms in the future.</p>

  <p>It is also useful to consider whether you regularly work from home, accommodate guests or need separate spaces for different household activities.</p>

  <p>The aim should be to select a layout that offers sufficient room for your current lifestyle while providing flexibility for future needs.</p>

  <h2 className="text-2xl font-bold">Project Information and Development Status</h2>
  <img width={1000} height={664}
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/information-and-development.webp"
              alt="Project Information and Development Status"
              loading="lazy"
              title="Project Information and Development Status"
            />

  <p>The residential layouts form part of a larger township planned by Sobha Limited. The following details summarise the project's overall development information.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Project Particular</th>
          <th className="border border-gray-300 p-3 text-left">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3">Project Name</td>
          <td className="border border-gray-300 p-3">Sobha Park City</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Developer</td>
          <td className="border border-gray-300 p-3">Sobha Limited</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Location</td>
          <td className="border border-gray-300 p-3">Hennur Main Road, North Bangalore</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Development Type</td>
          <td className="border border-gray-300 p-3">Residential Township</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Total Land Area</td>
          <td className="border border-gray-300 p-3">50 Acres</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Total Units</td>
          <td className="border border-gray-300 p-3">4,000+</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Towers and Blocks</td>
          <td className="border border-gray-300 p-3">12</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Wings</td>
          <td className="border border-gray-300 p-3">24</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Structure</td>
          <td className="border border-gray-300 p-3">3B + G + 42 Floors</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Apartment Types</td>
          <td className="border border-gray-300 p-3">1, 2, 3 and 4 BHK</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">SBA Range</td>
          <td className="border border-gray-300 p-3">721–2,500 sq.ft.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Starting Price</td>
          <td className="border border-gray-300 p-3">₹1.1 Cr onwards</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Project Status</td>
          <td className="border border-gray-300 p-3">Pre-Launch</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Pre-Launch Opening</td>
          <td className="border border-gray-300 p-3">November 2026</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Planned Formal Launch</td>
          <td className="border border-gray-300 p-3">December 2026</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">RERA Status</td>
          <td className="border border-gray-300 p-3">Registration Awaited</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>The project is currently in the pre-launch stage. RERA registration is awaited, and buyers should verify the applicable registration details once issued.</p>

  <h2 className="text-2xl font-bold">Project Timeline and Possession Information</h2>

  <p>The development schedule provides an overview of the proposed project milestones.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Milestone</th>
          <th className="border border-gray-300 p-3 text-left">Timeline</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3">Pre-Launch</td>
          <td className="border border-gray-300 p-3">November 2026</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Formal Launch</td>
          <td className="border border-gray-300 p-3">December 2026</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Project Completion</td>
          <td className="border border-gray-300 p-3">November 2031</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Possession</td>
          <td className="border border-gray-300 p-3">December 2031</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>The pre-launch opened in November 2026, with the formal launch planned for December 2026. Completion is planned for November 2031, followed by possession in December 2031.</p>

  <p>These timelines are the stated project milestones and should be checked against the applicable project documentation.</p>

  <h2 className="text-2xl font-bold">Get the Detailed Sobha Park City Floor Plan</h2>

  <p>Choosing an apartment becomes easier when you can examine the actual layout drawing instead of relying only on the listed SBA.</p>

  <p>Buyers interested in a particular configuration can request the corresponding floor plan to understand the room arrangement and available residential area.</p>

  <p>Select your preferred 1, 2, 3 or 4 BHK option and submit the enquiry form to request further details. You can also enquire about the corresponding apartment price and express your interest in arranging a site visit.</p>

  <p>Reviewing the detailed drawings alongside the stated specifications will help you understand the layout before deciding which apartment type to consider.</p>
</div>
<div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">Frequently Asked Questions About Sobha Park City Floor Plans</h2>

  <h3 className="text-xl font-bold">1. What apartment configurations are available at Sobha Park City?</h3>
  <p>Sobha Park City offers 1, 2, 3 and 4 BHK apartments. The listed SBA ranges from 721 sq.ft. for the 1 BHK to 2,500 sq.ft. for the largest 4 BHK configuration.</p>

  <h3 className="text-xl font-bold">2. What is the floor plan size of a 1 BHK apartment?</h3>
  <p>The 1 BHK apartment has a saleable built-up area of 721 sq.ft. It is the smallest listed residential configuration in the township.</p>

  <h3 className="text-xl font-bold">3. What is the SBA of the 2 BHK floor plan?</h3>
  <p>The 2 BHK apartments are available in two size ranges, from 1,200 sq.ft. SBA.</p>

  <h3 className="text-xl font-bold">4. What are the dimensions of the 3 BHK apartments?</h3>
  <p>The 3 BHK apartments have a listed saleable built-up area ranging from 1,600 to 1,900 sq.ft. Exact individual room dimensions should be checked in the detailed floor plan drawing.</p>

  <h3 className="text-xl font-bold">5. How large are the 4 BHK apartments?</h3>
  <p>The 4 BHK homes range from 2,500 sq.ft. SBA, making them the largest apartment configuration in Sobha Park City.</p>

  <h3 className="text-xl font-bold">6. Are the apartment layouts designed for natural ventilation?</h3>
  <p>Yes. The stated planning features include well-ventilated layouts and wide windows intended to allow natural light into the apartments.</p>

  <h3 className="text-xl font-bold">7. Does Sobha Park City offer Vaastu-compliant apartments?</h3>
  <p>The project specifications mention Vaastu-compliant apartment entrances. Buyers can review the respective layout drawings for additional details.</p>

  <h3 className="text-xl font-bold">8. What is the typical tower structure at Sobha Park City?</h3>
  <p>The residential towers and blocks are planned with three basement levels, a ground floor and 42 upper floors, described as 3B + G + 42.</p>

  <h3 className="text-xl font-bold">9. How many towers and wings are planned?</h3>
  <p>The township includes 12 residential towers and blocks comprising 24 wings, with more than 4,000 residential units across the development.</p>

  <h3 className="text-xl font-bold">10. What flooring materials are specified for the apartments?</h3>
  <p>Premium vitrified tiles are specified for living, dining, foyer, bedrooms and kitchen areas. Anti-skid ceramic tiles are specified for balconies and toilets.</p>

  <h3 className="text-xl font-bold">11. What are the kitchen specifications?</h3>
  <p>The stated kitchen specifications include granite counters and provisions for a washing machine and dishwasher.</p>

  <h3 className="text-xl font-bold">12. What type of windows are specified?</h3>
  <p>The specifications mention UPVC window and balcony-door frames with clear glass and mosquito-mesh provision.</p>

  <h3 className="text-xl font-bold">13. What is the starting price of Sobha Park City apartments?</h3>
  <p>The advertised starting price is ₹1.1 Cr onwards. Buyers can request the price applicable to their preferred apartment configuration.</p>

  <h3 className="text-xl font-bold">14. When is possession planned for Sobha Park City?</h3>
  <p>Project completion is planned for November 2031, with possession scheduled for December 2031. RERA registration is awaited.</p>
</div>
        </div>
      </main>
    </>
  );
}

export default FloorPlanPage;
