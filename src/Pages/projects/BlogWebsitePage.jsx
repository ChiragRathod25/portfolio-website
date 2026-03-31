import { ProjectDetailLayout } from "./ProjectDetailLayout";

export default function BlogWebsitePage() {
  return (
    <ProjectDetailLayout
      title="Blog Platform"
      tagline="Full-stack blog platform with authentication, rich post creation, comments, and a responsive UI."
      category="🌐 Full Stack Web App"
      tech={["React", "Node.js", "Express", "MongoDB", "JWT", "HTML/CSS"]}
      github="https://github.com/ChiragRathod25/blog-website"
      live="https://letsblogit.netlify.app/"
      image="/ProjectSnapshots/letsBlogIt.png"
      gradient="from-violet-500/20 to-purple-500/10"
      overview="A full-featured blogging platform where users can create accounts, write and publish posts, explore other users' content, and engage through comments. The platform focuses on a clean writing experience and a distraction-free reading interface with full CRUD capabilities."
      features={[
        "User authentication (register/login/logout)",
        "Rich text post creation and editing",
        "Image upload support for posts",
        "Comment system with nested replies",
        "User profiles with post history",
        "Like and bookmark system",
        "Search and category filtering",
        "Responsive design for all screen sizes",
        "Deployed on Netlify (frontend) + backend service",
      ]}
      challenges="Implementing a smooth, stable rich text editor that worked reliably across browsers and integrated well with MongoDB storage required iteration. Managing the comment, like, and bookmark state across React components without Redux was a good lesson in local state architecture."
    />
  );
}
