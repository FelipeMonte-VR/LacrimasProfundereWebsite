import React from "react";

function FormularioHTML() {
    return(
        <form>
            <label htmlFor="fname">First name:</label>
            <input type="text" id="fname" name="fname" />
            
            <br/>
            <br/>
            
            <label htmlFor="lname">Last name:</label>
            <input type="text" id="lname" name="lname" />
            
            <br/>

            <input type="button" value="Próximo" />
        </form>
    );
}

export default FormularioHTML;