import { Component, Suspense } from "solid-js";
import { Meta } from "solid-meta";
import { Route } from "solid-app-router";

export const App: Component = () => {
  return (
    <>
      <Meta
        name="description"
        content="Change the world with open-source software!"
      />
      <main class="min-h-screen min-w-screen">
        <Suspense fallback={<p>Loading Openess...</p>}>
          <Route />
        </Suspense>
      </main>
    </>
  );
};
