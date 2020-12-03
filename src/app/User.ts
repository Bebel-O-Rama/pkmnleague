


export class User {
  
    private static instance : User;

    public static instanciate() : void {
        User.instance =  User.getDefaultUser();
    }

    public static getInstance() : User {
        if (!User.instance) 
            User.instanciate();

        return User.instance;
    }
 
    static ERROR_NAME = "ERROR_NAME_NOT_FOUND";
    nom = User.ERROR_NAME;
    estConn = false;
  
    constructor(name:string, connState:boolean) {
      this.estConn = connState;
      this.nom = name;
    }
  
    public static getDefaultUser():User {
      let estConn = false;
      let nom = User.ERROR_NAME;
      return new User(nom, estConn)
    }

    public static getNewUser(name:string, connState:boolean):User { return new User(name, connState); }
  
    public estCo():boolean { return this.estConn; }
  
    public updateNom(nouvNom:string):void { this.nom = nouvNom; }
  
    public getNom():string { return this.nom; }
  
    public changeCo():void { this.estConn = !(this.estConn); }

    public static Update(nom:string, estConn:boolean) {
        if (estConn != User.getInstance().estCo())
          User.getInstance().changeCo();
        User.getInstance().updateNom(nom);
      }
  }
  