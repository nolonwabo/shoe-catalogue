var shoeTemp = document.querySelector('.shoeTemplate').innerHTML;
var shoesTemp = Handlebars.compile(shoeTemp);

var shoeList = document.querySelector('.shoesList').innerHTML;
var shoesList = Handlebars.compile(shoeList);

var filter = document.querySelector('.shoeFilter').innerHTML;
var filters = Handlebars.compile(filter);

var shoeColor = document.querySelector('.color');
var shoeSize = document.querySelector('.size');
var shoeBrand = document.querySelector('.brand');

var filterButton = document.querySelector('.filterBtn').innerHTML;

var table = document.querySelector('.output');
var dropdowns = document.querySelector('.dropdown');
var filterV = document.querySelector('.filters');
var shoesDataList = [{
    color: 'Red',
    size: 3,
    price: 1000,
    brand: 'Nike',
    in_stock: 5
  }, {
    color: 'Black',
    size: 3,
    price: 650,
    brand: 'Nike',
    in_stock: 10
  },
  {
    color: 'Brown',
    size: 3,
    price: 700,
    brand: 'Nike',
    in_stock: 15
  }
];

var add = document.querySelector('.add');
var show = document.querySelector('.show');
var filt = document.querySelector('.filterBtn');

function colorFunction() {
  var colorDropdown = [];
  var colorMap = {};
  for (var i = 0; i < shoesDataList.length; i++) {
    var loop = shoesDataList[i]
    if (colorMap[loop.color] === undefined) {
      colorMap[loop.color] = loop.color;
      colorDropdown.push(loop.color);
    }
  }
  console.log(colorDropdown);
  document.querySelector('.colorDisplay').innerHTML = shoesTemp({
    color: colorDropdown
  })
}
colorFunction();

function sizeFunction() {
  var sizeDropdown = [];
  var sizeMap = {};
  for (var i = 0; i < shoesDataList.length; i++) {
    var loopSize = shoesDataList[i]
    if (sizeMap[loopSize.size] === undefined) {
      sizeMap[loopSize.size] = loopSize.size;
      sizeDropdown.push(loopSize.size);
    }
  }
  document.querySelector('.sizeDisplay').innerHTML = shoesTemp({
    size: sizeDropdown
  })
}
sizeFunction();

function brandFunction() {
  var brandDropdown = [];
  var brandMap = {};
  for (var i = 0; i < shoesDataList.length; i++) {
    var loopBrand = shoesDataList[i]
    if (brandMap[loopBrand.brand] === undefined) {
      brandMap[loopBrand.brand] = loopBrand.brand;
      brandDropdown.push(loopBrand.brand);
    }
  }
  document.querySelector('.brandDiplay').innerHTML = shoesTemp({
    brand: brandDropdown
  })
}
brandFunction();
add.addEventListener('click', function() {
  var colorV = document.querySelector('.colors');
  var sizeV = document.querySelector('.sizes');
  var brandV = document.querySelector('.brands');
  var priceV = document.querySelector('.prices');
  var stockV = document.querySelector('.stocks');

  if (colorName !== '' && sizeName !== '' && brandName !== '' && priceName !== '' && stockName !== '') {
    var colorName = colorV.value;
    var sizeName = sizeV.value;
    var brandName = brandV.value;
    var priceName = priceV.value;
    var stockName = stockV.value;

    var shoesing = {
      color: colorV.value,
      size: sizeV.value,
      price: priceV.value,
      brand: brandV.value,
      in_stock: stockV.value
    };

    shoesDataList.push(shoesing);

  } else if (colorName === undefined && sizeName === undefined && brandName === undefined && priceName === undefined && stockName === undefined) {

    var shoesing = {
      color: color.value,
      size: size.value,
      price: price.value,
      brand: brand.value,
      in_stock: in_stock.value
    };
}
  else {
    shoesing.in_stock += Number(in_stock.value);
}

shoesDataList.push(shoesing);
});
    //displayData(shoesDataList);
function displayData(shoesDataList) {
  dropdowns.innerHTML = shoesList({
    shoesing: shoesDataList
  });
}
function displayData(shoesDataList) {
  table.innerHTML = shoesList({
    shoesing: shoesDataList
  });
  colorFunction();
  sizeFunction();
  brandFunction();
};
var colorDisplay = document.querySelector('.colorDisplay');
colorDisplay.addEventListener('change', function(evt) {
  var pushFilter = [];
  console.log(evt.target.value);

  for (var i = 0; i < shoesDataList.length; i++) {
    console.log(shoesDataList[i].color);
    if (evt.target.value === shoesDataList[i].color) {
      pushFilter.push(shoesDataList[i]);
    }
  }
  console.log(pushFilter);

  filterV.innerHTML = filters({
    shoes: pushFilter
  });
});
show.addEventListener('click', function() {
      displayData(shoesDataList);
    });
