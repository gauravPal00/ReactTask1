const initialstate = {
    list: ["apple", "mango", "banana", "grapes", "watermelon", "Pineapple"],
    filterData :[],
    flag:false
}
export const MainReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "GLOBALSEARCH":
            const data = action.payload;
            let searchvalue = state.list.filter((item, index) => {
                return item.toLocaleLowerCase().includes(data.toLocaleLowerCase())
            })
            return {
                ...state,
                filterData: searchvalue
            }

           case "CHANGEBACKGROUND":
            return{
                ...state,
                flag:!state.flag
            }
           

        default: 
        return state;
    }
}
