import { useRouter } from "next/router";

function BlogPostsPage() {
  // [...something].js - catch-all functionality to grab multi paths into array
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Blog posts</h1>
    </div>
  );
}

export default BlogPostsPage;
