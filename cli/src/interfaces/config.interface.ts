export interface TableInterface {
    name: string;
    route: string;
    relations: RelationInterface[];
}

export interface RelationInterface{
    key: string;
    child: string;
}
  
