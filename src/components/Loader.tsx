import type { Component } from "solid-js";

const Loader: Component = () => (
  <div class="lds-ellipsis">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Loader;
