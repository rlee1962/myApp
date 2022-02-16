import React from "react";
import { useFieldArray } from "react-hook-form";
import styled from "styled-components";

export default ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `objectives[${nestIndex}].actors`,
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 0, marginTop: "-5px" }}>
            <label>
              <h2 className="label-label" style={{ marginBottom: "3em" }}>
                Actor Controls
              </h2>{" "}
              Actor (Interactable UID):
            </label>

            <input
              key={item.id}
              {...register(`objectives.[${nestIndex}].actors[${k}].actor`)}
              defaultValue={item.actor}
              style={{ marginRight: "25px" }}
            />

            <div className="flex-items">
              <CheckSpacer />
              <div className="pretty p-default p-thick">
                <input
                  key={item.id}
                  {...register(
                    `objectives.[${nestIndex}].actors[${k}].waitState`
                  )}
                  defaultValue={item.waitState}
                  type="checkbox"
                  style={{ marginRight: "25px", marginTop: "-.5em" }}
                />
                <div className="state">
                  <label className="checkLabel">Wait State</label>
                </div>
              </div>
              <CheckSpacer />
            </div>

            <label>enum:</label>
            <input
              key={item.id}
              {...register(`objectives.[${nestIndex}].actors[${k}].enum`)}
              defaultValue={item.enum}
              style={{ marginRight: "25px" }}
            />

            <button
              className="buttonMinus"
              type="button"
              onClick={() => remove(k)}
            >
              Delete Nested
            </button>
          </div>
        );
      })}

      <button
        className="buttonPlus"
        style={{
          marginLeft: "0em",
          marginBottom: "2rem",
          marginTop: "0",
        }}
        type="button"
        onClick={() =>
          append({
            actor:
              "Processor RackCircuit Breaker Panel MaintSta Supply Pwr 28VDC",
            waitState: true,
            enum: "EToggle Switch-2 State",
          })
        }
      >
        Append Nested
      </button>

      <hr />
    </div>
  );
};

const CheckSpacer = styled.div`
  border-top: 0px inset #10101080;
  width: 100%;
  margin: 5px 5px;
`;
