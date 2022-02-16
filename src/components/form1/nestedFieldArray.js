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
          <div key={item.id} style={{ marginLeft: 20, marginTop: "-5px" }}>
            <label>Actors:</label>
            <input
              key={item.id}
              {...register(`objectives.[${nestIndex}].actors[${k}].actor`)}
              defaultValue={item.actor}
              type="string"
              style={{ marginRight: "25px" }}
            />

            <label style={{ marginTop: "-.25em", lineHeight: "1.35em" }}>
              Preset State:
            </label>
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
          marginLeft: "1.55em",
          marginBottom: "2rem",
          marginTop: "-1.5em",
        }}
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
