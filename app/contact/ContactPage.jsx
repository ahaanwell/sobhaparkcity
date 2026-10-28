import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const PHONE = "+918317452005";
const PHONE_DISPLAY = "+91 83174 52005";
const WHATSAPP_LINK =
  "https://wa.me/918317452005?text=Hi!%20I%27m%20Interested%20In%20Sobha%20Parkcity.%20Please%20Share%20Details.";
const MAP_EMBED_URL = "https://www.google.com/maps?q=Hennur+Main+Road,+Bengaluru,+Karnataka&output=embed";

const contactCards = [
  {
    icon: FaWhatsapp,
    title: "Message on WhatsApp",
    text: "Send us a quick note",
    href: WHATSAPP_LINK,
    external: true,
  },
  {
    icon: FaPhoneAlt,
    title: "Speak to an Advisor",
    text: PHONE_DISPLAY,
    href: `tel:${PHONE}`,
  },
  {
    icon: FaMapMarkerAlt,
    title: "Project Site",
    text: "Hennur Main Road, North Bangalore, Karnataka",
    href: "/location",
  },
];

const steps = [
  ["Choose how to contact us", "Use the enquiry form, call, or WhatsApp to ask about Sobha Parkcity."],
  ["Tell us what you are looking for", "Share your preferred apartment configuration and the information you would like to receive."],
  ["Get a response to your enquiry", "Ask about reported pricing, plans, brochure availability or project details."],
  ["Arrange a visit if available", "Contact us to discuss a site visit. Confirm the current project status, exact address and visit arrangements before travelling."],
];

const requests = [
  [<IntLink key="p" href="/price">Price sheet</IntLink>, "Base price and a breakdown of extra charges for 2, 3 and 4 BHK homes"],
  [<IntLink key="f" href="/floor-plan">Floor plans</IntLink>, "Unit layouts for each apartment type"],
  [<IntLink key="m" href="/master-plan">Master plan</IntLink>, "How the proposed towers, open areas and roads are planned across the approximately 50-acre site"],
  [<IntLink key="a" href="/amenities">Amenities list</IntLink>, "Planned clubhouse, sports and leisure facilities"],
  ["Brochure", "The project brochure with key highlights"],
  ["Payment and loan questions", "Ask which payment details or lender information are currently available; confirm terms with the developer and lender"],
];

function ContactPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Contact"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Contact Sobha Parkcity, Hennur Main Road
          </h1>

          <p className="mt-6 text-gray-800 text-center max-w-3xl mx-auto leading-7">
            Looking for information about <IntLink href="/"><strong>Sobha Parkcity</strong></IntLink>, the proposed apartment development on <IntLink href="/location"><strong>Hennur Main Road in North Bangalore</strong></IntLink>? Call, send a WhatsApp message, or submit the form to ask about reported <IntLink href="/price"><strong>prices</strong></IntLink>, <IntLink href="/floor-plan"><strong>1, 2, 3 and 4 BHK floor plans</strong></IntLink>, or available project materials. Details may change; verify current information with official project documents.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactCards.map(({ icon: Icon, title, text, href, external }) => (
              <a
                key={title}
                href={href}
                {...(external ? { target: "_blank", rel: "nofollow noopener noreferrer" } : {})}
                className="flex flex-col items-center text-center gap-2 p-6 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.15)] hover:shadow-md transition"
              >
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white text-xl">
                  <Icon />
                </span>
                <span className="font-semibold text-gray-800">{title}</span>
                <span className="text-sm text-gray-600">{text}</span>
              </a>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800">
              How It Works
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-gray-800">
              {steps.map(([title, text]) => (
                <li key={title}>
                  <strong>{title}:</strong> {text}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 flex flex-col lg:flex-row gap-6 items-stretch">
            <LeadForm />
            <div className="flex-1 min-h-95 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 380 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map showing Hennur Main Road in North Bangalore"
              />
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            The map shows the Hennur Main Road area and is not a verified project entrance or site pin. Confirm the current address and visit arrangements before travelling. Form submissions are handled according to our{" "}
            <IntLink href="/privacy-policy"><strong>Privacy Policy</strong></IntLink>.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Sobha Parkcity information you can request
              </h2>
              <p className="mt-4 text-gray-800">
                Current website information describes a proposed development of approximately <strong>50 acres</strong>, with <strong>12 blocks, 24 wings</strong> and more than <strong>4,400 apartments</strong>. Reported homes include <strong>1, 2, 3 and 4 BHK</strong> configurations. These details, along with indicative prices and the reported possession schedule, require confirmation. You can ask about:
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse text-left text-gray-800">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 font-semibold">Request</th>
                      <th className="border border-gray-300 px-4 py-3 font-semibold">What You Receive</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map(([request, detail], i) => (
                      <tr key={i}>
                        <td className="border border-gray-300 px-4 py-3 font-medium">{request}</td>
                        <td className="border border-gray-300 px-4 py-3">{detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Planning a site visit
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-800">
                <li>Confirm that a visit is currently available and verify the exact project address before setting out.</li>
                <li>Check your regular routes to work, schools and other destinations at the times you expect to travel.</li>
                <li>Ask for written details about carpet area, parking, maintenance, pricing and payment terms.</li>
                <li>Check the latest project status and approvals with official sources before making a booking decision.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Verify project information before proceeding
              </h2>
              <p className="mt-4 text-gray-800">
                Prices, apartment details, availability and timelines may change. Before paying a booking amount, check the project on the <ExtLink href="https://rera.karnataka.gov.in/"><strong>Karnataka RERA portal</strong></ExtLink> and obtain the applicable price, specifications and payment terms in writing from the developer. Read our <IntLink href="/disclaimer"><strong>project disclaimer</strong></IntLink> and compare other <IntLink href="/bangalore"><strong>Sobha projects in Bangalore</strong></IntLink> if you are still researching.
              </p>
              <p className="mt-4 text-sm text-gray-600">
                This is an independent project information website, not the official website of Sobha Limited or Sobha Group.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ContactPage;
