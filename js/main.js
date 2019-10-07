let sliderList = document.querySelectorAll(".sliderContainer");

function sliderChanger(elements) {
    elements.forEach(function (item) {



        let buttonNext = item.querySelector(".goRight");
        let buttonPrev = item.querySelector(".goLeft");


        let arrayList = [];
        let counter = 0;
        let list = item.querySelectorAll(".slider");
        list.forEach(function (item) {
            arrayList.push(item)
        });

        arrayList[counter].classList.add("visible");

        buttonNext.addEventListener("click", function (e) {
            if(counter === arrayList.length-1){
                arrayList[counter].classList.remove("visible");
                counter = 0;
                arrayList[counter].classList.add("visible")
            }
            else {
                console.log("next");
                arrayList[counter].classList.remove("visible");
                counter++;
                arrayList[counter].classList.add("visible")
            }
        });
        buttonPrev.addEventListener("click", function (e) {
            if(!(counter)){
                arrayList[counter].classList.remove("visible");
                counter = arrayList.length - 1;
                arrayList[counter].classList.add("visible")
            } else {
                console.log("prev");
                arrayList[counter].classList.remove("visible");
                counter--;
                arrayList[counter].classList.add("visible")
            }
        });
    })
}
sliderChanger(sliderList)

