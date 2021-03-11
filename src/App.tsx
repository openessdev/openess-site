import { Component, Suspense } from "solid-js";
import { Meta } from "solid-meta";
import { Route } from "solid-app-router";

export const App: Component = () => {
  return (
    <>
      <main class="min-h-screen min-w-screen">
        <Suspense fallback={<p>Loading Openess...</p>}>
          <Route />
        </Suspense>
      </main>
    </>
  );
};
