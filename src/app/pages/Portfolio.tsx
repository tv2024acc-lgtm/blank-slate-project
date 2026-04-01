import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Play, ArrowRight } from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1764312385768-93b8f47250de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGRpZ2l0YWwlMjBhbmltYXRpb24lMjBzY3JlZW58ZW58MXx8fHwxNzczNzQ3ODU3fDA&ixlib=rb-4.1.0&q=80&w=1080";

const projects = [
  {
    id: "1",
    title: "The Last Frame",
    category: "Documentary",
    year: "2025",
    client: "National Media",
    img: "https://images.unsplash.com/photo-1761370980993-3ec8c23709fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZGlyZWN0b3IlMjBjbGFwcGVyYm9hcmQlMjBtb3ZpZSUyMHNldHxlbnwxfHx8fDE3NzM3NDc4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "2",
    title: "Neon Pulse",
    category: "Music Video",
    year: "2025",
    client: "Solar Records",
    img: "https://images.unsplash.com/photo-1765344550212-a3b963d63c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHZpZGVvJTIwcHJvZHVjdGlvbiUyMGNvbmNlcnQlMjBzdGFnZSUyMGxpZ2h0c3xlbnwxfHx8fDE3NzM3NDc4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "3",
    title: "Skyward Bound",
    category: "Drone",
    year: "2024",
    client: "Aerial Co",
    img: "https://images.unsplash.com/photo-1761583780469-2f206ec7b270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMHZpZGVvZ3JhcGh5JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3Mzc0Nzg1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "4",
    title: "Brand Horizon",
    category: "Commercial",
    year: "2025",
    client: "NovaBrand",
    img: "https://images.unsplash.com/photo-1664817550969-5e76adc4a3fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYWR2ZXJ0aXNpbmclMjB2aWRlbyUyMHNob290JTIwc3R1ZGlvJTIwbGlnaHRzfGVufDF8fHx8MTc3Mzc0Nzg2MHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "5",
    title: "Soul & Stories",
    category: "Documentary",
    year: "2024",
    client: "PBS Digital",
    img: "https://images.unsplash.com/photo-1768483548395-0dca1de198f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMGZpbG1tYWtlciUyMG91dGRvb3IlMjBsb2NhdGlvbiUyMHNob290fGVufDF8fHx8MTc3Mzc0Nzg1OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "6",
    title: "Apex Launch",
    category: "Corporate",
    year: "2025",
    client: "Apex Corp",
    img: "https://images.unsplash.com/photo-1578920040242-fa9c1ccbe5b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHZpZGVvZ3JhcGh5JTIwY3Jvd2R8ZW58MXx8fHwxNzczNzQ3ODYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "7",
    title: "Luxe Living",
    category: "Real Estate",
    year: "2024",
    client: "Prime Property",
    img: "https://images.unsplash.com/photo-1635111031688-9b13c0125d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbHV4dXJ5JTIwcHJvcGVydHklMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3Mzc0Nzg2OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "8",
    title: "Prestige Collection",
    category: "Product",
    year: "2025",
    client: "Luxury Brand",
    img: "https://images.unsplash.com/photo-1762423656649-24aaf046402e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwdmlkZW8lMjBzaG9vdCUyMGx1eHVyeSUyMGJyYW5kJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzczNzQ3ODYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const filters = [
  "All",
  "Commercial",
  "Real Estate",
  "Corporate",
  "Documentary",
  "Music Video",
  "Drone",
  "Product",
];

// Adobe software floating orb icons as inline SVG text
const AdobeOrbs = [
  {
    // Premiere Pro
    label: "Pr",
    outerColor: "#00c8ff",
    innerColor: "#9999ff",
    textColor: "#9999ff",
    bgColor: "rgba(153,153,255,0.12)",
    glowColor: "rgba(0,200,255,0.25)",
    top: "18%",
    left: "6%",
    size: 88,
    floatY: [-18, 0, -18],
    duration: 5.5,
    delay: 0,
  },
  {
    // After Effects
    label: "Ae",
    outerColor: "#9999ff",
    innerColor: "#00aeff",
    textColor: "#7b9bff",
    bgColor: "rgba(0,174,255,0.1)",
    glowColor: "rgba(153,153,255,0.22)",
    top: "55%",
    left: "3%",
    size: 72,
    floatY: [0, -22, 0],
    duration: 6.5,
    delay: 1.2,
  },
  {
    // Photoshop
    label: "Ps",
    outerColor: "#31a8ff",
    innerColor: "#0b6fba",
    textColor: "#31a8ff",
    bgColor: "rgba(49,168,255,0.1)",
    glowColor: "rgba(49,168,255,0.22)",
    top: "20%",
    right: "5%",
    size: 80,
    floatY: [-14, 6, -14],
    duration: 7,
    delay: 0.6,
  },
  {
    // Illustrator
    label: "Ai",
    outerColor: "#f59e0b",
    innerColor: "#c97a00",
    textColor: "#f59e0b",
    bgColor: "rgba(245,158,11,0.1)",
    glowColor: "rgba(245,158,11,0.22)",
    top: "58%",
    right: "4%",
    size: 76,
    floatY: [0, -20, 0],
    duration: 5,
    delay: 1.8,
  },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div style={{ background: "#04040a" }}>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt="Portfolio"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.2) saturate(0.6)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(4,4,10,0.5) 0%, rgba(4,4,10,0.95) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(239,68,68,0.07) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* ── Floating Adobe Software Orbs ── */}
        {AdobeOrbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute hidden sm:flex items-center justify-center pointer-events-none"
            style={{
              top: orb.top,
              left: (orb as any).left,
              right: (orb as any).right,
              width: orb.size,
              height: orb.size,
              zIndex: 5,
            }}
            animate={{ y: orb.floatY }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: `1.5px solid ${orb.outerColor}`,
                boxShadow: `0 0 18px ${orb.glowColor}, inset 0 0 12px ${orb.glowColor}`,
                opacity: 0.75,
              }}
            />
            {/* Inner ring */}
            <div
              className="absolute rounded-full flex items-center justify-center"
              style={{
                inset: "16%",
                border: `1.5px solid ${orb.innerColor}`,
                background: orb.bgColor,
                boxShadow: `0 0 10px ${orb.glowColor}`,
              }}
            >
              {/* Adobe app label */}
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: orb.size * 0.22,
                  color: orb.textColor,
                  letterSpacing: "-0.03em",
                  textShadow: `0 0 12px ${orb.textColor}`,
                  userSelect: "none",
                }}
              >
                {orb.label}
              </span>
            </div>

            {/* Subtle rotating tick marks on outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{ opacity: 0.25 }}
            >
              {[0, 90, 180, 270].map((deg) => (
                <div
                  key={deg}
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    width: "6px",
                    height: "2px",
                    background: orb.outerColor,
                    borderRadius: "1px",
                    transformOrigin: `-${orb.size / 2 - 3}px 0`,
                    transform: `rotate(${deg}deg) translateX(-${orb.size / 2 - 3}px)`,
                    marginTop: "-1px",
                    marginLeft: "-3px",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        ))}

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs uppercase tracking-widest mb-4"
            style={{
              color: "#ef4444",
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 600,
            }}
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            style={{
              fontFamily: "Barlow Condensed, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              lineHeight: 0.95,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            Our{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, #ef4444, #f59e0b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Portfolio
            </span>
            <br />
            of Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-6 max-w-2xl mx-auto"
            style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            A curated showcase of our most impactful productions
            across every genre and format.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-5 py-2 rounded-full text-sm transition-all duration-300"
              style={{
                background:
                  activeFilter === f
                    ? "linear-gradient(to right, #ef4444, #f59e0b)"
                    : "rgba(255,255,255,0.05)",
                border:
                  activeFilter === f
                    ? "none"
                    : "1px solid rgba(255,255,255,0.1)",
                color:
                  activeFilter === f
                    ? "white"
                    : "rgba(255,255,255,0.55)",
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                boxShadow:
                  activeFilter === f
                    ? "0 0 20px rgba(239,68,68,0.3)"
                    : "none",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-6 px-4 sm:px-6 max-w-7xl mx-auto pb-24">
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <span
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{
                      color: "#ef4444",
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {project.category} · {project.year}
                  </span>
                  <h3
                    style={{
                      color: "white",
                      fontFamily:
                        "Barlow Condensed, sans-serif",
                      fontWeight: 700,
                      fontSize: "1.3rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-xs mt-1"
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    {project.client}
                  </p>
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      color: "#f59e0b",
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    View Case Study <ArrowRight size={12} />
                  </Link>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <Play
                    size={14}
                    className="text-white"
                    fill="white"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </section>
    </div>
  );
}