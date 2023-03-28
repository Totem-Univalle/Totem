import { useState } from 'react';
import './AdminForm.css';


function AdminRegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [institution, setInstitution] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Realizar la lógica de registro del administrador aquí
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">Nombre:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />

      <label htmlFor="lastName">Apellido:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="role">Rol:</label>
      <input
        type="text"
        id="role"
        value={role}
        onChange={(event) => setRole(event.target.value)}
      />

      <label htmlFor="institution">Institución:</label>
      <select
        id="institution"
        value={institution}
        onChange={(event) => setInstitution(event.target.value)}
      >
        <option value="">Selecciona una institución</option>
        <option value="institucion1">Institución 1</option>
        <option value="institucion2">Institución 2</option>
        <option value="institucion3">Institución 3</option>
      </select>

      <button type="submit">Registrar</button>
    </form>
  );
}

export default AdminRegistrationForm;
