import getInput from "./util/getInput.js";
import setOutput from "./util/setOutput.js";
import solvers from "./solvers";

function run(i, s) {
  setOutput(i, s(getInput(i)));
}

solvers.forEach((s, i) => run(i + 1, s));
