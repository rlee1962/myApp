import React from "react";
import { useFieldArray } from "react-hook-form";
import styled from "styled-components";

export default ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `objectives[${nestIndex}].defaultActors`,
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 0, marginTop: "-5px" }}>
            <label>
              <h2 className="label-label">Actor Controls</h2> Actor:
            </label>
            <input
              key={item.id}
              {...register(
                `objectives.[${nestIndex}].defaultActors[${k}].actor`
              )}
              defaultValue={item.actor}
              style={{ marginRight: "25px" }}
            />

            <label>Cmd:</label>
            <input
              key={item.id}
              {...register(`objectives.[${nestIndex}].defaultActors[${k}].cmd`)}
              defaultValue={item.cmd}
              style={{ marginTop: ".25em" }}
            />

            <div className="flex-items">
              <CheckSpacer />
              <div className="pretty p-default p-thick">
                <input
                  key={item.id}
                  {...register(
                    `objectives.[${nestIndex}].defaultActors[${k}].args`
                  )}
                  defaultValue={item.args}
                  type="checkbox"
                  style={{ marginTop: "-.35em" }}
                />
                <div className="state">
                  <label className="checkLabel">args:</label>
                </div>
              </div>
              <CheckSpacer />
            </div>

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
            actor: "Player",
            cmd: "Hud Notification",
            args: true,
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
  margin: 2px 0;
`;
