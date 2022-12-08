import React from "react";

const About = () => {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Hakkımızda
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              sint dolor optio temporibus, consectetur assumenda sequi
              aspernatur inventore iure saepe! Ut eveniet officia aperiam cumque
              ex. Libero doloremque delectus earum?
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="A group of People"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Biz Kimiz
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              eligendi asperiores consequatur sed qui sit! Facere, assumenda
              ullam fuga sapiente odit quos in sed animi porro accusamus
              deleniti modi aut!
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                  alt="kisi1"
                />
                <img
                  className="md:hidden block"
                  src="https://unsplash.com/photos/mEZ3PoFGs_k"
                  alt="person1"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Aslı
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                  alt="kisi2"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                  alt="kisi2"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Merve
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                  alt="kisi3"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                  alt="kisi3"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Akın
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                  alt="kisi4"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                  alt="kisi4"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Mustafa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default About;
