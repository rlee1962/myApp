import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import styled from "styled-components";
import "./../styles/tailwind.css";
import jsonStore from "./../common/jsonsStore";
import updateAction from "./../common/updateAction";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

export default () => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, control, register, reset } = useForm({
    defaultValues: state.ase1Preflight,
  });

  const {
    fields: taskFields,
    append: taskAppend,
    remove: taskRemove,
  } = useFieldArray({ control, name: "taskLevels" });

  const {
    fields: supportFields,
    append: supportAppend,
    remove: supportRemove,
  } = useFieldArray({ control, name: "supportingLevels" });

  const history = useHistory();
  const onSubmit = (data) => {
    action(data);
    history.push("/step2");
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Step-1</h3>
        <label>
          Task Name:
          <input {...register("taskName")} />
        </label>
        <label>
          Task Description:
          <input {...register("taskDescription")} />
        </label>
        <label>
          Directory:
          <input {...register("directory")} />
        </label>
        <label>
          Supported Sim Modes:
          <input {...register("supportedSimModes")} />
        </label>

        <label
          style={{ marginLeft: "-1.55em", textAlign: "left", width: "74%" }}
        >
          Task Levels:
        </label>
        {taskFields.map((field, index) => (
          <div key={field.id} id="arrayTextInput" className="flex-container">
            <input
              key={field.id} // important to include key with field's id
              {...register(`taskLevels.${index}`)}
              // {...register(`taskLevels[${index}]`)}
              style={{ maxWidth: "70%", marginRight: ".75em" }}
            />
            <div className="flex-items2">
              <button type="button" onClick={() => taskRemove(index)}>
                <FiMinusCircle
                  id="deletefield"
                  style={{
                    width: "1.55em",
                    height: "1.55em",
                    marginRight: "0.25em",
                  }}
                />
              </button>
            </div>
            <div className="flex-items2">
              <button
                type="button"
                onClick={() => {
                  taskAppend(["Text goes here"]);
                }}
              >
                <FiPlusCircle
                  id="addfield"
                  style={{
                    width: "1.55em",
                    height: "1.55em",
                  }}
                />
              </button>
            </div>
          </div>
        ))}

        <label
          style={{ marginLeft: "-1.55em", textAlign: "left", width: "74%" }}
        >
          Supporting Levels:
        </label>
        {supportFields.map((field, index) => (
          <div key={field.id} id="arrayTextInput" className="flex-container">
            <input
              key={field.id} // important to include key with field's id
              // {...register(`supportingLevel.${index}supportingLevels`)}
              {...register(`supportingLevels.${index}`)}
              style={{ maxWidth: "70%", marginRight: ".75em" }}
            />

            <div className="flex-items2">
              <button type="button" onClick={() => supportRemove(index)}>
                <FiMinusCircle
                  id="deletefield"
                  style={{
                    width: "1.55em",
                    height: "1.55em",
                    marginRight: "0.25em",
                  }}
                />
              </button>
            </div>
            <div className="flex-items2">
              <button
                type="button"
                onClick={() => {
                  supportAppend(["Text goes here"]);
                }}
              >
                <FiPlusCircle
                  id="addfield"
                  style={{
                    width: "1.55em",
                    height: "1.55em",
                  }}
                />
              </button>
            </div>
          </div>
        ))}

        <div className="flex-items">
          <CheckSpacer />
          <div
            className="pretty p-default p-thick"
            style={{ marginTop: ".5em", marginBottom: ".75em" }}
          >
            <input {...register("forcedLinear")} type="checkbox" />
            <div className="state">
              <label className="checkLabel" style={{ paddingTop: "3px" }}>
                Forced Linear
              </label>
            </div>
          </div>
          <CheckSpacer />
        </div>

        <input type="submit" value="&#x226A; Submit &#x226B;" />

        <input
          type="button"
          className="resetButton"
          value="Reset Selection"
          onClick={() => {
            reset(
              {
                control,
              },
              {
                keepErrors: true,
                keepDirty: false,
                keepIsSubmitted: false,
                keepTouched: false,
                keepIsValid: false,
                keepSubmitCount: false,
              }
            );
            window.STATE_MACHINE_RESET();
            window.location.reload();
          }}
        />
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
`;
const CheckSpacer = styled.div`
  border-top: 0px inset #10101080;
  width: 100%;
  margin: 2px 0;
`;
