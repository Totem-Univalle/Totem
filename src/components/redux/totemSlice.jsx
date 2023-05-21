import { createSlice } from "@reduxjs/toolkit";

const t = {
    idTotem: null,
    nombre: null,
    urlLogo: null,
    numeroPlantilla: null
}

export const totemSlice = createSlice({
  name: "totem",
  initialState: t,
  reducers: {
    addTotem: (state, action) => {
        state.idTotem = action.payload.idTotem;
        state.nombre = action.payload.nombre;
        state.urlLogo = action.payload.urlLogo;
        state.numeroPlantilla = action.payload.numeroPlantilla;
    },
    deleteTotem: (state, action) => {
      state.idTotem = null,
      state.nombre = null,
      state.urlLogo = null,
      state.numeroPlantilla = null
    },

  },
});

export const { addTotem, deleteTotem } = totemSlice.actions;
export default totemSlice.reducer;