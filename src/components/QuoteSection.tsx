"use client";

import { useState } from "react";


export default function QuoteSection() {

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");


  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();


    setLoading(true);

    setMessage("");


    const form = e.currentTarget;

    const formData = new FormData(form);


    const data = {

      name: formData.get("name"),

      company: formData.get("company"),

      phone: formData.get("phone"),

      email: formData.get("email"),


      material: formData.get("material"),

      stone_name: formData.get("stone_name"),


      quantity: formData.get("quantity"),

      thickness: formData.get("thickness"),


      finish: formData.get("finish"),


      location: formData.get("location"),


      message: formData.get("message"),

    };


    try {


      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/quote`,
        {

          method: "POST",

          headers: {

            "Content-Type": "application/json",

          },


          body: JSON.stringify(data),

        }
      );



      const result = await response.json();


      console.log(
        "Backend Response:",
        result
      );



      if (response.ok) {


        setMessage(
          "Thank you! Our team will contact you shortly."
        );


        form.reset();


      } else {


        setMessage(
          "Submission failed. Please try again."
        );


      }



    } catch (error) {


      console.log(
        "ERROR:",
        error
      );


      setMessage(
        "Something went wrong. Please try again."
      );


    }


    setLoading(false);


  };



  return (

    <section
      className="
      bg-black
      text-white
      py-20
      px-6
      "
    >


      <div
        className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-2
        gap-12
        "
      >



        {/* LEFT SIDE */}

        <div>


          <p
            className="
            text-yellow-600
            uppercase
            tracking-widest
            mb-4
            "
          >
            START YOUR PROJECT
          </p>



          <h2
            className="
            text-4xl
            font-semibold
            leading-tight
            "
          >

            Bring Natural Stone
            <br />
            Into Your Next Project

          </h2>



          <p
            className="
            text-gray-400
            mt-6
            leading-7
            "
          >

            Whether you are building a luxury residence,
            commercial project or sourcing bulk stone,
            our team will help you find the right solution.

          </p>


        </div>





        {/* FORM */}

        <div
          className="
          bg-zinc-900
          p-8
          rounded-lg
          "
        >


          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >


            <input
              name="name"
              required
              placeholder="Full Name"
              className="
              w-full
              p-3
              bg-black
              border
              border-gray-700
              rounded
              "
            />



            <input
              name="company"
              placeholder="Company Name"
              className="
              w-full
              p-3
              bg-black
              border
              border-gray-700
              rounded
              "
            />



            <input
              name="phone"
              required
              placeholder="Phone Number"
              className="
              w-full
              p-3
              bg-black
              border
              border-gray-700
              rounded
              "
            />



            <input
              name="email"
              placeholder="Email Address"
              className="
              w-full
              p-3
              bg-black
              border
              border-gray-700
              rounded
              "
            />




            <select
              name="material"
              required
              className="
              w-full
              p-3
              bg-black
              border
              border-gray-700
              rounded
              "
            >

              <option value="">
                Select Material
              </option>

              <option>
                Marble
              </option>

              <option>
                Granite
              </option>

              <option>
                Quartzite
              </option>

              <option>
                Onyx
              </option>


            </select>





            <input
              name="stone_name"
              placeholder="Stone Name"
              className="
              w-full
              p-3
              bg-black
              border
              border-gray-700
              rounded
              "
            />





            <input
              name="quantity"
              placeholder="Quantity (Sq.ft)"
              className="
              w-full
              p-3
              bg-black
              border
              border-gray-700
              rounded
              "
            />





            <select
              name="thickness"
              className="
              w-full
              p-3
              bg-black
              border
              border-gray-700
              rounded
              "
            >

              <option>
                Thickness
              </option>

              <option>
                16mm
              </option>

              <option>
                18mm
              </option>

              <option>
                20mm
              </option>

              <option>
                30mm
              </option>

            </select>





            <select
              name="finish"
              className="
              w-full
              p-3
              bg-black
              border
              border-gray-700
              rounded
              "
            >

              <option>
                Finish
              </option>

              <option>
                Polished
              </option>

              <option>
                Leather
              </option>

              <option>
                Honed
              </option>


            </select>





            <input
              name="location"
              placeholder="Project Location"
              className="
              w-full
              p-3
              bg-black
              border
              border-gray-700
              rounded
              "
            />





            <textarea

              name="message"

              placeholder="Tell us about your requirement"

              rows={4}

              className="
              w-full
              p-3
              bg-black
              border
              border-gray-700
              rounded
              "

            />





            <button

              type="submit"

              disabled={loading}

              className="
              bg-yellow-600
              text-black
              px-8
              py-3
              rounded
              font-semibold
              w-full
              "

            >

              {
                loading
                ?
                "Submitting..."
                :
                "REQUEST QUOTE →"
              }


            </button>



          </form>





          {
            message &&

            <p
              className="
              mt-5
              text-center
              text-green-400
              "
            >

              {message}

            </p>

          }



        </div>


      </div>


    </section>

  );

}