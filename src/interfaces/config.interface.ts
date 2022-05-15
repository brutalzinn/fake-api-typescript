export interface ConfigInterface {
    name: string;
    route: string;
    relations: RelationInterface[];
}

export interface RelationInterface{
    key: string;
    child: string;
}
  
