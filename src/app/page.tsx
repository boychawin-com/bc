
export default function Home() {
  return (
    <main >
       <div className="px-3">
      <div className="py-[15vh] sm:py-[20vh] flex flex-col items-center justify-center">
        <h1 className="text-5xl font-medium  text-black mb-3  slide-in-from-bottom-3 duration-200 ease-in-out">
          <span className=" font-title bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-gray-500">
            BoyChawin Develop<span className="text-xs">xy^2</span>
          </span>
        </h1>
        <article className="prose  lg:prose-base text-center text-gray-500 dark:text-gray-300   mb-12 text-base  slide-in-from-bottom-4 duration-300 ease-in-out">
          <p className="font-cal">
          แพลตฟอร์มกลางที่รวมทั้งการแบ่งปันความรู้ ประสบการณ์ บทความ และเราเป็นทีมพัฒนาซอฟต์แวร์แพลตฟอร์ม เช่น ร้านค้าออนไลน์ เกษตร ท่องเที่ยว และอื่นๆ
          </p>
        </article>
      </div>
      <div className="space-y-4 w-full mb-10  slide-in-from-bottom-4 duration-400 ease-in-out">
      </div>
    
      {/* <CustomLink
        className=" slide-in-from-bottom-4 duration-500 ease-in-out"
        href="https://fastwork.co/user/boychawin/web-development-64476393"
        aria-label="web-development by boychawin.com">
        <BlurImage
          alt={"web-development by boychawin.com"}
          src={'/_static/banner/รับทำเว็บไซต์Front-endและBack-endดูแลตลอดชีพ.png'}
          className=" rounded w-full my-5 "
          width={70}
          height={70}
        />
      </CustomLink> */}
    </div>
    </main>
  );
}
