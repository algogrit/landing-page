import { useEffect, useState } from "react";

type BlogPostItem = {
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  link: string; // relative
};

type BlogPostsResponse = {
  title: string;
  description: string;
  site: string;
  items: BlogPostItem[];
};

export default function BlogPosts() {
  const [posts, setPosts] = useState<BlogPostItem[]>([]);
  const [siteUrl, setSiteUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadBlogPosts() {
      try {
        const response = await fetch("https://blog.algogrit.com/posts.json");

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data: BlogPostsResponse = await response.json();

        const sortedItems = [...data.items].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        setPosts(sortedItems.slice(0, 4));
        setSiteUrl(data.site);
      } catch (err) {
        console.error("Error loading blog posts:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadBlogPosts();
  }, []);

  if (loading) {
    return (
      <p className="col-span-2 text-center text-gray-600 dark:text-gray-400">
        Loading posts…
      </p>
    );
  }

  if (error) {
    return (
      <div className="col-span-2 text-center py-8">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Unable to load blog posts. Please visit the blog directly.
        </p>
        <a
          href="https://blog.algogrit.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-600 dark:text-amber-400 hover:underline font-semibold"
        >
          Visit Blog →
        </a>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <p className="col-span-2 text-center text-gray-600 dark:text-gray-400">
        No posts available
      </p>
    );
  }

  return (
    <>
      {posts.map((post) => {
        let formattedDate = post.date;

        try {
          formattedDate = new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });
        } catch {
          /* noop */
        }

        const postUrl = post.link.startsWith("http")
          ? post.link
          : `${siteUrl.replace(/\/$/, "")}${post.link}`;

        return (
          <article
            key={postUrl}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg card-hover border border-gray-200 dark:border-gray-700"
          >
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {formattedDate}
            </div>

            <h3 className="text-2xl font-bold mb-3 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              <a
                href={postUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {post.title}
              </a>
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {post.excerpt}
            </p>

            <a
              href={postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 dark:text-amber-400 hover:underline font-semibold"
            >
              Read more →
            </a>
          </article>
        );
      })}
    </>
  );
}
