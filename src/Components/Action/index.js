export const searchFilter = (data)=>{
    return {
        type:"GLOBALSEARCH",
        payload:data
    }
}

export const changeBackground = ()=>{
    return{
        type:"CHANGEBACKGROUND"
    }
}