import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(60%_50%_at_50%_0%,rgb(99_102_241/0.15),transparent)] dark:bg-[radial-gradient(60%_50%_at_50%_0%,rgb(99_102_241/0.22),transparent)]"
      />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
