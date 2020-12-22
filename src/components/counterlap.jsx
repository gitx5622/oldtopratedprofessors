import React, { useEffect} from 'react';


const Counterlap = () => {

    let up = true;
    let upSales = true;
    let upWriters = true;
    let total = 0;
    let sales = 0;
    let writers = 0;
    let increment = 1;

    const IncrementTotal = () => {
        setInterval(() => {
            if (up === true && total <= 150)
            total += increment
            if (total === 150) {
            up = false;
            }
            document.getElementById('counter').innerHTML = total;
        }, 50)
    }
    const IncrementSales = () => {
        setInterval(() => {
            if (upSales === true && sales <= 8)
            sales += increment
            if (sales === 8) {
            upSales = false;
            }
            document.getElementById('sales').innerHTML = sales;
        }, 1000);
        }
    const IncrementWriters = () => {
        setInterval(() => {
            if (upWriters === true && writers <= 52)
            writers += increment
            if (writers === 52) {
            upWriters = false;
            }
            document.getElementById('writers').innerHTML = writers;
        }, 100)}
        

    useEffect(() => {
        IncrementTotal();
        IncrementSales();
        IncrementWriters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( 
        <div>
            <div class="body-container pt-4 pb-4" style={{backgroundColor:"#344754"}}>
        <div class="container">
        <div class="row" style={{height: "auto", color: "white"}}>
            <div class="col-md-3 col-sm-3 col-xs-12 numbers-items">
                <h1 id="counter" class="numbers-with-commas"
                    style={{fontSize: "60px", fontWeight: "900", textAlign: "center", color:"white"}}>150</h1>
                <h5 style={{textAlign: "center", color:"white"}}>COMPLETED ORDERS</h5>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12 numbers-items">
                <h1 id="sales" class="numbers-with-commas" style={{fontSize: "60px", fontWeight: "900", textAlign: "center", color:"white"}}>52</h1>
                <h5 style={{textAlign: "center", color:"white"}}>ACTIVE WRITERS</h5>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12 numbers-items">
                <h1 style={{fontSize: "60px", fontWeight: "900", textAlign: "center", color:"white"}}>97.64<sup>%</sup></h1>
                <h5 style={{textAlign: "center", color:"white"}}>POSITIVE FEEDBACKS</h5>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12 numbers-items">
                <h1 id="writers" class="numbers-with-commas" style={{fontSize: "60px", fontWeight: "900", textAlign: "center", color:"white"}}>8</h1>
                <h5 style={{textAlign: "center", color:"white"}}>SUPPORT REP</h5>
            </div>
        </div>
    </div>
</div>
        </div>
     );
}
 
export default Counterlap;