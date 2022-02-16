import React from "react";
import { useFieldArray } from "react-hook-form";

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
              <h2
                className="label-label"
                style={{
                  marginBottom: "5em",
                  width: "68%",
                }}
              >
                Actor Controls (Progress Bar Display UIDs)
              </h2>{" "}
              Actor (Held Toggle Switch UIDs):
            </label>

            <input
              key={item.id}
              {...register(
                `objectives.[${nestIndex}].defaultActors[${k}].actor`
              )}
              defaultValue={item.actor}
              style={{ marginRight: "25px" }}
            />

            <label>Pre Controls:</label>
            <input
              key={item.id}
              {...register(`objectives.[${nestIndex}].defaultActors[${k}].cmd`)}
              defaultValue={item.cmd}
              style={{ marginRight: "25px" }}
            />

            <label>Args (Hold Time):</label>
            <input
              key={item.id}
              {...register(`objectives.[${nestIndex}].defaultActors[${k}].arg`)}
              defaultValue={item.arg}
              type="number"
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
            actor: "Mission PowerControl",
            cmd: "Set Information",
            arg: 2,
          })
        }
      >
        Append Nested
      </button>

      <hr />
    </div>
  );
};
