import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

function BangalorePage() {
  return (
    <main className="w-full bg-white px-4 md:px-0">
      <PageHero title="Sobha Projects in Bangalore" />
      <article className="mx-auto max-w-5xl py-10 text-gray-800">
        <header className="mb-10">
          <h1 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
            5 Sobha Projects in Bangalore to Explore
          </h1>
          <p className="mt-5 leading-7">
            Looking for a Sobha home or residential plot in Bengaluru? This
            guide brings together reported details for five developments:
            Sobha Liora, Sobha One World, Sobha Neopolis, Sobha Sacred Grove
            by the Lake and Sobha Victoria Park. The list includes apartments
            as well as a plotted development near Malur, so compare like with
            like. Project specifications, prices, approvals and possession
            timelines below are based on supplied information and should be
            confirmed against current official documents.
          </p>
          <p className="mt-4 leading-7">
            If you are specifically researching{" "}
            <IntLink href="/"><strong>Sobha Park City</strong></IntLink>, the
            proposed apartment development on <strong>Hennur Main Road</strong>,
            see its <IntLink href="/about"><strong>project overview</strong></IntLink>,{" "}
            <IntLink href="/price"><strong>reported price information</strong></IntLink>{" "}
            and <IntLink href="/floor-plan"><strong>apartment plans</strong></IntLink>.
          </p>
        </header>

        <nav aria-label="Sobha projects in Bangalore" className="mb-10 rounded-lg border border-gray-200 p-5">
          <h2 className="text-lg font-semibold text-gray-900">Projects covered</h2>
          <ol className="mt-3 grid list-decimal gap-2 pl-6 sm:grid-cols-2">
            <li><a className="underline hover:text-primary" href="#sobha-liora">Sobha Liora</a></li>
            <li><a className="underline hover:text-primary" href="#sobha-one-world">Sobha One World</a></li>
            <li><a className="underline hover:text-primary" href="#sobha-neopolis">Sobha Neopolis</a></li>
            <li><a className="underline hover:text-primary" href="#sobha-sacred-grove">Sobha Sacred Grove by the Lake</a></li>
            <li><a className="underline hover:text-primary" href="#sobha-victoria-park">Sobha Victoria Park</a></li>
          </ol>
        </nav>

        <section aria-labelledby="sobha-project-list" className="mb-12">
          <h2 id="sobha-project-list" className="mb-6 text-xl font-semibold text-gray-900 md:text-2xl">
            Compare the five developments
          </h2>
          <div className="space-y-8">
            <section id="sobha-liora" aria-labelledby="sobha-liora-heading" className="scroll-mt-6 rounded-xl border border-gray-200 p-5 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Project 1</p>
              <h3 id="sobha-liora-heading" className="mt-1 text-xl font-bold text-gray-900 md:text-2xl">Sobha Liora</h3>
              <p className="mt-3 leading-7">
                <a href="https://www.sobhaliora.co/"><b>Sobha Liora</b></a> is described in the supplied information as a luxury apartment development in Immadihalli, Whitefield. The reported pre-launch proposal includes four towers and a mix of three-bedroom layouts.
              </p>
              <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Location</dt><dd className="mt-1 font-semibold text-gray-900">Immadihalli, Whitefield, Bangalore</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Developer</dt><dd className="mt-1 font-semibold text-gray-900">Sobha Group</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Project type and status</dt><dd className="mt-1 font-semibold text-gray-900">Luxury residential apartments; pre-launch reported</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Land area and open space</dt><dd className="mt-1 font-semibold text-gray-900">Approximately 7 acres; 80% open space reported</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Homes</dt><dd className="mt-1 font-semibold text-gray-900">Approximately 420 units</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Configurations</dt><dd className="mt-1 font-semibold text-gray-900">3, 3.5 and 4 BHK apartments</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Towers and floors</dt><dd className="mt-1 font-semibold text-gray-900">4 towers; 2 basements + ground + 17 floors</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Starting price</dt><dd className="mt-1 font-semibold text-gray-900">On request</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Possession</dt><dd className="mt-1 font-semibold text-gray-900">December 2030 reported</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Approvals</dt><dd className="mt-1 font-semibold text-gray-900">RERA and BBMP approval reported; verify independently</dd></div>
              </dl>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                The launch stage, approvals, apartment inventory and possession schedule should be checked in current official records and project documents before making a decision.
              </p>
            </section>

            <section id="sobha-one-world" aria-labelledby="sobha-one-world-heading" className="scroll-mt-6 rounded-xl border border-gray-200 p-5 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Project 2</p>
              <h3 id="sobha-one-world-heading" className="mt-1 text-xl font-bold text-gray-900 md:text-2xl">Sobha One World</h3>
              <p className="mt-3 leading-7">
                <a href="https://www.sobhaoneworlds.in/"><b>Sobha One World</b></a> is presented as a large, themed apartment development off Hoskote in East Bangalore, opposite Hoskote Toll Plaza. Supplied information describes several apartment configurations and a proposed high-rise community.
              </p>
              <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Location</dt><dd className="mt-1 font-semibold text-gray-900">Off Hoskote, East Bangalore</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Land area</dt><dd className="mt-1 font-semibold text-gray-900">Approximately 350 acres</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Landmark and metro</dt><dd className="mt-1 font-semibold text-gray-900">Opposite Hoskote Toll Plaza; Kadugudi–Whitefield Metro Station listed</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Project type</dt><dd className="mt-1 font-semibold text-gray-900">Luxury themed apartments</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Configurations</dt><dd className="mt-1 font-semibold text-gray-900">1, 2, 3 and 4 BHK apartments</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Homes</dt><dd className="mt-1 font-semibold text-gray-900">3,484 Vaastu-aligned units reported</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Tower structure</dt><dd className="mt-1 font-semibold text-gray-900">3 basements + ground floor + 46 floors</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Starting price</dt><dd className="mt-1 font-semibold text-gray-900">₹1.09 crore onwards reported</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Possession</dt><dd className="mt-1 font-semibold text-gray-900">2031 onwards, tentative</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">RERA details supplied</dt><dd className="mt-1 font-semibold text-gray-900">Status described as awaiting approval; a registration number is also provided</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Registration number supplied</dt><dd className="mt-1 font-semibold text-gray-900">PRM/KA/RERA/1250/304/PR/080526/008634</dd></div>
              </dl>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                The supplied RERA status conflicts with the supplied registration number. This page does not determine whether the number is valid or belongs to this project. Verify the project name, promoter and current registration directly on the Karnataka RERA portal before relying on either claim.
              </p>
            </section>

            <section id="sobha-neopolis" aria-labelledby="sobha-neopolis-heading" className="scroll-mt-6 rounded-xl border border-gray-200 p-5 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Project 3</p>
              <h3 id="sobha-neopolis-heading" className="mt-1 text-xl font-bold text-gray-900 md:text-2xl">Sobha Neopolis</h3>
              <p className="mt-3 leading-7">
                Sobha Neopolis is described as a Greek-inspired residential apartment project on Panathur Road, off Marathahalli–ORR. The supplied details describe 19 high-rise towers and a mix of apartment homes.
              </p>
              <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Developer</dt><dd className="mt-1 font-semibold text-gray-900">Sobha Limited</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Location</dt><dd className="mt-1 font-semibold text-gray-900">Panathur Road, off Marathahalli–ORR, Bengaluru 560087</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Project type and theme</dt><dd className="mt-1 font-semibold text-gray-900">Luxury residential apartments; Greek-inspired architecture</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Land area</dt><dd className="mt-1 font-semibold text-gray-900">25.86 acres</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Homes and towers</dt><dd className="mt-1 font-semibold text-gray-900">1,875 apartments; 19 towers</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Tower structure</dt><dd className="mt-1 font-semibold text-gray-900">2 basements + ground + 18 floors</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Open space</dt><dd className="mt-1 font-semibold text-gray-900">Approximately 78% reported</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Starting price</dt><dd className="mt-1 font-semibold text-gray-900">₹95 lakh reported</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Project status</dt><dd className="mt-1 font-semibold text-gray-900">New launch reported</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Possession</dt><dd className="mt-1 font-semibold text-gray-900">December 2027 reported</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">RERA number supplied</dt><dd className="mt-1 font-semibold text-gray-900">PRM/KA/RERA/1251/446/PR/200923/006269</dd></div>
              </dl>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Price, launch status, open-space figures, possession and registration information are supplied details, not independently verified offers or guarantees. Check current RERA disclosures and the relevant unit documents.
              </p>
            </section>

            <section id="sobha-sacred-grove" aria-labelledby="sobha-sacred-grove-heading" className="scroll-mt-6 rounded-xl border border-gray-200 p-5 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Project 4</p>
              <h3 id="sobha-sacred-grove-heading" className="mt-1 text-xl font-bold text-gray-900 md:text-2xl">Sobha Sacred Grove by the Lake</h3>
              <p className="mt-3 leading-7">
                Sobha Sacred Grove by the Lake is described as a plotted development in Chikkathirupathi, Malur. As a plot project, compare its plot dimensions, title and infrastructure documents with apartment projects separately.
              </p>
              <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Developer</dt><dd className="mt-1 font-semibold text-gray-900">Sobha Limited</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Location</dt><dd className="mt-1 font-semibold text-gray-900">Chikkathirupathi, Malur</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Project type</dt><dd className="mt-1 font-semibold text-gray-900">Residential plots</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Land area</dt><dd className="mt-1 font-semibold text-gray-900">26 acres</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Total plots</dt><dd className="mt-1 font-semibold text-gray-900">388 plots reported</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Plot sizes</dt><dd className="mt-1 font-semibold text-gray-900">1,200, 1,500 and 2,400 sq. ft.</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Starting price</dt><dd className="mt-1 font-semibold text-gray-900">₹83.98 lakh reported</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">RERA number supplied</dt><dd className="mt-1 font-semibold text-gray-900">PRM/KA/RERA/1265/347/PR/020226/008445</dd></div>
              </dl>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                The supplied location is Malur, outside Bengaluru city. Confirm the exact project boundary, plot availability, infrastructure scope, applicable approvals and registration details with official documents.
              </p>
            </section>

            <section id="sobha-victoria-park" aria-labelledby="sobha-victoria-park-heading" className="scroll-mt-6 rounded-xl border border-gray-200 p-5 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Project 5</p>
              <h3 id="sobha-victoria-park-heading" className="mt-1 text-xl font-bold text-gray-900 md:text-2xl">Sobha Victoria Park</h3>
              <p className="mt-3 leading-7">
                Sobha Victoria Park is described as a residential apartment development off Hennur Road. The reported proposal includes two- and three-bedroom homes in a low-rise, multi-tower community.
              </p>
              <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Location</dt><dd className="mt-1 font-semibold text-gray-900">Off Hennur Road, Bangalore</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Developer</dt><dd className="mt-1 font-semibold text-gray-900">Sobha Group</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Project type and status</dt><dd className="mt-1 font-semibold text-gray-900">Residential development; under construction reported</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Land area</dt><dd className="mt-1 font-semibold text-gray-900">6.03 acres</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Configurations</dt><dd className="mt-1 font-semibold text-gray-900">2 and 3 BHK apartments</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Apartment sizes</dt><dd className="mt-1 font-semibold text-gray-900">865–1,562 sq. ft.</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Homes and towers</dt><dd className="mt-1 font-semibold text-gray-900">300 apartments; 5 towers</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Tower height</dt><dd className="mt-1 font-semibold text-gray-900">9 floors per tower</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Starting price</dt><dd className="mt-1 font-semibold text-gray-900">₹1.29 crore reported</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">Possession</dt><dd className="mt-1 font-semibold text-gray-900">December 2027 reported</dd></div>
                <div className="rounded-lg bg-gray-50 p-4"><dt className="text-sm text-gray-600">RERA number supplied</dt><dd className="mt-1 font-semibold text-gray-900">PRM/KA/RERA/1251/309/PR/310322/004800</dd></div>
              </dl>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Confirm construction progress, unit availability, current pricing, possession commitments and the registration details directly with official project records.
              </p>
            </section>
          </div>
        </section>

        <section aria-labelledby="choosing-sobha-project" className="mb-12">
          <h2 id="choosing-sobha-project" className="mb-4 text-xl font-semibold text-gray-900 md:text-2xl">
            How to compare Sobha properties in Bengaluru
          </h2>
          <p className="leading-7">
            Start with the property type and neighbourhood that fit your needs:
            an apartment near your daily destinations may suit a different
            household than a plotted home outside the city. Compare the total
            purchase cost, usable area, layout, travel routes and confirmed
            amenities. For projects at an early stage, independently check
            registration and approvals before paying any amount.
          </p>
          <p className="mt-4 leading-7">
            Use the{" "}
            <IntLink href="/location"><strong>Sobha Park City location guide</strong></IntLink>{" "}
            to explore Hennur, or review the proposed project’s{" "}
            <IntLink href="/master-plan"><strong>master plan details</strong></IntLink>.
            The site’s{" "}
            <IntLink href="/disclaimer"><strong>project disclaimer</strong></IntLink>{" "}
            explains why reported prices and specifications should be checked
            against official records.
          </p>
        </section>

        <section aria-labelledby="bangalore-sobha-faq">
          <h2 id="bangalore-sobha-faq" className="mb-5 text-xl font-semibold text-gray-900 md:text-2xl">
            Frequently asked questions about Sobha projects in Bangalore
          </h2>
          <div className="space-y-5">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900">Which five Sobha projects are included in this Bangalore guide?</h3>
              <p className="mt-2 leading-7">The guide covers Sobha Liora, Sobha One World, Sobha Neopolis, Sobha Sacred Grove by the Lake and Sobha Victoria Park. It is a selected comparison, not an independently ranked list.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900">Are all five projects apartment developments?</h3>
              <p className="mt-2 leading-7">No. Sobha Sacred Grove by the Lake is described in the supplied information as a plotted development in Malur. The other four projects are described as apartment or residential developments.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900">Are the prices and possession dates confirmed?</h3>
              <p className="mt-2 leading-7">No. Prices and possession timelines on this page are reported details provided for comparison. Confirm current unit-specific pricing, charges and contractual possession dates with the relevant official project documents.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900">Is Sobha One World&apos;s RERA status confirmed?</h3>
              <p className="mt-2 leading-7">The supplied information is inconsistent: it describes the status as awaiting approval while also providing a RERA registration number. Verify the project name, promoter and current registration directly with Karnataka RERA before relying on either claim.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900">Where can I find information about Sobha Park City?</h3>
              <p className="mt-2 leading-7">Sobha Park City is proposed on Hennur Main Road in North Bangalore. See the project overview, location, price and floor-plan pages on this website, and verify all current details with official documents.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900">How should I compare these Sobha properties?</h3>
              <p className="mt-2 leading-7">Compare location, property type, total cost, layout or plot size, approvals, access to services, construction progress and contract terms. Check official records and visit the area where possible before making a purchase decision.</p>
            </div>
          </div>
        </section>

        <p className="mt-8 text-sm leading-6 text-gray-600">
          Details on this page are informational and may be updated. Sobha
          Parkcity information is published independently and is not an
          official Sobha Limited website. For company information, consult{" "}
          <ExtLink href="https://www.sobha.com/">Sobha’s official website</ExtLink>.
        </p>
      </article>
    </main>
  );
}

export default BangalorePage;
