import React from "react";
import { useFieldArray } from "react-hook-form";
import NestedArray from "./nestedFieldArray";
import styled from "styled-components";
import "./../styles/tailwind.css";
import "./../styles/Custom.css";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

let renderCount = 0;

export default function Fields({ control, register, setValue, getValues }) {
  const {
    fields: objFields,
    append: objAppend,
    remove: objRemove,
    prepend: objPrepend,
  } = useFieldArray({ control, name: "objectives" });

  // renderCount++;

  return (
    <>
      <ul>
        {objFields.map((item, index) => {
          return (
            <li key={item.id}>
              <label style={{ textAlign: "left" }}>initial Waypoint:</label>
              <input
                key={item.id}
                {...register(`objectives.${index}.initialWaypoint`)}
                defaultValue={item.initialWaypoint}
              />

              <button
                className="buttonMinus"
                style={{ margin: "-.65em 0 1.5em" }}
                type="button"
                onClick={() => objRemove(index)}
              >
                Delete
              </button>
              <NestedArray nestIndex={index} {...{ control, register }} />
            </li>
          );
        })}
      </ul>

      <section>
        <button
          className="buttonPlus"
          style={{ marginBottom: "-5px" }}
          type="button"
          onClick={() => {
            objAppend({ name: "append" });
          }}
        >
          Append
        </button>

        <button
          className="buttonPlus"
          type="button"
          onClick={() => {
            setValue("objectives", [
              ...getValues().objectives,
              {
                defaultActors: [
                  {
                    actor: "HSDC A Data",
                    slotuid: "HSDC A Data Slot",
                    preCmd: "Enable",
                    preArgs: true,
                    postCmd: "Enable",
                    postArgs: false,
                    waitState: 1,
                  },
                ],
              },
            ]);
          }}
        >
          Append Nested
        </button>

        <button
          className="buttonPlus"
          type="button"
          onClick={() => {
            objPrepend({ name: "append" });
          }}
        >
          Prepend
        </button>

        <button
          className="buttonPlus"
          style={{ marginTop: "-2px" }}
          type="button"
          onClick={() => {
            setValue("objectives", [
              {
                defaultActors: [
                  {
                    actor: "HSDC A Data",
                    slotuid: "HSDC A Data Slot",
                    preCmd: "Enable",
                    preArgs: true,
                    postCmd: "Enable",
                    waitState: 1,
                  },
                ],
              },
              ...getValues().objectives,
            ]);
          }}
        >
          Prepend Nested
        </button>
      </section>

      <span className="counter">Render Count: {renderCount}</span>
    </>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
`;
const CheckSpacer = styled.div`
  border-top: 0px inset #10101080;
  width: 100%;
  margin: 2px 0;
`;
