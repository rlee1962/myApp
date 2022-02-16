import React from "react";
import { useFieldArray } from "react-hook-form";

export default ({ nestIndex, control, register, index }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: "objectives",
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ position: "relative", top: "-14px" }}>
            <label>Bind Event:</label>
            <input
              key={item.id}
              {...register(`objectives.${nestIndex}.bindEvent`)}
              defaultValue={item.bindEvent}
              style={{ margin: "0 0 1.5em" }}
            />

            <button
              className="buttonMinus"
              style={{ margin: "-1.2em 0 1.5em" }}
              type="button"
              onClick={() => remove(k)}
            >
              Delete Nested
            </button>
          </div>
        );
      })}

      {/* <button
        className="buttonPlus"
        style={{ marginLeft: "0em", marginBottom: "2rem" }}
        type="button"
        onClick={() => append(["Text goes here"])}
      >
        Append Nested
      </button> */}

      <hr />
    </div>
  );
};
