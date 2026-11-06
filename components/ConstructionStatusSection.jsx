/* eslint-disable react/no-unescaped-entities */

export default function ConstructionStatusSection() {
  return (
    <section
      id="construction-status"
      aria-labelledby="construction-status-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="construction-status-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Sobha Park City Construction Status – November 2026
        </h2>

        <div className="w-full h-px bg-gray-200 mb-6" />
        <div className="space-y-6 text-gray-800">
            <img width={1000} height={664}
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/construction-status.webp"
              alt="Construction Status"
              loading="lazy"
              title="Sobha Park City Construction Status"
            />
  <p>The <strong>Sobha Park City construction status</strong> is currently at the pre-launch stage in November 2026. The pre-launch phase has opened, and the formal project launch is planned for December 2026. Following the launch, the development is expected to progress through site preparation, foundation work, high-rise tower construction, apartment finishing and infrastructure development.</p>

  <p>The proposed construction schedule extends until November 2031, followed by the planned apartment possession in December 2031. Each development stage will contribute towards completing the residential towers, internal infrastructure and common facilities.</p>

  <h3 className="text-xl font-bold">Sobha Park City Construction Timeline</h3>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Development Milestone</th>
          <th className="border border-gray-300 p-3 text-left">Expected Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3">Pre-Launch Opened</td>
          <td className="border border-gray-300 p-3">November 2026</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Formal Project Launch</td>
          <td className="border border-gray-300 p-3">December 2026</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Project Completion</td>
          <td className="border border-gray-300 p-3">November 2031</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Apartment Possession</td>
          <td className="border border-gray-300 p-3">December 2031</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-xl font-bold">Upcoming Construction Activities</h3>

  <p>The development process is expected to begin with site preparation, excavation and foundation work, followed by the construction of residential tower structures. Subsequent stages will include apartment walls, electrical and plumbing installations, flooring, doors, windows and interior finishing.</p>

  <p>Alongside the residential buildings, the project is also expected to include internal roads, landscaped spaces, clubhouse facilities, recreational areas and other common infrastructure. The final development stages will generally involve testing essential building services, completing common areas and preparing apartments for handover.</p>

  <h3 className="text-xl font-bold">Project Completion and Possession</h3>

  <p>Sobha Park City is planned for completion in November 2031, with apartment possession scheduled for December 2031. The construction schedule may progress in different stages across individual towers and facilities. Buyers can follow verified construction updates to understand the development progress and stay informed about the expected completion and handover timeline.</p>
</div>
      </div>
    </section>
  );
}