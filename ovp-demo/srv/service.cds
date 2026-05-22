using  my.ovp as db  from '../db/schema';

    service CatalogService{

    entity SalesOrders 
        as projection on db.SalesOrders;
}
