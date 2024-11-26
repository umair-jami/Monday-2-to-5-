import React from 'react';
import codeIcon from '../../assets/coding.png';
import develop from '../../assets/icon.png';
import creative from '../../assets/creative.png';
import seo from '../../assets/seo.png';
import Image from 'next/image';

export default function Services() {
  return (
    <section
      id="services"
      className="container px-6 py-12 lg:h-[calc(100vh-4rem)] w-full max-w-6xl lg:mb-12"
    >
      {/* Header */}
      <div className="text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold">
          My <span className="text-yellow">Services</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-4 mx-auto lg:mx-0 lg:w-[60%]">
          Discover my services: coding, game development, theme design, UI design, system analysis, and creative projects for brand growth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Service 1 */}
        <div className="bg-boxbg p-6 flex items-start space-x-4 rounded-lg shadow-md">
          <Image src={codeIcon} alt="code" className="w-12 h-12" />
          <div>
            <h3 className="text-lg font-semibold">Coding</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
              Developing efficient solutions through expert programming by leveraging modern tools, frameworks, and coding practices to meet unique business needs.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="bg-boxbg p-6 flex items-start space-x-4 rounded-lg shadow-md">
          <Image src={develop} alt="Web Development" className="w-12 h-12" />
          <div>
            <h3 className="text-lg font-semibold">Web Development</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
              Creating responsive websites, optimizing performance, utilizing modern technologies, ensuring scalability, enhancing user experience, and delivering custom solutions for impactful online presence.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="bg-boxbg p-6 flex items-start space-x-4 rounded-lg shadow-md">
          <Image src={creative} alt="Creative Stuff" className="w-12 h-12" />
          <div>
            <h3 className="text-lg font-semibold">Creative Stuff</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
              Exploring ideas to inspire innovative results, experimenting with new concepts, collaborating with diverse teams, and pushing boundaries of traditional approaches.
            </p>
          </div>
        </div>

        {/* Service 4 */}
        <div className="bg-boxbg p-6 flex items-start space-x-4 rounded-lg shadow-md">
          <Image src={seo} alt="SEO" className="w-12 h-12" />
          <div>
            <h3 className="text-lg font-semibold">SEO</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
              Enhancing search rankings, increasing organic traffic, optimizing keywords, improving user experience, building backlinks, and delivering sustainable growth strategies effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
