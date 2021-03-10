import { Component } from "solid-js";
import logo from "../assets/img/logo.svg";
import twitter from "../assets/img/twitter.svg";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import gift from "../assets/img/gift.svg";
import chevron from "../assets/img/chevron.svg";

const Home: Component = () => (
  <div class="wrap">
    <div class="flex flex-wrap min-h-screen min-w-screen content-center md:mx-10">
      <div class="container text-white px-12 mx-12 text-openess-default mx-auto">
        <div class="sm:w-12/12 md:w-6/12 lg:w-5/12">
          <img src={logo} class="w-7/12 mb-6 md:mb-12" />
          <h1 class="text-3xl md:text-4xl font-bold mb-5">
            What is the future of open-source?
          </h1>
          Join the conversation & gain early access to what we're building
          together.
          <form class="my-8 w-12/12">
            <input
              placeholder="Email"
              class="py-3 md:py-4 rounded-none bg-transparent text-white placeholder-openess-default md:text-2xl border-b border-white w-8/12 md:w-9/12"
              type="email"
            ></input>
            <button class="hover:opacity-50 text-sm transition duration-300 rounded-full text-black font-bold py-3 md:py-4 bg-white w-4/12 md:w-3/12">
              Sign up
            </button>
          </form>
        </div>
        <div class="sm:mt-5 md:mt-10 md:pt-10">
          <span class="uppercase">
            Find out more{" "}
            <img
              class="inline ml-3 font-extrabold font-manrope"
              src={chevron}
            />
          </span>
          <div class="flex mt-9 flex-wrap content-center items-stretch">
            <a
              target="_blank"
              class="pr-4 hover:opacity-25 transition duration-300"
              href="https://www.twitter.com/openessdev"
            >
              <img src={twitter} />
            </a>
            <a
              target="_blank"
              class="px-4 hover:opacity-25 transition duration-300"
              href="https://www.linkedin.com/openessdev"
            >
              <img src={linkedin} />
            </a>
            <a
              target="_blank"
              class="px-4 hover:opacity-25 transition duration-300"
              href="https://www.github.com/openessdev"
            >
              <img src={github} />
            </a>
            <a
              target="_blank"
              class="pl-4 hover:opacity-25 transition duration-300"
              href="https://www.github.com/openessdev"
            >
              <img src={gift} />
            </a>
          </div>
          <div class="mt-10">
            <span>&copy; 2021 Openess </span>
            <a
              class="hover:opacity-50 transition duration-300 underline ml-8"
              href="mailto:careers@openess.dev"
            >
              Careers
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
