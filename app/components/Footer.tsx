export const Footer = () => {
  return (
    <>
      <footer
        className="sm:container sm:mx-auto p-2 sm:max-w-screen-sm
      md:max-w-screen-lg lg:max-w-screen-lg sm:px-6 lg:px-8 mx-auto bg-black border-t-4 border-orange-600"
      >
        <div className="flex">
          <div className="basis-1/2 text-left">
            <div>
              <p className="text-white">
                Created by{" "}
                <a
                  className="text-orange-500 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-orange-500"
                  href="https://www.linkedin.com/in/ubaidillah-amir-1083505a/"
                >
                  Ubaidillah Amir
                </a>
              </p>
              <p className="text-white cursor-pointer text-xs">
                Attribution to <a href="http://www.freepik.com/">Freepik</a>
              </p>
            </div>
          </div>
          <div className="basis-1/2 text-right text-xs align-middle"></div>
        </div>
      </footer>
    </>
  );
};
