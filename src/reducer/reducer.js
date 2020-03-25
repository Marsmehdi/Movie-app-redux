import {SEARCH_FILM,RATE_FILM,ADD_FILM,DELETE_FILM,EDIT_FILM,PATH_HANDLER} from '../actions/action'
import { v4 as uuidv4 } from 'uuid';
 
const initialState ={films:[ {
      id:uuidv4(),
       lien:"#" ,
       
           scr:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzMYQl-BlRp2PtWgyqqxU9EeCkaFKGBxRgSs-gUPtGT_gTftVz" ,srcset:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzMYQl-BlRp2PtWgyqqxU9EeCkaFKGBxRgSs-gUPtGT_gTftVz 1x, https://www.docplanner.com/images/warsaw@2x.png 2x",
      
           txt:'Escobar',
           tab:["fa fa-star checked ",
           "fa fa-star checked",
           "fa fa-star checked",
           "fa fa-star",
           "fa fa-star "],
           idx:2,
           trailer: "https://www.youtube.com/embed/iOkL8AVAn4U"
           
    
     },{
         id:uuidv4(),
      lien:"#" ,
      
           scr:"https://fr.web.img6.acsta.net/c_224_335_50_50/pictures/20/01/23/16/45/4653965.jpg" ,srcset:"https://fr.web.img6.acsta.net/c_224_335_50_50/pictures/20/01/23/16/45/4653965.jpg 1x",
      
       
           txt:'The boy',tab:["fa fa-star checked ",
           "fa fa-star checked",
           "fa fa-star",
           "fa fa-star",
           "fa fa-star "], idx:1,
           trailer: "https://www.youtube.com/embed/e1ECkkuw1gc"
     },{
         id:uuidv4(),
       lien:"#" ,
        scr:"https://fr.web.img2.acsta.net/pictures/19/10/25/11/18/5224976.jpg", srcset:"https://fr.web.img2.acsta.net/pictures/19/10/25/11/18/5224976.jpg 1x",
      
           txt:'Titanic',tab:["fa fa-star checked ",
           "fa fa-star checked ",
           "fa fa-star",
           "fa fa-star",
           "fa fa-star "], idx:1,   trailer: "https://www.youtube.com/embed/b0KYvGa_nN8"
           
     },{
         id:uuidv4(),
       lien:"#" ,
       scr:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQk-Xm6NKrOVOb4IFYklNP3wzrAGNesPEu5mMbRklqq4cyZtijJ", srcset:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQk-Xm6NKrOVOb4IFYklNP3wzrAGNesPEu5mMbRklqq4cyZtijJ 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x",
       
           txt:' The Fighter',
           tab:["fa fa-star checked",
           "fa fa-star checked",
           "fa fa-star checked",
           "fa fa-star",
           "fa fa-star "], idx:2,   trailer: "https://www.youtube.com/embed/1_zijS_UAtw"
           
     },{id:uuidv4(),
        lien:"#" ,
       scr:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMIo1U7_YXiESdvmcTWSnmrNtLw-R3cng-dK2s-xPIPYbua2zy", srcset:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMIo1U7_YXiESdvmcTWSnmrNtLw-R3cng-dK2s-xPIPYbua2zy 1x, https://www.docplanner.com/images/curitiba@2x.png 2x",
       
           txt:'Joker',
           tab:["fa fa-star checked",
           "fa fa-star checked",
           "fa fa-star",
           "fa fa-star",
           "fa fa-star "], idx:1,   trailer: "https://www.youtube.com/embed/zAGVQLHvwOY"
       
     }
     
    ],Searsh: "",star:0,pathindex: 0}


const Reducer =(state =initialState,action)=>{
    switch (action.type){
            case SEARCH_FILM :
                
            return {...state,Searsh:action.a}

            case RATE_FILM :
                return {...state,star:action.a}

            case ADD_FILM:
                return {
                    ...state,
                    films:(action.a)
                  };
 
            case DELETE_FILM:
                return{
                    ...state,
                    films: state.films.filter(el => (el.id) !== (action.a))
                  };
               
        
                case EDIT_FILM:
                    return    {  ...state,
                    films: state.films.map(action.a)};
     
                 
                    case PATH_HANDLER:
                        return {
                          ...state,
                          pathindex: action.index
                        };
                  
                    
                  
                 
        default :
        return state
    }
}
export default Reducer