export class Menu {

  public id: number;
  public menuName: string;
  public explanation: string;
  
  constructor(jsonitem) {
    this.id = jsonitem.id;
    this.menuName = jsonitem.menuName;
    this.explanation = jsonitem.explanation;    
  }

}
