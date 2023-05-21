import { createSlice } from "@reduxjs/toolkit";

const US = {
  idUsuario: null,
  institucion: null,
  rol: null,
  token: null,
  nombre: null,
  apellido: null,
  email: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: US,
  reducers: {
    addUser: (state, action) => {
      state.idUsuario = action.payload.idUsuario;
      state.institucion = action.payload.institucion;
      state.rol = action.payload.rol;
      state.token = action.payload.token;
      state.nombre = action.payload.nombre;
      state.apellido = action.payload.apellido;
      state.email = action.payload.email;
    },
    deleteUser: (state, action) => {
      state.idUsuario = null;
      state.institucion = null;
      state.rol = null;
      state.token = null;
      state.nombre = null;
      state.apellido = null;
      state.email = null;
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
