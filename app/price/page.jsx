import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import PricePage from "./PricePage";

const PATH = "/price";
const TITLE = "Sobha Park City Price 2026 – Apartment Cost & Price Details";
const DESCRIPTION =
  "Check Sobha Park City price starting at ₹1.10 Cr onwards. Compare 1, 2, 3 & 4 BHK apartment sizes, township amenities, location and pre-launch details.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Park City starting price",
    "Sobha Park City price list",
    "Sobha Park City cost sheet",
    "Sobha Park City 1 BHK price",
    "Sobha Park City 2 BHK price",
    "Sobha Park City 3 BHK price",
    "Sobha Park City 4 BHK price",
    "Sobha Park City apartment price Hennur",
    "Sobha Park City price Hennur Main Road",
    "1 2 3 4 BHK apartment prices North Bangalore",
  ],
  images: [{ ...IMAGES.costSheet, alt: "Reported Sobha Park City apartment pricing and cost sheet for Hennur Main Road" }],
});

const FAQS = [
  ["What is the minimum price of an apartment at Sobha Park City?", "The advertised starting price is ₹1.1 Cr onwards. The development offers four apartment configurations, and buyers should request an individual quotation to know the applicable price for their preferred BHK."],
  ["Does the ₹1.10 Cr starting price apply to all apartment types?", "No. The ₹1.10 Cr onwards figure represents the overall project starting price. The price of an individual apartment depends on the selected configuration and its applicable quotation."],
  ["What is the smallest apartment available in the project?", "The smallest listed configuration is a 1 BHK apartment measuring 721 sq.ft. SBA."],
  ["What are the available sizes for 2 BHK homes?", "The 2 BHK apartments have SBA ranging from 1,200 sq.ft."],
  ["How large are the 3 BHK apartments?", "The 3 BHK category includes apartments measuring between 1,600 and 1,900 sq.ft. SBA."],
  ["What is the SBA of the 4 BHK apartments?", "The largest apartment configuration measures between 2,500 sq.ft. SBA."],
  ["How many residential units are planned in Sobha Park City?", "More than 4,000 apartments are planned across 12 residential towers and blocks with 24 wings."],
  ["How much open space is planned in the township?", "Approximately 80% of the 50-acre project area is planned as open space, with more than 1,000 native trees."],
  ["What is the size of the Sobha Park City clubhouse?", "The planned grand clubhouse measures more than 25,000 sq.ft. and includes a multipurpose hall, banquet hall, mini theatre, library and co-working space."],
  ["When is the formal launch of Sobha Park City?", "The pre-launch opened in November 2026, and the formal project launch is planned for December 2026."],
  ["Is Sobha Park City RERA approved?", "The RERA registration is awaited. Buyers should verify the registration number and applicable project documents once the registration is issued."],
  ["What are the proposed completion and possession dates?", "The project completion is planned for November 2031, and possession is scheduled for December 2031."],
  ["How can I receive the latest apartment quotation?", "Submit your details through the Request Price form on this page and mention whether you are interested in a 1, 2, 3 or 4 BHK apartment. The enquiry team can share the corresponding pricing information."],
];

const schema = pageSchema({ path: PATH, name: "Price", title: TITLE, description: DESCRIPTION, image: IMAGES.costSheet.url, faqs: FAQS });

export default function Page() {
  return (
    <>
      <JsonLd data={schema} />
      <PricePage />
      <BlogSection/>
    </>
  );
}
