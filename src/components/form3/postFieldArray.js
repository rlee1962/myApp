import React from "react";
import { useFieldArray } from "react-hook-form";
import styled from "styled-components";

export default ({ postIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `objectives[${postIndex}].postControls`,
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 20 }}>
            <label>
              <h2 className="label-label">Post-Controls</h2> Cmd:
            </label>
            <input
              key={item.id}
              {...register(`objectives.[${postIndex}].postControls[${k}].cmd`)}
              defaultValue={item.cmd}
              style={{ marginRight: "25px" }}
            />

            <div className="flex-items">
              <CheckSpacer />
              <div className="pretty p-default p-thick">
                <input
                  key={item.id}
                  {...register(
                    `objectives.[${postIndex}].postControls[${k}].args`
                  )}
                  defaultValue={item.args}
                  type="checkbox"
                  style={{ marginRight: "5px" }}
                />
                <div className="state">
                  <label className="checkLabel">Args:</label>
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
