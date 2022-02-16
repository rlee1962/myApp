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
          <div key={item.id} style={{ marginTop: "0px", marginBottom: "-1px" }}>
            <label>sub Description:</label>
            <input
              key={item.id}
              //   {...register(`objectives.[${nestIndex}].subDescription[${k}]`)}
              {...register(`objectives.${nestIndex}.subDescription`)}
              defaultValue={item.subDescription}
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
