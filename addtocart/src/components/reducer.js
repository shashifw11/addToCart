export const reducer= (state , action)=>{
     if(action.type === "REMOVE_ITEM"){
        return {...state , 
               item : state.item.filter((el)=>{
                     return el.id !== action.payload
               }) 
        }
     } 

     if(action.type === "CLEAR_CART"){
        return {...state , item : []} ;  
     }

     if(action.type === "INCREMENT"){
        let updatedcart = state.item.map((curElem)=>{
            if(curElem.id === action.payload){
                return {...curElem , quantity : curElem.quantity + 1}
            } 
             return curElem
        })
        return {...state , item:updatedcart}
     } 
     if(action.type === "DECREMENT"){
        let updatedcart = state.item.map((curElem)=>{
            if(curElem.id === action.payload){
                return {...curElem , quantity : curElem.quantity - 1}
            } 
          
             return curElem
        }).filter((curElem)=>{
            return curElem.quantity !== 0 ; 
        })
        return {...state , item:updatedcart}
     } 

     if(action.type === "GET_TOTAL"){
        let {totalItem , totalAmount} = state.item.reduce((ac,value)=>{
             let {price,quantity} = value
             let updatedTotalAmount = price*quantity
              ac.totalItem += quantity 
              ac.totalAmount += updatedTotalAmount
             return ac 
        } , {
            totalItem : 0  , 
            totalAmount : 0
        })
         return {...state , totalItem , totalAmount }
     }
          return state ; 
}