import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import PricePage from "./PricePage";

const PATH = "/price";
const TITLE = "Sobha Park City Price | 1–4 BHK Apartments in Hennur";
const DESCRIPTION =
  "View reported Sobha Park City pricing for 1, 2, 3 and 4 BHK apartments on Hennur Main Road, North Bangalore. The supplied 1 BHK starting price is ₹1.1 crore; request a current cost sheet and confirm all charges.";

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
  ["What is the reported starting price of Sobha Park City?", "The website's price table lists an indicative starting price of ₹1.1 crore for a 1 BHK apartment. Confirm the current price, unit availability and applicable charges with the developer."],
  ["Where can I check the prices for other Sobha Park City apartments?", "The website contains differing indicative figures for some configurations. Request a current, unit-specific written cost sheet from the developer and confirm the total price and applicable charges before proceeding."],
  ["What apartment sizes are listed for Sobha Park City?", "The website's price table reports sizes from 721 sq. ft. for 1 BHK to 2,600 sq. ft. for 4 BHK. Verify approved plans, area definitions and dimensions for the specific apartment."],
  ["What additional charges may apply to the base price?", "The final cost may include applicable taxes, stamp duty, registration, parking, floor-rise charges, maintenance deposits and other items. Ask for an itemised, current cost sheet."],
  ["What is the booking amount and payment schedule?", "The latest booking amount and payment schedule should be confirmed directly with the developer. Review all payment milestones and terms in writing before paying."],
  ["When is possession planned for Sobha Park City?", "Possession is currently stated as planned for 2031. Verify the binding completion and possession dates in the project's official documents and agreement for sale."],
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
