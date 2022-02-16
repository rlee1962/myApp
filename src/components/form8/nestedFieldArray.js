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
              <h2 className="label-label" style={{ marginBottom: "3em" }}>
                Default Actors
              </h2>{" "}
              Actor:
            </label>
            <input
              key={item.id}
              {...register(
                `objectives.[${nestIndex}].defaultActors[${k}].actor`
              )}
              defaultValue={item.actor}
              style={{ marginRight: "25px" }}
            />
            <label>Override Maintenance Text:</label>
            <input
              key={item.id}
              {...register(
                `objectives.[${nestIndex}].defaultActors[${k}].overrideMaint`
              )}
              defaultValue={item.overrideMaint}
              style={{ marginRight: "25px" }}
            />
            <label>Override Button Text:</label>
            <input
              key={item.id}
              {...register(
                `objectives.[${nestIndex}].defaultActors[${k}].overrideButton`
              )}
              defaultValue={item.overrideButton}
              style={{ marginRight: "25px" }}
            />

            <div className="flex-items">
              <CheckSpacer />
              <div className="pretty p-default p-thick">
                <input
                  key={item.id}
                  {...register(
                    `objectives.[${nestIndex}].defaultActors[${k}].scrollBlock`
                  )}
                  defaultValue={item.scrollBlock}
                  type="checkbox"
                  style={{ marginRight: "25px" }}
                />
                <div className="state">
                  <label className="checkLabel">Scroll Block:</label>
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
            actor: "ASE3 Preflight General UI Select",
            overrideMaint:
              "NOTE: If power is to be applied to MRK's 500/501, LCS must be operating. If LCS is operated on the ground, Check LCS inlets must have cooling applied",
            overrideButton: "ACKNOWLEDGED",
            scrollBlock: true,
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
