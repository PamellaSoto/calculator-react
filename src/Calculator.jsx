import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

const Calculator = () => {
  const defaultValue = "0";
  const [currentNum, setCurrentNum] = useState(defaultValue);
  const [firstNum, setFirstNum] = useState(defaultValue);
  const [operation, setOperation] = useState("");

  const handleAddNumber = (number) => {
    setCurrentNum((prev) => `${prev === defaultValue ? "" : prev}${number}`);
  };
  const handleOnClear = () => {
    setCurrentNum(defaultValue);
    setFirstNum(defaultValue);
    setOperation("");
  };
  const handleOnClearElement = () => {
    setCurrentNum(defaultValue);
  };

  const handleSum = () => {
    if (firstNum === defaultValue) {
      setFirstNum(String(currentNum));
      handleOnClearElement();
      setOperation("+");
    } else {
      const sum = Number(firstNum) + Number(currentNum);
      setCurrentNum(String(sum));
      setFirstNum(defaultValue);
      setOperation("");
    }
  };

  const handleSubtract = () => {
    if (firstNum === defaultValue) {
      setFirstNum(String(currentNum));
      handleOnClearElement();
      setOperation("-");
    } else {
      const sub = Number(firstNum) - Number(currentNum);
      setCurrentNum(String(sub));
      setFirstNum(defaultValue);
      setOperation("");
    }
  };

  const handleMulti = () => {
    if (firstNum === defaultValue) {
      setFirstNum(String(currentNum));
      handleOnClearElement();
      setOperation("x");
    } else {
      const mult = Number(firstNum) * Number(currentNum);
      setCurrentNum(String(mult));
      setFirstNum(defaultValue);
      setOperation("");
    }
  };

  const handleDiv = () => {
    if (firstNum === defaultValue) {
      setFirstNum(String(currentNum));
      handleOnClearElement();
      setOperation("/");
    } else {
      const div = Number(firstNum) / Number(currentNum);
      setCurrentNum(String(div));
      setFirstNum(defaultValue);
      setOperation("");
    }
  };

  const handleEqualsTo = () => {
    if (
      firstNum != defaultValue &&
      operation != "" &&
      currentNum != defaultValue
    ) {
      switch (operation) {
        case "+":
          handleSum();
          break;
        case "-":
          handleSubtract();
          break;
        case "x":
          handleMulti();
          break;
        case "/":
          handleDiv();
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#fac145] to-[#ffbe47] rounded-t-3xl rounded-b-4xl p-2">
      <div className="bg-[#f27a00] p-0.5 rounded-t-3xl rounded-b-4xl">
        <div className="max-w-70 min-h-90 bg-gradient-to-b from-[#fac145] to-[#ffbe47] rounded-t-3xl rounded-b-4xl p-4 flex flex-col items-center">
          <Input value={currentNum} />
          <div className="flex gap-2.5 mt-10">
            <Button label={`/`} onClick={handleDiv} />
            <Button label={`x`} onClick={handleMulti} />
            <Button label={`CE`} onClick={handleOnClearElement} />
            <Button label={`C`} onClick={handleOnClear} />
          </div>
          <div className="grid grid-cols-4 grid-rows-4 gap-2.5 mt-5">
            <Button
              label={7}
              isBig={true}
              onClick={() => handleAddNumber("7")}
            />
            <Button
              label={8}
              isBig={true}
              onClick={() => handleAddNumber("8")}
            />
            <Button
              label={9}
              isBig={true}
              onClick={() => handleAddNumber("9")}
            />
            <Button label={`-`} isBig={true} onClick={handleSubtract} />
            <Button
              label={4}
              isBig={true}
              onClick={() => handleAddNumber("4")}
            />
            <Button
              label={5}
              isBig={true}
              onClick={() => handleAddNumber("5")}
            />
            <Button
              label={6}
              isBig={true}
              onClick={() => handleAddNumber("6")}
            />
            <Button label={`+`} isBig={true} onClick={handleSum} />
            <Button
              label={1}
              isBig={true}
              onClick={() => handleAddNumber("1")}
            />
            <Button
              label={2}
              isBig={true}
              onClick={() => handleAddNumber("2")}
            />
            <Button
              label={3}
              isBig={true}
              onClick={() => handleAddNumber("3")}
            />
            <Button
              label={`=`}
              css={"row-span-2 col-start-4 row-start-3"}
              isBig={true}
              onClick={handleEqualsTo}
            />
            <Button
              label={0}
              css={"col-span-2 row-start-4"}
              isBig={true}
              onClick={() => handleAddNumber("0")}
            />
            <Button
              label={`.`}
              isBig={true}
              onClick={() => handleAddNumber(".")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
