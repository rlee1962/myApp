import React from "react";
import { useFieldArray } from "react-hook-form";

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
            <label>Duration:</label>
            <input
              key={item.id}
              {...register(`objectives.[${nestIndex}].actors[${k}].duration`)}
              defaultValue={item.duration}
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
            duration: 5 
          })
        }
      >
        Append Nested
      </button>

      <hr />
    </div>
  );
};
