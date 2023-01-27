/**
 * modify the variables inside the function taskBlock
 *  so that the variables aren’t overwritten inside the conditional block
 * @param {*} trueOrFalse
 * @returns true or false
 */
export default function taskBlock(trueOrfalse) {
  const task = false;
  const task2 = true;

  if (trueOrfalse) {
    const task = true;
    const task2 = false;
    return (task, task2);
  }

  return [task, task2];
}
