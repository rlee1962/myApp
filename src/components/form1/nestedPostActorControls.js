import React from "react";
import { useFieldArray } from "react-hook-form";
import styled from "styled-components";

export default ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `objectives[${nestIndex}].actorControls[${nestIndex}].postControls`,
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div
            key={item.id}
            style={{
              marginLeft: 20,
              marginTop: "-1em",
              marginBottom: "-1em",
              lineHeight: "1.5em",
            }}
          >
            <label>Post Actors:</label>
            <input
              key={item.id}
              {...register(
                `objectives[${nestIndex}].actorControls[${nestIndex}].postControls[${k}].cmd`
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
                    `objectives[${nestIndex}].actorControls[${nestIndex}].postControls[${k}].args`
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
              style={{ margin: "-.75em 0 1.5em" }}
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
          marginLeft: "1.6em",
          marginTop: "-1.6em",
          marginBottom: "2rem",
        }}
        type="button"
        onClick={() =>
          append({
            cmd: "Document Highlight",
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
