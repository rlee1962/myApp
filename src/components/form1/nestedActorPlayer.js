import React from "react";
import { useFieldArray } from "react-hook-form";
import styled from "styled-components";

export default ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `objectives[${nestIndex}].actorControls`,
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 20 }}>
            <label>
              <h2 className="label-label">Actor Controls</h2> Actor:
            </label>
            <input
              key={item.id}
              {...register(
                `objectives.[${nestIndex}].actorControls[${k}].actor`
              )}
              defaultValue={item.actor}
              type="string"
              style={{ marginRight: "25px" }}
            />

            <label style={{ marginTop: "-.25em", lineHeight: "1.35em" }}>
              <h2 className="label-label">Pre-Controls</h2>
              Cmd:
            </label>
            <input
              key={item.id}
              // {...register(`objectives.[${nestIndex}].actorControls[${k}].cmd`)}
              {...register(
                `objectives.[${nestIndex}].actorControls.[${nestIndex}].preControls[${k}].cmd`
              )}
              defaultValue={item.cmd}
              type="string"
              style={{ marginRight: "25px" }}
            />

            <div className="flex-items">
              <CheckSpacer />
              <div className="pretty p-default p-thick">
                <input
                  key={item.id}
                  {...register(
                    `objectives.[${nestIndex}].actorControls.[${nestIndex}].preControls[${k}].args`
                  )}
                  defaultValue={item.preControls.args}
                  type="checkbox"
                />
                <div className="state">
                  <label className="checkLabel">Args</label>
                </div>
              </div>
              <CheckSpacer />
            </div>

            <label style={{ marginTop: "-.25em", lineHeight: "1.35em" }}>
              <h2 className="label-label">Post-Controls</h2>
              Cmd:
            </label>
            <input
              key={item.id}
              // {...register(`objectives.[${nestIndex}].actorControls[${k}].cmd`)}
              {...register(
                `objectives.[${nestIndex}].actorControls.[${nestIndex}].postControls[${k}].cmd`
              )}
              defaultValue={item.cmd}
              type="string"
              style={{ marginRight: "25px" }}
            />

            <div className="flex-items">
              <CheckSpacer />
              <div className="pretty p-default p-thick">
                <input
                  key={item.id}
                  {...register(
                    `objectives.[${nestIndex}].actorControls.[${nestIndex}].postControls[${k}].args`
                  )}
                  defaultValue={item.args}
                  type="checkbox"
                />
                <div className="state">
                  <label className="checkLabel">Args</label>
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
        style={{ marginLeft: "1.55em", marginBottom: "2rem" }}
        type="button"
        onClick={() =>
          append({
            actor: "Ladder",
            preSetState: 1,
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
