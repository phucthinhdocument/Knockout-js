function ShowUTCDate()
{

}
function AppViewModel() {
    this.num1=ko.observable(10);
    this.num2=ko.observable(20);
    this.table2num = ko.observable(true);  // hidden initially
  
    this.resultVis=ko.observable(false);
    this.ketqua=ko.observable(0);
    this.historyList=ko.observableArray();
    
    
    this.show = function(data,event){
        if(event.target.id==="x")
        this.table2num(false);
        if(event.target.id==="no")
        this.table2num(true);
    }
   

    this.pheptinh=function(data,event){
        var dNow = new Date();
        var utc = new Date(dNow.getTime() + dNow.getTimezoneOffset() * 60000)
        var utcdate= (utc.getMonth()+1) + '/' + utc.getDate() + '/' + utc.getFullYear() + ' ' + utc.getHours() + ':' + utc.getMinutes();
        if(this.historyList().length>5){
            this.historyList.removeAll() ;

        }
                if(event.target.id==="cong"){
                    this.ketqua(Number(this.num1())+Number(this.num2()));
                    this.historyList.push({cacu:this.num1()+" + "+this.num2()+" = "+this.ketqua(),date:utcdate});
                    
                    
                }
                if(event.target.id==="tru"){
                    this.ketqua(Number(this.num1())-Number(this.num2()));
                    this.historyList.push({cacu:this.num1()+" - "+this.num2()+" = "+this.ketqua(),date:utcdate});
                }
                if(event.target.id==="nhan"){
                    this.ketqua(Number(this.num1())*Number(this.num2()));  
                    this.historyList.push({cacu:this.num1()+" x "+this.num2()+" = "+this.ketqua(),date:utcdate});
                }
                if(event.target.id==="chia"){
                    this.ketqua(Number(this.num1())/Number(this.num2()));
                    this.historyList.push({cacu:this.num1()+" / "+this.num2()+" = "+this.ketqua(),date:utcdate});
                }
                this.resultVis(true);
    }
 }
 
 
 ko.applyBindings(new AppViewModel());                  //  shown now