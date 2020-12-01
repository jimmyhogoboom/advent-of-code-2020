import getInput from "./util/getInput.js";
import solvers from "./solvers";

solvers.forEach((s, i) => s(getInput(i + 1)));
