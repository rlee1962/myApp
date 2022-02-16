import React from "react";
import { useFieldArray } from "react-hook-form";
import styled from "styled-components";

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
              <h2 className="label-label" style={{ marginBottom: "3em" }}>
                Actor Controls
              </h2>{" "}
              Actor:
            </label>
            <input
              key={item.id}
              {...register(
                `objectives.[${nestIndex}].defaultActors[${k}].actor`
              )}
              defaultValue={item.actor}
              style={{ marginRight: "25px" }}
            />

            <label>Slot UID:</label>
            <input
              key={item.id}
              {...register(
                `objectives.[${nestIndex}].defaultActors[${k}].slotuid`
              )}
              defaultValue={item.slotuid}
              style={{ marginRight: "25px" }}
            />

            <label>Pre Controls: Cmd:</label>
            <input
              key={item.id}
              {...register(
                `objectives.[${nestIndex}].defaultActors[${k}].preCmd`
              )}
              defaultValue={item.preCmd}
              style={{ marginRight: "25px" }}
            />

            <div className="flex-items">
              <CheckSpacer />
              <div className="pretty p-default p-thick">
                <input
                  key={item.id}
                  {...register(
                    `objectives.[${nestIndex}].defaultActors[${k}].preArgs`
                  )}
                  defaultValue={item.preArgs}
                  type="checkbox"
                  style={{ marginRight: "25px" }}
                />
                <div className="state">
                  <label className="checkLabel">Pre Args:</label>
                </div>
              </div>
              <CheckSpacer />
            </div>

            <label>Post Controls: Cmd:</label>
            <input
              key={item.id}
              {...register(
                `objectives.[${nestIndex}].defaultActors[${k}].postCmd`
              )}
              defaultValue={item.postCmd}
              style={{ marginRight: "25px" }}
            />

            <div className="flex-items">
              <CheckSpacer />
              <div className="pretty p-default p-thick">
                <input
                  key={item.id}
                  {...register(
                    `objectives.[${nestIndex}].defaultActors[${k}].postArgs`
                  )}
                  defaultValue={item.postArgs}
                  type="checkbox"
                  style={{ marginRight: "25px" }}
                />
                <div className="state">
                  <label className="checkLabel">Post Args:</label>
                </div>
              </div>
              <CheckSpacer />
            </div>

            <label>Wait State:</label>
            <input
              key={item.id}
              {...register(
                `objectives.[${nestIndex}].defaultActors[${k}].waitState`
              )}
              defaultValue={item.waitState}
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
            actor: "HSDC A Data",
            slotuid: "HSDC A Data Slot",
            preCmd: "Enable",
            preArgs: true,
            postCmd: "Enable",
            waitState: 1,
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
