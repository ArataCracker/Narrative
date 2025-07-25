import { Appbar } from "../components/Appbar";
import { BlogSkel } from "../components/BlogSkel";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";


export const Blog = () => {
  const { id } = useParams();
  const {loading, blog} = useBlog({
    id: id || ""
  });
  if (loading || !blog) {
    return (
      <div>
        <Appbar />
        <div className="">
          <div className="">
            <BlogSkel />
          </div>
        </div>
      </div>
    );
  }
  

   return (
      <div>
      <FullBlog blog={blog} />
      </div>
    );
  
  }