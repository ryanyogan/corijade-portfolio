import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { DownArrow } from "../components/down-arrow";
import { Layout } from "../components/layout";
import { RightArrow } from "../components/right-arrow";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center flex-col mt-32 p-2 sm:p-8">
        <Image
          src="https://res.cloudinary.com/dhujko6ey/image/upload/v1661398112/corijade.me/signature.png"
          alt="cori jade signature"
          width={230}
          height={90}
        />

        <div className="text-gray-700 mt-3 sm:mt-6 sm:text-xl font-light">
          ...a UX desginer in{" "}
          <span className="text-orange-600">Austin, TX</span>
        </div>

        <div className="text-gray-700 mt-5 sm:mt-20 font-light sm:text-3xl text-center">
          <p>I truly care about people and want to</p>
          <p>
            <span className="text-orange-500">create engaging experiences</span>{" "}
            that make life
          </p>
          <p>
            <span className="text-orange-500">a little less complicated.</span>
          </p>
        </div>

        <div className="mt-10 mb-10">
          <DownArrow className="h-80 w-60" />
        </div>

        <div className="w-2/5 text-center mb-32" id="work">
          <h1 className="text-4xl font-thin font-roboto text-orange-500">
            MY WORK
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-10 items-center justify-center">
          <div className="flex justify-centerq">
            <Image
              src="https://res.cloudinary.com/dhujko6ey/image/upload/v1661398133/corijade.me/t1-tracker.png"
              alt="t1 tracker"
              height={200}
              width={250}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-y-1 items-center sm:items-start">
            <div className="uppercase text-gray-700 tracking-wide">
              <Link href="work/t1-tracker">T1 Tracker</Link>
            </div>
            <div className="text-orange-600 tracking-wide text-sm font-thin uppercase">
              UX/UI DESIGN | BRANDING
            </div>
            <div className="text-gray-800 tracking-wide text-center sm:text-left font-thin">
              E2E Mobile Application for Type-1
              <br /> Diabetic Caregivers.
            </div>
            <div className="text-orange-600 font-light mt-2">
              <Link href="work/t1-tracker">
                <span className="flex flex-row items-center gap-x-1">
                  <RightArrow /> Case Study
                </span>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/dhujko6ey/image/upload/v1661398129/corijade.me/netflix.png"
              alt="netflix"
              height={200}
              width={250}
              className="w-80 h-80 object-contain"
            />
          </div>

          <div>
            <div className="flex flex-col gap-y-1 items-center sm:items-start">
              <div className="uppercase text-gray-800 tracking-wide">
                Netflix
              </div>
              <div className="text-orange-600 tracking-wide text-sm font-thin uppercase">
                UX/UI DESIGN | UX RESEARCH
              </div>
              <div className="text-gray-800 tracking-wide text-center sm:text-left font-thin">
                Feature Addition for Netflix
                <br /> Conceptual Project
              </div>
              <div className="text-orange-600 font-light mt-2 flex flex-row gap-x-1 items-center">
                <Link href="work/netflix">
                  <span className="flex flex-row items-center gap-x-1">
                    <RightArrow /> Case Study
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/dhujko6ey/image/upload/v1661398126/corijade.me/jsj.png"
              alt="netflix"
              height={200}
              width={250}
              className="w-80 h-80 object-contain"
            />
          </div>
          <div>
            <div className="flex flex-col gap-y-1 items-center sm:items-start">
              <div className="uppercase text-gray-800 tracking-wide">
                jin shin jane
              </div>
              <div className="text-orange-600 tracking-wide text-sm font-thin uppercase">
                UX/UI DESIGN | BRANDING
              </div>
              <div className="text-gray-800 tracking-wide text-center sm:text-left font-thin">
                A Responsive Re-design for an
                <br /> Alternative Healthcare Practioner
              </div>
              <div className="text-orange-600 mt-2 font-light flex flex-row gap-x-1 items-center">
                <Link href="work/jsj">
                  <span className="flex flex-row items-center gap-x-1">
                    <RightArrow /> Case Study
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/dhujko6ey/image/upload/v1661398136/corijade.me/zeit.png"
              alt="netflix"
              height={200}
              width={250}
              className="w-80 h-80 object-contain"
            />
          </div>
          <div>
            <div className="flex flex-col gap-y-1 items-center sm:items-start">
              <div className="uppercase text-gray-800 tracking-wide">Zeit</div>
              <div className="text-orange-600 tracking-wide text-sm font-thin uppercase">
                UX/UI DESIGN | BRANDING
              </div>
              <div className="text-gray-800 text-center sm:text-left tracking-wide font-thin">
                Responsive Travel Booking
                <br /> Conceptual Project
              </div>
              <div className="text-orange-600 font-light mt-2">
                <Link href="work/zeit">
                  <span className="flex flex-row items-center gap-x-1">
                    <RightArrow /> Case Study
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/dhujko6ey/image/upload/v1661976564/corijade.me/Chicken.png"
              alt="pickles chicken shack"
              height={200}
              width={250}
              className="w-80 h-80 object-contain"
            />
          </div>

          <div>
            <div className="flex flex-col gap-y-1 items-center sm:items-start">
              <div className="uppercase text-gray-800 tracking-wide">
                Printed Cups
              </div>
              <div className="text-orange-600 tracking-wide text-sm font-thin uppercase">
                FUN SIDE PROJECTS
              </div>
              <div className="text-gray-800 tracking-wide text-center sm:text-left font-thin">
                I love to pixel push and design things
                <br />
                from scratch.
                <br />
                <br />
                My younger son, <i>loves</i> Chick-Fil-A so I
                <br />
                created these for him. ❤️
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/dhujko6ey/image/upload/v1661976562/corijade.me/Football.png"
              alt="football banner"
              height={200}
              width={250}
              className="w-80 h-80 object-contain"
            />
          </div>

          <div>
            <div className="flex flex-col gap-y-1 items-center sm:items-start">
              <div className="uppercase text-gray-800 tracking-wide">
                Football Banner
              </div>
              <div className="text-orange-600 tracking-wide text-sm font-thin uppercase">
                FUN SIDE PROJECTS
              </div>
              <div className="text-gray-800 tracking-wide text-center sm:text-left font-thin">
                My older son plays tackle football, so I<br />
                designed the team&apos;s 15&apos; x 18&apos; run-through
                <br />
                banner while sitting at practice. 🏈
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
