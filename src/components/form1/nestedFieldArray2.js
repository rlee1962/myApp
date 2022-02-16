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
          <div key={item.id} style={{ marginLeft: 20 }}>
            <label>Actors:</label>
            <input
              key={item.id}
              {...register(`objectives.[${nestIndex}].actors[${k}].actor`)}
              defaultValue={item.actor}
              style={{ marginRight: "25px" }}
            />

            <label>Preset State:</label>
            <input
              key={item.id}
              {...register(
                `objectives.[${nestIndex}].actors[${k}].preSetState`
              )}
              defaultValue={item.preSetState}
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
        style={{ marginLeft: "1.55em", marginBottom: "2rem" }}
        type="button"
        onClick={() =>
          append({
            actor: "actor",
            presetState: 0,
          })
        }
      >
        Append Nested
      </button>

      <hr />
    </div>
  );
};
