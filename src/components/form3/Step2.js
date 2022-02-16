import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import FieldArray from "./fieldArray";
import { useStateMachine } from "little-state-machine";
import styled from "styled-components";
import "./../styles/tailwind.css";
import jsonStore from "./../common/jsonsStore";
import updateAction from "./../common/updateAction";

const Step2 = (props) => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    history.push("/step2");
  }, []);

  const { state, action } = useStateMachine(updateAction);
  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    reset,
    setValue,
  } = useForm({
    defaultValues: state.floatingMenuEvent,
  });

  const { push } = useHistory();
  const onSubmit = (data) => {
    action(data);
    history.push("/step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Step-2</h3>

      <FieldArray
        {...{
          control,
          register,
          state,
          getValues,
          setValue,
          errors,
        }}
      />

      <button
        className="buttonReset"
        type="button"
        onClick={() => reset(state)}
      >
        Reset
      </button>

      <input type="submit" value="&#x226A; Submit &#x226B;" />
      
    </form>
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
  margin: 5px 5px;
`;

export default Step2;
