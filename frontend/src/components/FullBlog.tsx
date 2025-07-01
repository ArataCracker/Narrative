import type { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"
import { useQuotAuthor } from "../hooks/QuoteAuthor"


export const FullBlog = ({ blog }:{blog: Blog }) => {
    const quote = useQuotAuthor();
    return <div>
            <Appbar/>
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        <CurrentDateDisplay/>
                    </div>
                    <div className="pt-4">
                        {blog.content}
                        
                    </div>
                </div>
                <div className=" col-span-4">
                    <div className="text-slate-600 text-lg">
                        Author,
                    </div>
                    <div className="flex">
                        <div className="pr-4 flex justify-center py-1">
                        <Avatar size = "small" name = {blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                            {blog.author.name || "Anonynous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                    {quote}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
}
export const CurrentDateDisplay = () => {
    const currentDate = new Date();
  
    return (
      <div>
        <p>Date: {currentDate.toLocaleDateString()}</p>
      </div>
    );
  }