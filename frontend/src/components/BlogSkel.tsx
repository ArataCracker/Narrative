export const BlogSkel = () => {
    return (
      <div role="status" className="animate-pulse">
        <div className="flex justify-center">
          <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12 gap-4">
            <div className="col-span-8 space-y-4">
              <div className="h-10 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>

              <div className="space-y-2 pt-4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-11/12"></div>
                <div className="h-4 bg-gray-200 rounded w-10/12"></div>
                <div className="h-4 bg-gray-200 rounded w-9/12"></div>
              </div>
            </div>
            <div className="col-span-4 space-y-4">
              <div className="h-4 bg-gray-200 rounded w-20"></div>
              <div className="flex items-center space-x-4 mt-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                <div className="space-y-2 w-full">
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  };
  