import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userd",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            console.log(action)
            state.push(action.payload);
        },
        editUser: (state, action) => {
            console.log(action)
            const { id, nama, email, phone } = action.payload;
            const user = state.find(x => x.id == id)
            if (user) {
                console.log(user)
                user.nama = nama;
                user.email = email;
                user.phone = phone;
            }
        },
        deleteUser: (state, action) => {
            console.log(action)

            const { id } = action.payload;

            const user = state.find(x => x.id == id)
            if (user) {
                return state.filter(f => f.id !== id)
            }

        }
    }
})

export const { addUser, editUser, deleteUser } = userSlice.actions
export default userSlice.reducer;
