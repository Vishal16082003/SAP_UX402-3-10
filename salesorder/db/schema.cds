namespace my.sales;
using{
  managed
} from '@sap/cds/common';
entity SalesOrders:  managed{
   key SalesOrderNo :String(20);
    CustomerName : String(20);
    Amount : Decimal(15,2);
    Currency :String(5);
    Status : String(20);
    Remark :String(100);
}