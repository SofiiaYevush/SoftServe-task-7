const windowFeatures = "width=300,height=300";
const secondWidth = 500;
const secondHeight = 500;
const x = 200;
const y = 200;

const newWindow = window.open('', '_blank', windowFeatures);

setTimeout(() => {
    newWindow.resizeTo(secondWidth, secondHeight);
    setTimeout(() => { 
        newWindow.moveTo(x, y);
        setTimeout(() => {
            newWindow.close();
        }, "2000");
  }, "2000");
}, "2000");
