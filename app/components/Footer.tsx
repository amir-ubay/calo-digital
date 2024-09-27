export const Footer = () => {
  return (
    <>
      <footer
        className="sm:container sm:mx-auto p-8 sm:max-w-screen-sm
      md:max-w-screen-lg lg:max-w-screen-lg py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-gray-100 border-t-4 border-orange-600"
      >
        <div className="text-center">
          <div>
            <a
              className="flex-none text-xl font-semibold text-black dark:text-white"
              href="#"
              aria-label="Brand"
            >
              Calo Digital
            </a>
          </div>

          <div className="mt-3">
            <p className="text-gray-500 dark:text-neutral-500">
              Personal project by{" "}
              <a
                className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                href="https://www.linkedin.com/in/ubaidillah-amir-1083505a/"
              >
                Ubaidillah Amir
              </a>
            </p>
            <p className="text-gray-500 dark:text-neutral-500">
              Created using © {new Date().getFullYear()} Preline Labs,{" "}
              <a href="http://www.freepik.com/">Freepik</a>.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
