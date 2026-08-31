'use client';
import Link from "next/link";
import { marbles } from "@/data/marbles";
import { importedStones } from "@/data/imported";

const allStones = [
  ...marbles,
  ...importedStones,
];

export default function CollectionPage() {
  return (
    <main
      className="
      bg-black
      min-h-screen
      text-white
      py-24
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        "
      >
        <div className="text-center">
          <p
            className="
            text-yellow-500
            tracking-[5px]
            text-sm
            "
          >
            ALL STONES
          </p>

          <h1
            className="
            text-6xl
            font-serif
            mt-5
            "
          >
            Complete Stone Collection
          </h1>

          <p
            className="
            text-gray-400
            mt-5
            "
          >
            Explore our complete collection of Indian and Imported stones.
          </p>
        </div>

        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          mt-16
          "
        >
          {allStones.map((stone: any, index: number) => (
            <div
              key={`${stone.name}-${index}`}
              className="
              bg-[#111]
              border
              border-yellow-600/20
              rounded-xl
              overflow-hidden
              hover:border-yellow-500
              transition
              "
            >
              <img
                src={stone.image}
                alt={stone.name}
                className="
                w-full
                h-80
                object-cover
                "
              />

              <div className="p-6">
                <h2
                  className="
                  text-2xl
                  font-serif
                  "
                >
                  {stone.name}
                </h2>

                {stone.origin && (
                  <p
                    className="
                    text-yellow-500
                    mt-2
                    text-sm
                    "
                  >
                    {stone.origin}
                  </p>
                )}

                <p
                  className="
                  text-gray-400
                  mt-4
                  "
                >
                  {stone.description}
                </p>

                {stone.slug ? (
                  <Link
                    href="/contact"
                    className="
                    inline-block
                    mt-6
                    bg-yellow-600
                    text-black
                    px-6
                    py-3
                    rounded
                    "
                  >
                    Request Quote
                  </Link>
                ) : (
                  <Link
                    href="/contact"
                    className="
                    inline-block
                    mt-6
                    bg-yellow-600
                    text-black
                    px-6
                    py-3
                    rounded
                    "
                  >
                    Request Quote
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}