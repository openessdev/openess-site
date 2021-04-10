import type { Component } from "solid-js";
import { For } from "solid-js";
import logo from "../assets/img/logo.svg";

const episodes = [
  {
    title: 'Episode 1 - Shawn "swyx" Wang',
    quote:
      "Open source is one of the things that makes tech so different from every other industry because we share so much.",
    description:
      "Shawn helps build great developer experiences, from documentation to dev tools to dev communities. A frequent writer and speaker best known for the Learn in Public movement and recently published The Coding Career Handbook with more advice for engineers going from Junior to Senior.",
    about_title: "About Swyx",
    about_url: "https://www.swyx.io/about/",
    audio_url: "/episodes/episode-1-shawn-swyx-wang.m4a",
    share_description:
      'Listen to Julia Che interview Shawn "swyx" Wang to discuss the future of open-source.',
    share_url:
      "https://building.openess.dev/episodes/episode-1-shawn-swyx-wang.m4a",
  },
];

const Episode: Component<{
  title: string;
  quote: string;
  description: string;
  about_title: string;
  about_url: string;
  audio_url: string;
  share_description: string;
  share_url: string;
}> = (props) => {
  return (
    <div class="md:m-5 mt-0 2xl:flex md:mx-10 border border-gray-800 rounded backdrop-filter backdrop-blur-2xl hover:border-gray-500">
      <div class="b-grey p-10 sm:w-12/12 2xl:w-9/12">
        <h3 class="text-3xl sm:w-12/12 lg:text-3xl  mb-5">{props.title}</h3>
        <div class="pt-1">
          <blockquote class="pl-5 text-lg text-openess-accent py-3 border-l-4 border-openess-accent m-4">
            {props.quote}
          </blockquote>
          {props.description}
        </div>
      </div>
      <div class="p-7 sm:w-12/12 2xl:w-5/12 bg-openess-accent bg-opacity-10">
        <div>Interviewed by Julia Che</div>
        <div>48 minutes</div>
        <div class="mt-5 flex flex-wrap">
          <a
            target="_blank"
            class="py-3 px-5 mb-3 flex-1 2xl:flex-none 2xl:w-full transition text-center inline-block bg-opacity-70 bg-gray-800 hover:bg-openess-accent mr-2"
            href={props.about_url}
          >
            {props.about_title}
          </a>
          <a
            href={`https://twitter.com/intent/tweet/?text=${encodeURI(
              props.share_description
            )}&amp;url=${props.share_url}`}
            target="_blank"
            rel="noopener"
            aria-label="Share on Twitter"
            class="py-3 px-5 mb-3 flex-1 2xl:flex-none 2xl:w-full transition text-center inline-block bg-opacity-70 bg-gray-800 hover:bg-openess-accent mr-2"
          >
            Share on Twitter
          </a>
        </div>
        <a
          target="_blank"
          class="py-3 px-5 mb-3 transition w-full text-center inline-block bg-opacity-70 bg-gray-600 hover:bg-openess-accent"
          href={props.audio_url}
        >
          Listen Now
        </a>
      </div>
    </div>
  );
};

const Episodes: Component = () => {
  return (
    <div class="relative">
      <div class="relative lg:flex lg:flex-wrap lg:min-h-screen lg:min-w-screen lg:content-center lg:mx-10">
        <div class="sticky top-50 text-white lg:container lg:pr-5 lg:px-12 lg:flex lg:mx-auto text-openess-default">
          <div class="p-10 lg:p-0 md:mt-10 lg:w-4/12">
            <h1 class="text-3xl lg:text-4xl  mb-5">
              Building
              <img
                src={logo}
                class="mt-4 w-4/12 md:w-3/12 lg:w-6/12 mb-6 lg:mb-12"
              />
            </h1>
            <h2 class="sm:text-2xl lg:text-3xl lg:text-2xl font-bold mb-5">
              A podcast that explores the future of software as it relates to
              open-source.
            </h2>
            Created by
            <a
              target="_blank"
              class="transition opacity-75 hover:opacity-100"
              href="https://twitter.com/lotusleafstyle"
            >
              Julia Che
            </a>
            in support of Openess, a new start-up focused on innovation within
            the OSS space.
          </div>
          <div class="sm:w-12/12 lg:w-8/12">
            <For each={episodes}>{(episode) => <Episode {...episode} />}</For>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
