import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addField, saveForm, RootState } from '../store';

export default function CreateFormPage() {
  const dispatch = useDispatch();
  const fields = useSelector((state: RootState) => state.form.fields);

  return (
    <div>
      <h2>Create Form</h2>
      <button onClick={() => dispatch(addField('New Field'))}>Add Field</button>
      <ul>
        {fields.map(f => <li key={f.id}>{f.label}</li>)}
      </ul>
      <button onClick={() => dispatch(saveForm(prompt('Form name?') || 'Untitled'))}>
        Save Form
      </button>
    </div>
  );
}
