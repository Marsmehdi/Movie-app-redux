
export const SEARCH_FILM='SEARCH_FILM'
export const SEARCH =(a)=>{
    return {
        type:SEARCH_FILM,
       a
    }
}

export const RATE_FILM='RATE_FILM'
export const RATING =(a)=>{
    return {
        type:RATE_FILM,
       a
    }
}

export const ADD_FILM='ADD_FILM'
export const ADD =(a)=>{
    return {
        type:ADD_FILM,
          a
    }
}
export const DELETE_FILM='DELETE_FILM'
export const DELETE =(a)=>{
    return {
        type:DELETE_FILM,
          a
    }
}

export const EDIT_FILM='EDIT_FILM'
export const EDIT =(a)=>{
    return {
        type:EDIT_FILM,
         a
    }
}

export const PATH_HANDLER = "PATH_HANDLER";
export const pathHandler = index => {
    return {
      type: PATH_HANDLER,
      index
    };
  };
