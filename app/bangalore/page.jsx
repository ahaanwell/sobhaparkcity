import BlogSection from "@/components/BlogsSection";
import { DEFAULT_IMAGE_ALT, IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import BangalorePage from "./BangalorePage";

const PATH = "/bangalore";
const TITLE = "5 Sobha Projects in Bangalore | Liora, One World & More";
const DESCRIPTION =
  "Explore five Sobha projects in Bangalore: Liora, One World, Neopolis, Sacred Grove by the Lake and Victoria Park. Compare locations, home types, reported prices and project details.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha projects in Bangalore",
    "top 5 Sobha projects Bangalore",
    "Sobha Liora Whitefield",
    "Sobha One World Hoskote",
    "Sobha Neopolis Panathur Road",
    "Sobha Sacred Grove by the Lake",
    "Sobha Victoria Park Hennur Road",
    "Sobha apartments in Bengaluru",
    "Sobha plots near Malur",
    "Sobha Park City Hennur Main Road",
  ],
  images: [{ ...IMAGES.banner, alt: DEFAULT_IMAGE_ALT }],
});

const schema = pageSchema({
  path: PATH,
  name: "Sobha Projects in Bangalore",
  title: TITLE,
  description: DESCRIPTION,
  extra: [
    {
      "@type": "FAQPage",
      "@id": "https://www.sobhaparkcity.com/bangalore#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which five Sobha projects are included in this Bangalore guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The guide covers Sobha Liora, Sobha One World, Sobha Neopolis, Sobha Sacred Grove by the Lake and Sobha Victoria Park. It is a selected comparison, not an independently ranked list.",
          },
        },
        {
          "@type": "Question",
          name: "Are all five projects apartment developments?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Sobha Sacred Grove by the Lake is described in the supplied information as a plotted development in Malur. The other four projects are described as apartment or residential developments.",
          },
        },
        {
          "@type": "Question",
          name: "Are the prices and possession dates confirmed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Prices and possession timelines on this page are reported details provided for comparison. Confirm current unit-specific pricing, charges and contractual possession dates with the relevant official project documents.",
          },
        },
        {
          "@type": "Question",
          name: "Is Sobha One World's RERA status confirmed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The supplied information is inconsistent: it describes the status as awaiting approval while also providing a RERA registration number. Verify the project name, promoter and current registration directly with Karnataka RERA before relying on either detail.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find information about Sobha Park City?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sobha Park City is proposed on Hennur Main Road in North Bangalore. See the project overview, location, price and floor-plan pages on this website, and verify all current details with official documents.",
          },
        },
        {
          "@type": "Question",
          name: "How should I compare these Sobha properties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Compare location, property type, total cost, layout or plot size, approvals, access to services, construction progress and contract terms. Check official records and visit the area where possible before making a purchase decision.",
          },
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Selected Sobha Projects in Bangalore",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Sobha Liora",
          url: "https://www.sobhaparkcity.com/bangalore#sobha-liora",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sobha One World",
          url: "https://www.sobhaparkcity.com/bangalore#sobha-one-world",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Sobha Neopolis",
          url: "https://www.sobhaparkcity.com/bangalore#sobha-neopolis",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Sobha Sacred Grove by the Lake",
          url: "https://www.sobhaparkcity.com/bangalore#sobha-sacred-grove",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Sobha Victoria Park",
          url: "https://www.sobhaparkcity.com/bangalore#sobha-victoria-park",
        },
      ],
    },
    {
      "@type": "City",
      name: "Bangalore",
      alternateName: "Bengaluru",
      sameAs: "https://en.wikipedia.org/wiki/Bangalore",
      containedInPlace: { "@type": "State", name: "Karnataka" },
    },
  ],
});

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <BangalorePage />
      <BlogSection />
    </>
  );
}
