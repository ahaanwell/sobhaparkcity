import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const LAST_UPDATED = "28 October 2026";

const reminders = [
  "This is an independent project information website, not the developer’s official website.",
  "Project figures, prices, plans and dates are reported details, not guaranteed offers or commitments.",
  "Check current approvals, registration and unit-specific terms with official sources before paying.",
  "Images and illustrations may not show the final constructed project.",
];

export default function DisclaimerPage() {
  return (
    <main className="w-full bg-white px-4 md:px-0">
      <PageHero title="Sobha Parkcity Disclaimer" />
      <article className="max-w-5xl mx-auto py-10 text-gray-800">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Sobha Parkcity Project Information Disclaimer
          </h1>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="mt-5 leading-7">
            This disclaimer explains how to use the information on{" "}
            <IntLink href="/"><strong>SobhaParkcity.com</strong></IntLink>, an
            independent website about the proposed <strong>Sobha Parkcity</strong>{" "}
            residential development on <strong>Hennur Main Road, North
            Bangalore</strong>. It applies to project descriptions, reported
            prices, apartment details, images, location information and
            enquiry content published on this site. Please also read our{" "}
            <IntLink href="/privacy-policy"><strong>Privacy Policy</strong></IntLink>.
          </p>
        </header>

        <section
          aria-labelledby="disclaimer-summary"
          className="mb-10 border-l-4 border-primary bg-gray-50 px-5 py-4"
        >
          <h2 id="disclaimer-summary" className="text-xl font-semibold text-gray-900">
            Important points at a glance
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            {reminders.map((reminder) => (
              <li key={reminder}>{reminder}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="independent-site" className="mb-10">
          <h2 id="independent-site" className="text-xl md:text-2xl font-semibold mb-4">
            Independent project information website
          </h2>
          <p className="leading-7">
            <strong>SobhaParkcity.com is not operated by or the official
            website of Sobha Limited, Sobha Group, or the project promoter.</strong>{" "}
            The project name and developer references are used to identify the
            subject of this information. For company information, consult the{" "}
            <ExtLink href="https://www.sobha.com/">
              official Sobha website
            </ExtLink>. Any enquiry submitted through this site is an
            information request and does not, by itself, create a booking or
            establish a relationship with the developer.
          </p>
        </section>

        <section aria-labelledby="reported-details" className="mb-10">
          <h2 id="reported-details" className="text-xl md:text-2xl font-semibold mb-4">
            Reported project details may change
          </h2>
          <p className="mb-4 leading-7">
            This website describes Sobha Parkcity as a proposed apartment
            development on Hennur Main Road. Project information presented here
            includes a site area of approximately <strong>50 acres</strong>,
            more than <strong>4,400 apartments</strong>, configurations from{" "}
            <strong>1 BHK to 4 BHK</strong>, and an indicative starting price
            of <strong>₹1.1 crore onwards</strong>. These are reported details
            and are not independently guaranteed. Unit counts, sizes,
            specifications, prices, availability, approvals and schedules may
            be revised or may differ from official project documents.
          </p>
          <p className="leading-7">
            For more context, review the{" "}
            <IntLink href="/about"><strong>project overview</strong></IntLink>,{" "}
            <IntLink href="/master-plan"><strong>master plan information</strong></IntLink>,{" "}
            <IntLink href="/floor-plan"><strong>floor plan details</strong></IntLink>{" "}
            and <IntLink href="/price"><strong>pricing information</strong></IntLink>.
            If sources differ, the latest applicable registered and approved
            documents should take precedence over this website.
          </p>
        </section>

        <section aria-labelledby="price-and-costs" className="mb-10">
          <h2 id="price-and-costs" className="text-xl md:text-2xl font-semibold mb-4">
            Prices, charges and availability
          </h2>
          <p className="leading-7">
            Any price shown, including the reported starting indication of{" "}
            <strong>₹1.1 crore</strong>, is for general information only and
            may not reflect a current offer for a particular apartment. The
            final price and availability can depend on the selected unit and
            the developer’s current terms. Taxes, registration, parking,
            maintenance deposits and other charges may apply. Request a
            dated, unit-specific written cost sheet and confirm all payment
            terms directly with the authorised seller before making a
            financial commitment.
          </p>
        </section>

        <section aria-labelledby="plans-and-images" className="mb-10">
          <h2 id="plans-and-images" className="text-xl md:text-2xl font-semibold mb-4">
            Plans, images and amenities
          </h2>
          <p className="leading-7">
            Photographs, renderings, maps, floor plans and other visual
            material on this site may be illustrative, indicative or subject
            to change. They should not be treated as a representation that a
            particular finish, view, facility or layout will be delivered.
            Verify the selected apartment’s measurements and specifications
            against its approved plan and written agreement. The amenities
            described online should also be checked against the developer’s
            latest official amenity schedule.
          </p>
        </section>

        <section aria-labelledby="approvals-and-timelines" className="mb-10">
          <h2 id="approvals-and-timelines" className="text-xl md:text-2xl font-semibold mb-4">
            Approvals, RERA status and possession dates
          </h2>
          <p className="mb-4 leading-7">
            A confirmed registration number or approval status should not be
            inferred from the descriptions on this website. Project status
            can change; independently search the{" "}
            <ExtLink href="https://rera.karnataka.gov.in/">
              Karnataka Real Estate Regulatory Authority (K-RERA)
            </ExtLink>{" "}
            records and check the registered project name, promoter and
            disclosures. The possession timeline reported on this site is
            indicative unless confirmed by the applicable official
            registration and agreement.
          </p>
          <p className="leading-7">
            Before paying a booking or expression-of-interest amount, review
            the relevant approvals, land and title documents, registered
            project details, agreement for sale, payment schedule and
            completion date. Consider obtaining advice from an independent
            legal or financial professional if a document or claim is unclear.
            Our{" "}
            <IntLink href="/location"><strong>location guide</strong></IntLink>{" "}
            and <IntLink href="/amenities"><strong>amenities information</strong></IntLink>{" "}
            are for preliminary research and are not substitutes for site
            visits or official records.
          </p>
        </section>

        <section aria-labelledby="no-offer" className="mb-10">
          <h2 id="no-offer" className="text-xl md:text-2xl font-semibold mb-4">
            No offer, contract or professional advice
          </h2>
          <p className="leading-7">
            Website content is provided for general information. It is not an
            offer to sell, an invitation to purchase, a contract, legal advice,
            financial advice or a guarantee of investment returns. Viewing a
            page or submitting an enquiry does not reserve a home, confirm
            eligibility or bind the developer or this website. Any purchase
            should be completed only through the developer’s official process
            and executed documents.
          </p>
        </section>

        <section aria-labelledby="external-sites" className="mb-10">
          <h2 id="external-sites" className="text-xl md:text-2xl font-semibold mb-4">
            External websites and links
          </h2>
          <p className="leading-7">
            Links to third-party websites are included for convenience and
            reference. We do not control or guarantee their content,
            availability, accuracy or privacy practices. Visiting an external
            site is at your discretion; review its terms and policies
            independently.
          </p>
        </section>

        <section aria-labelledby="updates-and-contact">
          <h2 id="updates-and-contact" className="text-xl md:text-2xl font-semibold mb-4">
            Updates and contact
          </h2>
          <p className="leading-7">
            We may revise this disclaimer or update website content as
            information changes. Please check this page again when using the
            site. For questions about the website or to submit a project
            enquiry, use the{" "}
            <IntLink href="/contact"><strong>contact page</strong></IntLink>.
          </p>
        </section>
      </article>
    </main>
  );
}
