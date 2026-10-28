/* eslint-disable react/no-unescaped-entities */

import GalleryCleint from "./GalleryClient";

export default function GallerySection() {

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="w-full bg-white pt-14 px-3 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="gallery-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Sobha Parkcity Gallery
        </h2>

        <div className="w-full h-px bg-gray-200 mb-6" />
        <div className="space-y-6 text-gray-800 mb-6">
  <p>
    The <b>Sobha Parkcity gallery</b> can help prospective buyers understand the proposed residential development through project images, architectural visuals, apartment layouts, and master-plan illustrations. These visual materials can provide an initial impression of the towers, shared spaces, and overall design approach.
  </p>
</div>
<GalleryCleint/>
        
        <div className="space-y-6 text-gray-800 mt-6">
  <h3 className="text-xl font-bold">What to Look for in the Sobha Parkcity Gallery</h3>

  <p>
    <strong>Exterior views:</strong> Architectural images can help buyers understand the proposed tower design, building proportions, and overall appearance. Rendered images should be treated as illustrations unless they are confirmed to represent completed construction.
  </p>

  <p>
    <strong>Apartment interiors:</strong> Interior visuals can provide an idea of the proposed living and dining areas, bedroom arrangements, kitchen design, and balcony placement. Buyers should compare these illustrations with the actual floor plans to understand the available space.
  </p>

  <p>
    <strong>Master plan and open spaces:</strong> Site-layout images can help explain the proposed arrangement of residential towers, landscaped areas, and shared facilities. For a development reported to cover approximately 50 acres, reviewing the layout can help buyers understand the relationship between buildings and common areas.
  </p>

  <p>
    <strong>Clubhouse and amenities:</strong> Images of the proposed clubhouse and recreational spaces may help buyers assess the intended design and use of shared facilities. The final amenities list should be checked separately to confirm which features are included.
  </p>

  <p>
    <strong>Location and project progress:</strong> Any location maps or construction photographs should be reviewed for their date and source. This is particularly important because the project's current status requires confirmation.
  </p>

  <p>
    The Sobha Parkcity gallery should be used alongside the approved master plan, floor plans, and official specifications rather than as the sole basis for a purchase decision. Comparing the visual material with documented details can help buyers develop a clearer understanding of the proposed homes and shared facilities.
  </p>
</div>
      </div>
    </section>
  );
}