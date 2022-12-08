import React from "react";

const Faq = () => {
  return (
    <>
      {/* Container for demo purpose */}
      <div className="container my-24 px-6 mx-auto">
        {/* Section: Design Block */}
        <section className="mb-32 text-gray-800">
          <h2 className="text-3xl font-bold mb-6 pl-6">
            Sıkça Sorulan Sorular
          </h2>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
              <h2 className="accordion-header mb-0" id="flush-headingOne">
                <button
                  className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Lorem, ipsum dolor.
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse border-0 collapse show"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body py-4 px-5 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis aliquam molestiae tenetur obcaecati fugiat
                  blanditiis modi, consectetur, nisi similique porro saepe aut
                  magnam. Dignissimos consectetur quo beatae, repudiandae sed
                  impedit iure ipsum? Neque quod dignissimos deserunt temporibus
                  veniam itaque quaerat minima quia similique eveniet unde, sunt
                  quam, laborum quisquam a.
                </div>
              </div>
            </div>
            <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
              <h2 className="accordion-header mb-0" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Lorem, ipsum dolor.
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse border-0 collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body py-4 px-5 text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  in sed vitae, dolorem porro inventore itaque incidunt animi
                  aperiam, provident atque neque mollitia accusantium maiores?
                  Dolorum modi eligendi explicabo hic velit provident suscipit
                  delectus minus officiis quasi debitis ab voluptates, error
                  tempora ullam dolore maiores laborum? Numquam magnam eveniet
                  expedita?
                </div>
              </div>
            </div>
            <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
              <h2 className="accordion-header mb-0" id="flush-headingThree">
                <button
                  className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Lorem, ipsum dolor.
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body py-4 px-5 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                  architecto ab facere aut assumenda excepturi nihil, voluptas
                  non, dolorem rerum illum necessitatibus ut placeat rem
                  doloribus aliquam dicta itaque iste! Optio ullam corporis vel
                  dolorem esse impedit sint ducimus possimus eaque maiores
                  velit, non ea natus labore porro dolore laudantium?
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
      {/* Container for demo purpose */}
    </>
  );
};

export default Faq;
