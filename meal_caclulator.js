
function Diner(name,listOfDishes,cost) {
	
	this.name = name;

	this.listOfDishes = listOfDishes;

	this.cost = cost;

	this.TAX = 1.08875;

	this.total = 0;

	this.tax = 0;

	this.tip = 0;


}

Diner.prototype.addCost = function() {
	
	for(var i = 0; i < this.cost.length; i++) {
		
		this.total = this.total + this.cost[i];
	}
}

Diner.prototype.addTax = function() {
		
	this.tax = (this.total * this.TAX) - this.total;
	
}

Diner.prototype.addTip = function(){
	
	this.tip = (this.total + this.tax) * .20

}

function Bill(){

	Diner.call(this);
	this.dinerList=[];
	this.totalBill = 0;
	this.totalTip = 0;
}

Bill.prototype = Object.create(Diner.prototype);

Bill.prototype.constructor = Bill;

Bill.prototype.dinerTotal = function(){

	for(var i = 0; i < this.dinerList.length; i++) {
		
		this.totalBill += this.dinerList[i].tax+this.dinerList[i].total;
	}
}
Bill.prototype.dinerTip = function() {
		
	for(var i = 0; i < this.dinerList.length; i++) {
		
		this.totalTip += this.dinerList[i].tip;
	}
}

Bill.prototype.breakdown = function() {

	for(var i = 0; i < this.dinerList.length; i++){
		
		console.log("Name: "+ this.dinerList[i].name +" "+"\nTotal: "+this.dinerList[i].total+" "+"\nTax: "+this.dinerList[i].tax.toFixed(2)+" "+"\nTip: "+this.dinerList[i].tip.toFixed(2)+"\n" );
	}

	 console.log('Total for diners ' + this.totalBill.toFixed(2));

	 console.log('Total tip from diners ' + this.totalTip.toFixed(2));

}

Bill.prototype.init = function(diner1,diner2,diner3){
	
	this.dinerList.push(diner1);
	this.dinerList.push(diner2);
	this.dinerList.push(diner3);
	
	for(var i = 0; i < this.dinerList.length;i++){
		this.dinerList[i].addCost();
		this.dinerList[i].addTax();
		this.dinerList[i].addTip();
	}

}

var jesus = new Diner('jesus',['fish','chicken'],[25.00,56.00]);

var olivia = new Diner('olivia',['chicken','rice'],[12.00,8.00]);

var fred = new Diner('fred',['pizza','chciken'],[5.00,12.00]);

var bill = new Bill();

bill.init(jesus,olivia,fred);

bill.dinerTotal();

bill.dinerTip();

bill.breakdown(bill);

















