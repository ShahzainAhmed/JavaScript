function myFunction() {
    document.write("Hello");
}

myFunction();

function calArea(w, h) {
    var area = w * h;
    document.write("The area is: " + area);
}

calArea(86, 20);

// (86, 20, 7) if used these 3 values while having parameters for only 2, then JS will ignore the third value.