import { fromEvent } from 'rxjs'
import { tap ,map} from 'rxjs/operators'

const body = document.querySelector('body');


const progressBar = document.getElementById("progress")

const calcPercent = ( event ) => {

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100;
}


const scroll$ = fromEvent( document, 'scroll');

const progress$ = scroll$.pipe(

    map( calcPercent ),

);

progress$.subscribe( porcentaje => {

  let colorsBar = [
    "red", "blue", "darkblue", "purple",
    "orange", "darkred", "black", "white",
    "green", "magenta", "yellow"
  ]

    progressBar.style.width = `${ porcentaje }%`;

    let rand = Math.ceil((Math.random()*10))

    progressBar.style.backgroundColor= colorsBar[rand]


});
