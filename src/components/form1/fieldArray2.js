import React from "react";
import { useFieldArray } from "react-hook-form";
import NestedArray2 from "./nestedFieldArray2";
import styled from "styled-components";
import "./../styles/tailwind.css";
import "./../styles/Custom.css";

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
              <label style={{ textAlign: "left" }}>Descriptions:</label>
              <input
                key={item.id}
                {...register(`objectives.${index}.description`)}
                defaultValue={item.description}
              />

              <label style={{ textAlign: "left" }}>Sub Descriptions:</label>
              <input
                key={item.id}
                {...register(`objectives.${index}.subDescription`)}
                defaultValue={item.subDescription}
              />

              <div className="flex-items">
                <CheckSpacer />
                <div className="pretty p-default p-thick">
                  <input
                    key={item.id}
                    {...register(`objectives.${index}.invisible`)}
                    type="checkbox"
                  />
                  <div className="state">
                    <label className="checkLabel">Invisible</label>
                  </div>
                </div>
                <CheckSpacer />
              </div>

              <div className="flex-items">
                <CheckSpacer />
                <div className="pretty p-default p-thick">
                  <input
                    key={item.id}
                    {...register(`objectives.${index}.hidden`)}
                    type="checkbox"
                  />
                  <div className="state">
                    <label className="checkLabel">Hidden</label>
                  </div>
                </div>
                <CheckSpacer />
              </div>

              <label style={{ textAlign: "left" }}>Objective Class:</label>
              <input
                key={item.id}
                {...register(`objectives.${index}.objectiveClass`)}
                defaultValue={item.objectiveClass}
              />

              <label style={{ textAlign: "left" }}>Bind Event:</label>
              <input
                key={item.id}
                {...register(`objectives.${index}.bindEvent`)}
                defaultValue={item.bindEvent}
              />

              <button
                className="buttonMinus"
                type="button"
                onClick={() => objRemove(index)}
              >
                Delete
              </button>
              <NestedArray2 nestIndex={index} {...{ control, register }} />
            </li>
          );
        })}
      </ul>

      <section>
        <button
          className="buttonPlus"
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
                actors: [{ actor: "append", presetState: "append" }],
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
          type="button"
          onClick={() => {
            setValue("objectives", [
              {
                actors: [{ actor: "prepend", presetState: "prepend" }],
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
