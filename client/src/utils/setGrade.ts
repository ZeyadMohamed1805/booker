const setGrade = ( rating: number ) => {
    if ( rating > 4 ) return "Excellent";
    else if ( rating > 3 ) return "Good";
    else if ( rating > 2 ) return "Average";
    else return "Poor";
}

export default setGrade;