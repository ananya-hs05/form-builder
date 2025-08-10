import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function PreviewPage() {
  const fields = useSelector((state: RootState) => state.form.fields);
  return (
    <div>
      <h2>Preview</h2>
      <form>
        {fields.map(f => (
          <div key={f.id}>
            <label>{f.label}</label>
            <input type="text" />
          </div>
        ))}
      </form>
    </div>
  );
}
