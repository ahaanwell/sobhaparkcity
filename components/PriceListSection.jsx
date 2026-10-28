/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";
import DownloadCostSheetActions from "./DownloadCostSheetActions";

const priceData = [
  { type: "1 BHK", size: "750 Sq.ft", price: "₹1.1 Cr* onwards" },
  { type: "2 BHK", size: "1400 Sq.ft", price: "₹2.38 Cr* onwards" },
  { type: "3 BHK", size: "1750 - 1950 Sq.ft", price: "₹2.97 Cr* onwards" },
  { type: "4 BHK", size: "2600 Sq.ft", price: "₹4.40 Cr* onwards" },
];

export default function PriceListSection() {

  return (
    <section
      id="price-table"
      aria-labelledby="price-list-heading"
      className="w-full bg-white pt-14"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="price-list-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Configuration and Price
        </h2>
        <div className="w-full h-px bg-gray-200 mb-6" />
        <div className="space-y-6 text-gray-800 mb-6">
          <p>
            <b>Sobha Park City</b> offers different apartment configurations designed to accommodate varying household sizes and space requirements. The available project information lists <b>1 BHK, 2 BHK, 3 BHK, and 4 BHK apartments</b>, with different super built-up areas and indicative <a href="https://www.sobhaparkcity.com/price"><b>starting prices</b></a>.
          </p>

          <h3 className="text-xl font-bold">Apartment Types and Price Table – Sobha Park City</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-0">

          <div className="flex-1 overflow-x-auto">
            <table
              className="w-full text-sm md:text-base"
              role="table"
              aria-label="Apartment types and pricing"
            >
              <thead>
                <tr className="border bg-primary text-white border-gray-200">
                  <th className="py-1 px-2 font-bold text-center w-1/4">Configuration</th>
                  <th className="py-1 px-2 font-bold text-center w-1/4">Built-up Area</th>
                  <th className="py-1 px-2 font-bold text-center w-1/4">Carpet Area</th>
                  <th className="py-1 px-2 font-bold text-center w-1/4">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300 hover:bg-gray-50 transition">
                  <td className="py-2 px-2 text-center text-black">1 BHK</td>
                  <td className="py-2 px-2 text-center text-black">721 Sq.ft.</td>
                  <td className="py-2 px-2 text-center text-black">721 Sq.ft.</td>
                  <td className="py-2 px-2 text-center font-medium text-primary">₹1.1 Cr* onwards</td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-gray-50 transition">
                  <td className="py-2 px-2 text-center text-black">2 BHK</td>
                  <td className="py-2 px-2 text-center text-black">1200 Sq.ft.</td>
                  <td className="py-2 px-2 text-center text-black">840 – 960 Sq.ft.</td>
                  <td className="py-2 px-2 text-center font-medium text-primary">₹2.16 Cr* onwards</td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-gray-50 transition">
                  <td className="py-2 px-2 text-center text-black">3 BHK</td>
                  <td className="py-2 px-2 text-center text-black">1,600 – 1,900 Sq.ft.</td>
                  <td className="py-2 px-2 text-center text-black">1,120 – 1,520 Sq.ft.</td>
                  <td className="py-2 px-2 text-center font-medium text-primary">₹2.88 - 3.42 Cr* onwards</td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-gray-50 transition">
                  <td className="py-2 px-2 text-center text-black">4 BHK</td>
                  <td className="py-2 px-2 text-center text-black">2500 Sq.ft.</td>
                  <td className="py-2 px-2 text-center text-black">1,750 – 2,000 Sq.ft.</td>
                  <td className="py-2 px-2 text-center font-medium text-primary">₹4.60 Cr* onwards</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-4 md:px-0">
            <img
              className="w-full"
              loading="lazy"
              src="/images/costing-details.webp" alt="Sobha Park City price list and cost sheet, Hennur Main Road, Bangalore" />
            <DownloadCostSheetActions />
          </div>

        </div>
        <div className="space-y-6 text-gray-800 mt-6">
  <p>
    Sobha Park City is a planned residential apartment development by Sobha Group on Hennur Main Road in North Bangalore. The project information indicates a development spread across approximately 50 acres, with 12 residential towers. Its apartment configurations provide different options for buyers based on their preferred living space and budget.
  </p>

  <p>
    The 2 BHK apartments, with a reported super built-up area of 1,200 sq. ft., may suit buyers looking for a home with two bedrooms and functional living areas. The 3 BHK apartments, ranging from 1,600 to 1,900 sq. ft., provide additional space for families who need an extra bedroom or a separate work area. The 4 BHK apartments, with a reported area of 2,500 sq. ft., offer more room for larger households.
  </p>

  <p>
    The indicative prices range from ₹2.16 crore for a 2 BHK apartment to ₹4.60 crore for a 4 BHK apartment. The final cost may vary depending on the apartment's size, floor level, orientation, and location within the tower. Additional charges, such as applicable taxes, registration fees, parking charges, and maintenance deposits, should also be checked with the developer.
  </p>

  <p>
    When comparing apartment options at Sobha Park City, buyers should consider both the super built-up area and the estimated carpet area. Super built-up area includes a proportionate share of common areas, whereas carpet area represents the usable floor area within the apartment, subject to the applicable definition. Reviewing the detailed floor plans can help buyers understand room dimensions, circulation space, and the practical usability of each configuration.
  </p>
</div>
      </div>
    </section>
  );
}