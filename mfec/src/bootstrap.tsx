/* eslint-disable @typescript-eslint/no-explicit-any */
import Component1 from "./components/Component1/Component1";
import Component2 from "./components/Component2/Component2";

const mfec = {
  Component1,
  Component2,
};

(window as any).mfec = mfec;
