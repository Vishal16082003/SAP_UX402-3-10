namespace my.ovp;
using{
    managed
} from '@sap/cds/common';
entity SalesOrders: managed{
   key SalesOrdersNo :String(20);
    CustomerName : String(100);
    Amount : Decimal(15,2);
    Currency :String(5);
    Status : String(20);

}