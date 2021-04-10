import type { Component } from "solid-js";
import { createSignal, Show } from "solid-js";
import Loader from "../components/Loader";
import logo from "../assets/img/logo.svg";
import twitter from "../assets/img/twitter.svg";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import gift from "../assets/img/gift.svg";
import chevron from "../assets/img/chevron.svg";

const PORTALID = "14573488";
const FORMID = "36d22bbc-b830-4168-91be-eb60f25101a9";
const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
enum FormState {
  IDLE,
  SENDING,
  SENT,
}

const Home: Component = () => {
  const [email, setEmail] = createSignal<string | null>(null);
  const [formStatus, setFormStatus] = createSignal<FormState>(FormState.IDLE);
  const sendForm = async (evt) => {
    evt.preventDefault();
    if (validateEmail(email()) === false) {
      alert("Invalid email address, please try again.");
      return;
    }
    setFormStatus(FormState.SENDING);
    try {
      const resp = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${PORTALID}/${FORMID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: [
              {
                name: "email",
                value: email(),
              },
            ],
          }),
        }
      );
      if (resp.status !== 200) {
        throw "The form was not successfully sent.";
      }
      setFormStatus(FormState.SENT);
    } catch (err) {
      alert(err.message);
      setFormStatus(FormState.IDLE);
    }
  };
  return (
    <div class="wrap home">
      <div class="flex flex-wrap min-h-screen min-w-screen content-center md:mx-10">
        <div class="container text-white px-12 mx-12 text-openess-default mx-auto">
          <div class="sm:w-12/12 md:w-6/12 lg:w-5/12">
            <img src={logo} class="w-7/12 mb-6 md:mb-12" />
            <h1 class="text-3xl md:text-4xl font-bold mb-5">
              What is the future of open-source?
            </h1>
            Join the conversation & gain early access to what we're building
            together.
            <Show when={formStatus() !== FormState.SENT}>
              <form onSubmit={sendForm} class="my-8 w-12/12">
                <input
                  required
                  disabled={formStatus() === FormState.SENDING}
                  placeholder="Email"
                  onChange={(evt) => setEmail(evt.currentTarget.value)}
                  class="py-3 md:py-4 rounded-none bg-transparent text-white placeholder-openess-default md:text-xl border-b border-white w-8/12 md:w-9/12"
                  type="email"
                ></input>
                <button class="hover:opacity-50 text-sm transition duration-300 rounded-full text-black font-bold py-3 md:py-4 bg-white w-4/12 md:w-3/12">
                  {formStatus() === FormState.SENDING ? <Loader /> : "Sign up"}
                </button>
              </form>
            </Show>
            <Show when={formStatus() === FormState.SENT}>
              <div class="my-8 w-12/12 text-2xl">
                Thanks for registering! We'll be in touch.
              </div>
            </Show>
          </div>
          <div class="sm:mt-5 md:mt-10 md:pt-10">
            <span class="uppercase">
              Find out more{" "}
              <img
                class="inline ml-3 font-extrabold font-manrope"
                src={chevron}
              />
            </span>
            <div class="flex mt-6 flex-wrap content-center items-stretch">
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
                href="https://www.linkedin.com/company/openessdev"
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
              {/* <a
                target="_blank"
                class="pl-4 hover:opacity-25 transition duration-300"
                href="https://www.github.com/openessdev"
              >
                <img src={gift} />
              </a> */}
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
};

export default Home;
