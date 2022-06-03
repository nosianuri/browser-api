console.log('I am here');
// alert('Ma is coming!!')

const maComing = () => {
    alert('Amuu is coming. Open the book');
}
const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('amake fee ta bkash kore de');
    }
    else {
        console.log('DGM !!! Door e giya mor!!!');
    }
}
const askName = () => {
    const name = prompt('What is your name?');
    console.log(name);
}