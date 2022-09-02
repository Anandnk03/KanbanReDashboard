var options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};
async function callAPI() {
  //alert("OK THE BUTTON")
  const response = await fetch(
    'http://10.117.63.10/RestServiceMaster/RestService.svc/GetKanbanDashboardbyRe'
  );
  const data = await response.json();
  var fetched = data.GetKanbanDashboardbyReResult;
  /// josn parse codtions
  fetched = JSON.parse(fetched);
  console.log(fetched);

  if (fetched.Area.length > 0) {
    var PlantStock = fetched.Area;
    console.log(PlantStock);
    PlantStock.map((planStock, index) => {
      console.log(planStock.Area);
      $(`#area-${index + 1}`).text(planStock.Area);
      $(`#ps-${index + 1}`).text(planStock.PlannedStock);
    });
  }
  if (fetched.StockTrolley.length > 0) {
    var StockQty = fetched.StockTrolley;
    console.log(StockQty);
    StockQty.map((stockQty, index) => {
      console.log(stockQty.stockqty);
      $(`#sq-${index + 1}`).text(stockQty.stockqty);
      $(`#stc-${index + 1}`).text(stockQty.stocktrolley);
    });
  }

  if (fetched.OpenCard.length > 0) {
    var MovedCard = fetched.OpenCard;
    // console.log(MovedCard)
    MovedCard.map((Card, index) => {
      console.log(Card);
      $(`#mc-${index + 1}`).text(Card.OpenCard);
    });
  }

  if (fetched.DueCard.length > 0) {
    var DueCard = fetched.DueCard;
    console.log(DueCard);
    DueCard.map((Duecard, index) => {
      console.log(Duecard);
      $(`#rc-${index + 1}`).text(Duecard.DueCard);
    });
  }

  if (fetched.EmptyTrolley.length > 0) {
    var EmptyTrolley = fetched.EmptyTrolley;
    console.log(DueCard);
    EmptyTrolley.map((EmptyTrolley, index) => {
      console.log(EmptyTrolley);
      $(`#et-${index + 1}`).text(EmptyTrolley.emptytrolley);
    });
  }
}
callAPI();

var date = new Date().toDateString();
var time = new Date().toLocaleTimeString();
document.getElementById('currentDate').innerHTML += date + '-' + time;
console.log(time);
