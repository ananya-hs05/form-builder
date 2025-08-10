import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function MyFormsPage() {
  const saved = useSelector((state: RootState) => state.form.savedForms);
  return (
    <div>
      <h2>My Forms</h2>
      <ul>
        {saved.map(f => (
          <li key={f.id}>{f.name} ({f.fields.length} fields)</li>
        ))}
      </ul>
    </div>
  );
}
