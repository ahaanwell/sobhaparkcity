import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const projectDetails = [
  ["Location", "Hennur Main Road, North Bangalore"],
  ["Reported site area", "Approximately 50 acres"],
  ["Proposed scale", "12 blocks and 24 wings"],
  ["Homes", "More than 4,400 apartments reported"],
  ["Configurations", "1, 2, 3 and 4 BHK"],
  ["Reported size range", "Approximately 721–2,600 sq. ft."],
  ["Indicative starting price", "₹1.1 crore onwards"],
  ["Possession timeline", "December 2031 reported; verify officially"],
];

export default function AboutPage() {
  return (
    <main className="w-full bg-white px-4 md:px-0">
      <PageHero title="About Sobha Park City" />
      <article className="max-w-5xl mx-auto py-10 text-gray-800">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            About Sobha Park City on Hennur Main Road
          </h1>
          <p className="mt-5 leading-7">
            <IntLink href="/"><strong>Sobha Park City</strong></IntLink> is a
            proposed apartment development associated in available project
            information with <strong>Sobha Limited</strong>. It is located on{" "}
            <strong>Hennur Main Road in North Bangalore</strong> and is
            described as a large residential community with several apartment
            configurations. This page brings together the reported project
            details and practical points to review before considering a home
            here. <strong>Project plans, prices and timelines can change</strong>;
            confirm them against current documents from the developer and
            relevant authorities.
          </p>
        </header>

        <section aria-labelledby="about-overview" className="mb-10">
          <h2 id="about-overview" className="text-xl md:text-2xl font-semibold mb-4">
            Sobha Park City project overview
          </h2>
          <p className="mb-5 leading-7">
            The project information describes a site of{" "}
            <strong>approximately 50 acres</strong>, planned with{" "}
            <strong>12 blocks and 24 wings</strong>. More than{" "}
            <strong>4,400 apartments</strong> are reported, with a stated
            building structure of{" "}
            <strong>three basements, ground level and 42 floors</strong>. These
            figures provide a broad picture of the proposed development,
            rather than a substitute for approved plans. Refer to the{" "}
            <IntLink href="/master-plan">
              <strong>Sobha Park City master plan</strong>
            </IntLink>{" "}
            and request the latest sanctioned documents to check the final
            layout, unit count and building specifications.
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {projectDetails.map(([label, value]) => (
              <div key={label} className="rounded-lg border border-gray-200 p-4">
                <dt className="text-sm text-gray-600">{label}</dt>
                <dd className="mt-1 font-bold text-gray-900">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            Project facts above are based on information currently presented on
            this website. The final registered project documents take
            precedence if any detail differs.
          </p>
        </section>

        <section aria-labelledby="about-homes" className="mb-10">
          <h2 id="about-homes" className="text-xl md:text-2xl font-semibold mb-4">
            Apartment options and reported pricing
          </h2>
          <p className="mb-4 leading-7">
            The proposed choices range from{" "}
            <strong>1 BHK to 4 BHK apartments</strong>. Reported super built-up
            areas span approximately <strong>721 to 2,600 square feet</strong>,
            giving prospective residents several layouts to compare. Area
            labels and dimensions may vary between sources, so check the
            approved floor plan for the exact apartment, its carpet area and
            room measurements before selecting a configuration.
          </p>
          <p className="leading-7">
            The supplied starting indication is{" "}
            <strong>₹1.1 crore onwards</strong>. Treat this as preliminary
            rather than a confirmed offer: the payable amount
            can depend on the chosen home and applicable charges. See the{" "}
            <IntLink href="/floor-plan">
              <strong>1, 2, 3 and 4 BHK floor plans</strong>
            </IntLink>{" "}
            and <IntLink href="/price"><strong>price details</strong></IntLink>,
            then ask for a current, unit-specific cost sheet covering taxes,
            registration, parking and other charges.
          </p>
        </section>

        <section aria-labelledby="about-location" className="mb-10">
          <h2 id="about-location" className="text-xl md:text-2xl font-semibold mb-4">
            Setting and location in North Bangalore
          </h2>
          <p className="leading-7">
            Hennur Main Road places the proposed development within North
            Bangalore’s network of residential neighbourhoods and urban
            services. A location assessment is most useful when based on the
            journeys a household makes regularly. Check routes and travel
            conditions to work, schools, hospitals and shopping destinations
            at the times you expect to use them. The{" "}
            <IntLink href="/location">
              <strong>Sobha Park City location guide</strong>
            </IntLink>{" "}
            can help with initial research. You can also review reported{" "}
            <IntLink href="/amenities"><strong>amenities</strong></IntLink>,
            nearby schools and hospitals on the homepage; verify distances and
            access points independently before making a decision.
          </p>
        </section>

        <section aria-labelledby="about-developer" className="mb-10">
          <h2 id="about-developer" className="text-xl md:text-2xl font-semibold mb-4">
            Developer information
          </h2>
          <p className="leading-7">
            Available project details identify{" "}
            <strong>Sobha Limited</strong> as the developer associated with{" "}
            <strong>Sobha Park City</strong>. For background on the company,
            visit the{" "}
            <ExtLink href="https://www.sobha.com/">official Sobha website</ExtLink>.
            Separately confirm the promoter name and responsibilities stated
            in the project’s registration and sale documents; general company
            information does not verify project-specific approvals or
            commitments.
          </p>
        </section>

        <section aria-labelledby="about-verification" className="mb-10">
          <h2 id="about-verification" className="text-xl md:text-2xl font-semibold mb-4">
            Approvals, project status and possession
          </h2>
          <p className="mb-4 leading-7">
            The project has been described using{" "}
            <strong>new-launch and pre-launch</strong>
            language, but its current stage and registration details should be
            checked through official records. A confirmed{" "}
            <strong>RERA registration number has not been established</strong>{" "}
            in the information on this page.
            Search the Karnataka RERA portal for the registered project and
            promoter before paying a booking or expression-of-interest amount.
          </p>
          <p className="leading-7">
            <strong>December 2031</strong> is the possession timeline reported
            in the supplied project details; it is not a guarantee. Review the registered
            completion date, approved plans, payment schedule and agreement
            terms, and obtain independent advice where needed. For further
            guidance, read the{" "}
            <IntLink href="/disclaimer">project information disclaimer</IntLink>.
          </p>
        </section>

        <section aria-labelledby="about-next-steps" className="mb-8">
          <h2 id="about-next-steps" className="text-xl md:text-2xl font-semibold mb-4">
            Reviewing Sobha Park City before you decide
          </h2>
          <p className="leading-7">
            Compare the <strong>apartment plan, complete purchase cost, daily
            commute and project documents</strong> against your household’s
            needs. Ask for the
            latest official brochure and cost sheet, and confirm that the
            information matches the specific unit being offered. Use the
            enquiry options below or visit the{" "}
            <IntLink href="/contact"><strong>contact page</strong></IntLink> to
            request available project materials.
          </p>
        </section>

        <div className="border-t border-gray-200 pt-6">
          <DownloadActions />
        </div>
      </article>
    </main>
  );
}
