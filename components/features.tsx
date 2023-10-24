import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Features1 from '../public/images/features-1.png';
import Features2 from '../public/images/features-2.png';
import Features3 from '../public/images/features-3.png';

const Tab = ({ title, text, selected, onClick }) => {
  return (
    <a
      className={`flex items-center text-lg p-5 rounded transition duration-300 ease-in-out mb-3 ${
        selected
          ? 'bg-gray-200 dark:bg-stone-950'
          : 'bg-white dark:bg-stone-900 shadow-md hover:shadow-lg'
      }`}
      href="#0"
      onClick={onClick}
    >
      <div>
        <div className="font-bold leading-snug tracking-tight mb-1">
          {title}
        </div>
        <div className="text-gray-600">{text}</div>
      </div>
      <div className="flex justify-center items-center w-8 h-8 dark:bg-black rounded-full shadow flex-shrink-0 ml-3">
        <svg
          className="w-3 h-3 fill-current"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
        </svg>
      </div>
    </a>
  );
};

const TabImage = ({ selected, heightFix, image }) => {
  return (
    <Transition
      show={selected}
      appear={true}
      className="w-full"
      enter="transition ease-in-out duration-700 transform order-first"
      enterFrom="opacity-0 translate-y-16"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in-out duration-300 transform absolute"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-16"
      beforeEnter={() => heightFix()}
      unmount={false}
    >
      <div className="relative inline-flex flex-col">
        <Image
          className="md:max-w-none mx-auto rounded"
          src={image}
          width={500}
          height="462"
          alt="Features bg"
        />
      </div>
    </Transition>
  );
};

export default function Hero() {
  const [tab, setTab] = useState<number>(1);
  const tabs = useRef<HTMLDivElement>(null);
  const heightFix = () => {
    if (tabs.current?.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative py-16">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Explore the solutions</h1>
            <p className="text-xl text-gray-600">
              Experience seamless integration, swift deployments, and the power
              of FaaS out of the box. Elevate your serverless journey with us.
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Powerful suite of tools</h3>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <Tab
                  title="Initialize & Deploy"
                  text="Launch your serverless functions effortlessly. With Faast's intuitive command-line tools, start your server and send your first function to execute !"
                  selected={tab === 1}
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                />
                <Tab
                  title="Scale On-Demand"
                  text="Faast's architecture ensures optimal performance. As your demands grow, Faast scales with you, ensuring your execution never miss a beat."
                  selected={tab === 2}
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                />
                <Tab
                  title="Write & Deploy Functions Swiftly"
                  text="With Faast's intuitive API, seamlessly integrate your execution in seconds, ensuring they're running efficiently and securely."
                  selected={tab === 3}
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                />
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  <TabImage
                    selected={tab === 1}
                    heightFix={heightFix}
                    image={Features1}
                  />
                  <TabImage
                    selected={tab === 2}
                    heightFix={heightFix}
                    image={Features2}
                  />
                  <TabImage
                    selected={tab === 3}
                    heightFix={heightFix}
                    image={Features3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
