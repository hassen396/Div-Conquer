import useDocumentTitle from "../hooks/useDocumentTitle";
import Hero from "@/components/common/Hero";
import ProjectsPreview from "@/components/portfolio/ProjectsPreview";

const Home = () => {
  useDocumentTitle("Home");

  return (
    <main>
      <Hero />
      <ProjectsPreview />
      {/* future sections: projects preview, latest posts, contact CTA */}
    </main>
  );
};

export default Home;
