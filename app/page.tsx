import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-20 text-center" id="home">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">Aden Guo</h1>
      <p className="text-neutral-400 text-lg max-w-2xl mx-auto text-lg">
        Engineer that 
      </p>
      </section>

      {/* About */}
      <section id="about" className="max-w-3xl mx-auto px-6 py-50 text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-neutral-400 text-lg max-w-2xl mx-auto text-lg">
        A Geomatics Engineering student passionate about building tools that blend geospatial data, web technologies, and user-friendly design.
        I enjoy turning complex data into interactive apps and visualizations that people can actually use.
      </p>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-50">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Public Washroom Finder"
            description="Flask + Leaflet app to help users locate the nearest public restrooms in Calgary."
            image="/placeholder.png"
          />
          <ProjectCard
            title="Disc Golf Mapping"
            description="Drone photogrammetry project for mapping disc golf courses using GNSS & ArcGIS."
            image="/placeholder.png"
          />        
        </div>
      </section>

      {/* Contact */}
        <section id="contact" className="max-w-xl mx-auto px-6 py-50 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto text-lg">
            Want to collaborate or just say hi? Reach out below.
          </p>
        <a
          href="mailto:aden.guowe@email.com"
          className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-neutral-200 transition"
        >
          Email Me
        </a>
      </section>  

      {/* Skills / Tools */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Skills & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-white text-sm">
          <div className="bg-neutral-800 py-4 px-6 rounded-lg">JavaScript</div>
          <div className="bg-neutral-800 py-4 px-6 rounded-lg">TypeScript</div>
          <div className="bg-neutral-800 py-4 px-6 rounded-lg">React</div>
          <div className="bg-neutral-800 py-4 px-6 rounded-lg">Next.js</div>
          <div className="bg-neutral-800 py-4 px-6 rounded-lg">Tailwind CSS</div>
          <div className="bg-neutral-800 py-4 px-6 rounded-lg">Python</div>
          <div className="bg-neutral-800 py-4 px-6 rounded-lg">MATLAB</div>
          <div className="bg-neutral-800 py-4 px-6 rounded-lg">ArcGIS</div>
          <div className="bg-neutral-800 py-4 px-6 rounded-lg">Leaflet.js</div>
          <div className="bg-neutral-800 py-4 px-6 rounded-lg">Flask</div>
          <div className="bg-neutral-800 py-4 px-6 rounded-lg">PostgreSQL</div>
          <div className="bg-neutral-800 py-4 px-6 rounded-lg">Git & GitHub</div>
        </div>
      </section>
    </main>
  );
}
