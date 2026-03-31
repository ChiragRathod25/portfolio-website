import { ProjectDetailLayout } from "./ProjectDetailLayout";

export default function YouTubeBackendPage() {
  return (
    <ProjectDetailLayout
      title="YouTube Backend Clone"
      tagline="Production-grade backend for a YouTube-like video platform with full media handling and authentication."
      category="⚙️ Backend Engineering"
      tech={["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Multer", "Cloudinary"]}
      github="https://github.com/ChiragRathod25/youtube-backend"
      live={null}
      image="/ProjectSnapshots/youtubeBackend.png"
      gradient="from-red-500/20 to-rose-500/10"
      overview="A scalable, production-ready backend system for a YouTube-like platform. Implements complete RESTful API architecture with user authentication, video upload/streaming, channel management, subscriptions, comments, likes, and watch history — all built with industry-standard patterns."
      features={[
        "JWT-based authentication with refresh tokens",
        "Video upload with Multer + Cloudinary CDN",
        "Channel subscriptions and subscriber counts",
        "Like/Dislike system for videos and comments",
        "Watch history and user profile management",
        "Paginated video feed and search",
        "Aggregation pipelines for performance",
        "Comprehensive error handling middleware",
        "Input validation and security best practices",
      ]}
      challenges="Designing efficient MongoDB aggregation pipelines for complex queries (e.g., getting subscribed channels' videos with pagination) was the most intellectually challenging part. Managing Cloudinary upload flows with proper error handling and implementing a clean token refresh strategy were key engineering decisions."
    />
  );
}
