import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState=[{id:123, name:'Mango', number:'123456'}];

 const contactsSlice=createSlice({
    name:'contacts',
    initialState:initialState,
    redusers:{
    addContact:{
    reducer(state,action){
        state.push(action.payload)},
        prepare(text) {
            return {
              payload: {
                text,
                id: nanoid(),
                
              }}},

    },
    deleteContact(state, action) {
        const index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);},
      },

    
 })


 export const {addContact, deleteContact}=contactsSlice.actions;
 export const contactsReducer=contactsSlice.reducer;