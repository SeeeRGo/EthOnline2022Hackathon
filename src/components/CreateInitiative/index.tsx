import { Button, TextField } from '@mui/material';
import { v4 as uuid } from 'uuid';
import React, { useReducer, useState } from 'react';
import { createInitiative } from '../../api';

enum ActionKind {
  ADD_OPTION = "add_option",
  REMOVE_OPTION = "remove_option",
  UPDATE_OPTION = "update_option",
}

interface InitiativeOption {
  id: string;
  name: string;
}

type Action = {
  type: ActionKind;
  payload?: InitiativeOption;
};



type State = InitiativeOption[];
const initialState: InitiativeOption[] = [];

function optionsReducer(state: State, action: Action) {
  switch (action.type) {
    case ActionKind.ADD_OPTION:
      return [...state, { id: uuid(), name: '' }];
    case ActionKind.REMOVE_OPTION:
      return state.filter(option => option.id !== action.payload?.id);
    case ActionKind.UPDATE_OPTION:
      return state.map(option => {
        if(option.id !== action.payload?.id) {
          return option
        }
        return action.payload
      })
    default:
      throw new Error();
  }
}

export const CreateInitiative = () => {
  const [description, setDescription] = useState('')
  const [state, dispatch] = useReducer(optionsReducer, initialState);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>New Initiative</p>
        <TextField
          label="Initiative description"
          multiline
          rows={4}
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        {state.map((option, i) => (
          <>
            <TextField
              label={`Option ${i + 1}`}
              value={option.name}
              onChange={(ev) =>
                dispatch({
                  type: ActionKind.UPDATE_OPTION,
                  payload: { id: option.id, name: ev.target.value },
                })
              }
            />
            <Button
              onClick={() =>
                dispatch({
                  type: ActionKind.REMOVE_OPTION,
                  payload: { id: option.id, name: "" },
                })
              }
            >
              Remove Option
            </Button>
          </>
        ))}
        <Button onClick={() => dispatch({ type: ActionKind.ADD_OPTION })}>
          Add Option
        </Button>
      </div>
      <Button
        onClick={() =>
          createInitiative(
            state.map(({ name }) => name),
            description
          )
        }
      >
        Submit Form
      </Button>
    </div>
  );
}
