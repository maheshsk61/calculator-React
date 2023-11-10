import React, { useState } from "react";
import * as math from "mathjs";
function Calc() {
  const [display, setDisplay] = useState("");
  const handle = function (value) {
    switch (value) {
      case "0":
        setDisplay(display + value);
        break;
      case "1":
        setDisplay(display + value);
        break;
      case "2":
        setDisplay(display + value);
        break;
      case "3":
        setDisplay(display + value);
        break;
      case "4":
        setDisplay(display + value);
        break;
      case "5":
        setDisplay(display + value);
        break;
      case "6":
        setDisplay(display + value);
        break;
      case "7":
        setDisplay(display + value);
        break;
      case "8":
        setDisplay(display + value);
        break;
      case "9":
        setDisplay(display + value);
        break;
      case "+":
        setDisplay(display + value);
        break;
      case "-":
        setDisplay(display + value);
        break;
      case "*":
        setDisplay(display + value);
        break;
      case "/":
        setDisplay(display + value);
        break;
      case ".":
        setDisplay(display + value);
        break;
      case "%":
        setDisplay(display + value);
        break;
      case "=":
        /* eval() function is used to dynamically execute the string 'x +       y', which is a JavaScript expression.
          let x = 10;
          let y = 20;
          let result = eval('x + y');
          console.log(result);  // Output: 30
        */
        let answer = math.evaluate(display);
        //let answer=eval(display)
        setDisplay(answer.toString());
        break;
      case "clear":
        setDisplay("");
        break;
      case "delete":
        setDisplay(display.slice(0, -1));
        break;
      default:
        setDisplay(display);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column container">
      <h1>Calculator</h1>
      <div classname="displaybox">
        <input
          type="text"
          className="p-1 my-3 card"
          value={display}
          placeholder="0"
        />
      </div>
      <div className="border">
        <div className="buttons">
          <table>
            <tbody>
              <tr>
                <td>
                  <button
                    onClick={() => handle("9")}
                    className="border-0 outline-0 shadow-none"
                  >
                    9
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handle("8")}
                    className="border-0 outline-0 shadow-none"
                  >
                    8
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handle("7")}
                    className="border-0 outline-0 shadow-none"
                  >
                    7
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handle("+")}
                    className="border-0 outline-0 shadow-none bg-light text-dark"
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handle(".")}
                    className="border-0 outline-0 shadow-none bg-light text-dark"
                  >
                    .
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => handle("6")}
                    className="border-0 outline-0 shadow-none"
                  >
                    6
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handle("5")}
                    className="border-0 outline-0 shadow-none"
                  >
                    5
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handle("4")}
                    className="border-0 outline-0 shadow-none"
                  >
                    4
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handle("-")}
                    className="border-0 outline-0 shadow-none bg-light text-dark"
                  >
                    -
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handle("%")}
                    className="border-0 outline-0 shadow-none bg-light text-dark"
                  >
                    %
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => handle("3")}
                    className="border-0 outline-0 shadow-none"
                  >
                    3
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handle("2")}
                    className="border-0 outline-0 shadow-none"
                  >
                    2
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handle("1")}
                    className="border-0 outline-0 shadow-none"
                  >
                    1
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handle("*")}
                    className="border-0 outline-0 shadow-none bg-light text-dark"
                  >
                    *
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handle("/")}
                    className="border-0 outline-0 shadow-none bg-light text-dark"
                  >
                    /
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    onClick={() => handle("0")}
                    className="border-0 outline-0 shadow-none"
                  >
                    0
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handle("clear")}
                    className="border-0 outline-0 shadow-none bg-danger"
                  >
                    CL
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handle("delete")}
                    className="border-0 outline-0 shadow-none bg-warning"
                  >
                    DEL
                  </button>
                </td>
                <td colSpan="2">
                  <button
                    onClick={() => handle("=")}
                    className="border-0 outline-0 shadow-none bg-success w-100"
                  >
                    =
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Calc;
