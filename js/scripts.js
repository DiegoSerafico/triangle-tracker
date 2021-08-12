function isEquilateral(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return true;
  } else {
    return false;
  }
}

function isIsosceles(side1, side2, side3) {
  if (side1 === side2 || side1 === side3 || side2 === side3) {
    return true;
  } else {
    return false;
  }
}

function isScalene (side1, side2, side3) {
  if (side1 === side2 || side1 === side3 || side2 === side3) {
    return true;
  } else {
    return false;
  }
}

function isTriangle (side1, side2, side3) {
  if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
    return false;
  } else {
    return true;
  }
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $("#result").hide();
    const side1 = parseInt($("#side1").val());
    const side2 = parseInt($("#side2").val());
    const side3 = parseInt($("#side3").val());
  });
});