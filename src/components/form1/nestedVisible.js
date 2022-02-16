import React from "react";
import { useFieldArray } from "react-hook-form";
import styled from "styled-components";

export default ({ nestIndex, control, register, index }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: "objectives",
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div
            key={item.id}
            style={{
              height: "50px",
              marginTop: "-4em",
            }}
          >
            <div className="flex-items">
              <CheckSpacer />
              <div className="pretty p-default p-thick">
                <input
                  key={item.id}
                  {...register(`objectives.${nestIndex}.invisible`)}
                  defaultValue={item.invisible}
                  type="checkbox"
                />
                <div className="state">
                  <label className="checkLabel">Invisible</label>
                </div>
              </div>
              <CheckSpacer />
            </div>

            <div className="flex-items">
              <CheckSpacer />
              <div className="pretty p-default p-thick">
                <input
                  key={item.id}
                  {...register(`objectives.${nestIndex}.hidden`)}
                  defaultValue={item.hidden}
                  type="checkbox"
                />
                <div className="state">
                  <label className="checkLabel">Hidden</label>
                </div>
              </div>
              <CheckSpacer />
            </div>

            <button
              className="buttonMinus"
              style={{
                width: "150px",
                height: "20px",
                position: "relative",
                left: "47%",
                marginTop: "5px",
                marginBottom: "5px",
              }}
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

const CheckSpacer = styled.div`
  border-top: 0px inset #10101080;
  width: 100%;
  margin: 2px 0;
`;
