import ora from "ora";

function setSpinner(msg, color = "cyan") {
  const spinner = ora(msg).start();
  spinner.color = color;
  return spinner;
}

function successSpinner(spinner, msg) {
  spinner.succeed(msg)
}

export {
  setSpinner,
  successSpinner,
};