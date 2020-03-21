import { fromEvent } from 'rxjs'
import { tap ,map} from 'rxjs/operators'

const body = document.querySelector('body');


const progressBar = document.getElementById("progress")
let colorsBar = ["red", "blue", "darkblue", "purple", "orange", "darkred", "black", "white", "green"]

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
    // map( event => calcPercent(event) )
    map( calcPercent ),
    tap( console.log )
);


progress$.subscribe( porcentaje => {

    progressBar.style.width = `${ porcentaje }%`;

});
