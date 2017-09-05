import React from "react";
import render from "react-dom";




    export const swapClass=function (element,Class1,Class2){

        if(element.classList.contains(Class1)){
            element.classList.remove(Class1);
            element.classList.add(Class2);
        }
        else{
            element.classList.remove(Class2);
            element.classList.add(Class1);
        }
        
    }

     
    



  