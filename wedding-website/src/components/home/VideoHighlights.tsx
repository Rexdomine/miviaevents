export default function VideoHighlights() {
  const videoIds = [
    "diui1v56Bgs",
    "gs2cBwh92c0",
    "2_WblhbDjO8",
    "xH4vpx-cbYM",
    "DYiTCOndISE"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Wedding Highlights</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {videoIds.map((id) => (
            <div key={id} className="w-full relative rounded-xl overflow-hidden shadow-lg bg-black aspect-[9/16]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1`}
                title={`Wedding Highlight ${id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
