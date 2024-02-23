import {
    Injectable
}
from '@angular/core';
import {
    BehaviorSubject
}
from 'rxjs';

@Injectable({ providedIn: 'root' }) export class GlobalService {

    constructor() {}

    // user_login data
    private userdata = new BehaviorSubject<any>('');
    public Userdata = this.userdata.asObservable();

    set_userdata(userdata : any) {
        this.userdata.next(userdata);
    }

    // save bag color
    private bagcolor = new BehaviorSubject<any>('');
    public Bagcolor = this.bagcolor.asObservable();

    set_bagcolor(bagcolor : any) {
        this.bagcolor.next(bagcolor);
        console.log(bagcolor);
    }

    // save bag style
    private bagstyle = new BehaviorSubject<any>('');
    public Bagstyle = this.bagstyle.asObservable();

    set_bagstyle(bagstyle : any) {
        this.bagstyle.next(bagstyle);
        console.log(bagstyle);
    }

    // save print color
    private printcolor = new BehaviorSubject<any>('');
    public Printcolor = this.printcolor.asObservable();

    set_printcolor(printcolor : any) {
        this.printcolor.next(printcolor);
        console.log(printcolor);
    }

    // save bag color by pc_id
    private bagcolorbypcid = new BehaviorSubject<any>('');
    public Bagcolorbypcid = this.bagcolorbypcid.asObservable();

    set_bagcolorbypcid(bagcolorbypcid : any) {
        this.bagcolorbypcid.next(bagcolorbypcid);
        console.log(bagcolorbypcid);
    }
    // save print color by c_id
    private printcolorbycid = new BehaviorSubject<any>('');
    public Printcolorbycid = this.printcolorbycid.asObservable();

    set_printcolorbycid(printcolorbycid : any) {
        this.printcolorbycid.next(printcolorbycid);
        console.log(printcolorbycid);
    }
    // save bag size
    private storebagsize = new BehaviorSubject<any>('');
    public Storebagsize = this.storebagsize.asObservable();

    set_storebagsize(storebagsize : any) {
        this.storebagsize.next(storebagsize);
        console.log(storebagsize);
    }
    // save bag size
    private storebagsizedetail = new BehaviorSubject<any>('');
    public Storebagsizedetail = this.storebagsizedetail.asObservable();

    set_storebagsizedetail(storebagsizedetail : any) {
        this.storebagsizedetail.next(storebagsizedetail);
        console.log(storebagsizedetail);
    }
    // save bag size by sid
    private storebagsizebysid = new BehaviorSubject<any>('');
    public Storebagsizebysid = this.storebagsizebysid.asObservable();

    set_storebagsizebysid(storebagsizebysid : any) {
        this.storebagsizebysid.next(storebagsizebysid);
        console.log(storebagsizebysid);
    }
    // save users
    private storeusers = new BehaviorSubject<any>('');
    public Storeusers = this.storeusers.asObservable();

    set_storeusers(storeusers : any) {
        this.storeusers.next(storeusers);
        console.log(storeusers);
    }

    // save bag grade
    private storebagGrade = new BehaviorSubject<any>('');
    public StorebagGrade = this.storebagGrade.asObservable();

    set_storebagGrade(storebagGrade : any) {
        this.storebagGrade.next(storebagGrade);
        console.log(storebagGrade);
    }

    // save in stock bag grade
    private storeinstockbagGrade = new BehaviorSubject<any>('');
    public StoreinstockbagGrade = this.storeinstockbagGrade.asObservable();

    set_storeinstockbagGrade(storeinstockbagGrade : any) {
        this.storeinstockbagGrade.next(storeinstockbagGrade);
        console.log(storeinstockbagGrade);
    }

    // save gsm
    private storegsm = new BehaviorSubject<any>('');
    public Storegsm = this.storegsm.asObservable();

    set_storestoregsm(storegsm : any) {
        this.storegsm.next(storegsm);
        console.log(storegsm);
    }

    // save in stock gsm
    private storeinstockgsm = new BehaviorSubject<any>('');
    public Storeinstockgsm = this.storeinstockgsm.asObservable();

    set_storeinstockgsm(storeinstockgsm : any) {
        this.storeinstockgsm.next(storeinstockgsm);
        console.log(storeinstockgsm);
    }

    // save print rate
    private storeprintrate = new BehaviorSubject<any>('');
    public Storeprintrate = this.storeprintrate.asObservable();

    set_storeprintrate(storeprintrate : any) {
        this.storeprintrate.next(storeprintrate);
        console.log(storeprintrate);
    }
    // save rates
    private storerates = new BehaviorSubject<any>('');
    public Storerates = this.storerates.asObservable();

    set_storerates(storerates : any) {
        this.storerates.next(storerates);
        console.log(storerates);
    }
    private storestock = new BehaviorSubject<any>('');
    public Storestock = this.storestock.asObservable();

    set_storestock(storestock : any) {
        this.storestock.next(storestock);
        console.log(storestock);
    }
    // save store rate detail by id
    private storeratedetailbyid = new BehaviorSubject<any>('');
    public Storeratedetailbyid = this.storeratedetailbyid.asObservable();

    set_storeratedetailbyid(storeratedetailbyid : any) {
        this.storeratedetailbyid.next(storeratedetailbyid);
        console.log(storeratedetailbyid);
    }

    // save print rates detail by id
    private storeprintratesdetailbyid = new BehaviorSubject<any>('');
    public Storeprintratesdetailbyid = this.storeprintratesdetailbyid.asObservable();

    set_storeprintratesdetailbyid(storeprintratesdetailbyid : any) {
        this.storeprintratesdetailbyid.next(storeprintratesdetailbyid);
        console.log(storeprintratesdetailbyid);
    }
    // save print plate rate
    private storeprintplaterate = new BehaviorSubject<any>('');
    public Storeprintplaterate = this.storeprintplaterate.asObservable();

    set_storeprintplaterate(storeprintplaterate : any) {
        this.storeprintplaterate.next(storeprintplaterate);
        console.log(storeprintplaterate);
    }

    // save order
    private storeorder = new BehaviorSubject<any>('');
    public Storeorder = this.storeorder.asObservable();

    set_storeorder(storeorder : any) {
        this.storeorder.next(storeorder);
        console.log(storeorder);
    }
    // save order detail by oid
    private storeorderdetail = new BehaviorSubject<any>('');
    public Storeorderdetail = this.storeorderdetail.asObservable();

    set_storeorderdetail(storeorderdetail : any) {
        this.storeorderdetail.next(storeorderdetail);
        console.log(storeorderdetail);
    }

    // save handle rate
    private storehandlerate = new BehaviorSubject<any>('');
    public Storehandlerate = this.storehandlerate.asObservable();

    set_storehandlerate(storehandlerate : any) {
        this.storehandlerate.next(storehandlerate);
        console.log(storehandlerate);
    }

    // get reject order
    // private storeshippingdetailbyoid = new BehaviorSubject<any>('');
    // public Storeshippingdetailbyoid = this.storeshippingdetailbyoid.asObservable();

    // set_storeshippingdetailbyoid(storeshippingdetailbyoid : any) {
    //     this.storeshippingdetailbyoid.next(storeshippingdetailbyoid);
    //     console.log(storeshippingdetailbyoid);
    // }
    private getreject = new BehaviorSubject<any>('');
    public Getreject = this.getreject.asObservable();

    set_getreject(getreject : any) {
        this.getreject.next(getreject);
        console.log(getreject);
    }
    
       // get complete order
       private storeshippingdetailbyoid = new BehaviorSubject<any>('');
       public Storeshippingdetailbyoid = this.storeshippingdetailbyoid.asObservable();
   
       set_storeshippingdetailbyoid(storeshippingdetailbyoid : any) {
           this.storeshippingdetailbyoid.next(storeshippingdetailbyoid);
           console.log(storeshippingdetailbyoid);
       }
       private getcomplete = new BehaviorSubject<any>('');
       public GetComplete = this.getreject.asObservable();
   
       set_getcomplete(getreject : any) {
           this.getreject.next(getreject);
           console.log(getreject);
       }
       private getbagstbyid = new BehaviorSubject<any>('');
       public Getbagstbyid = this.getbagstbyid.asObservable();
   
       set_getbagstbyid(getbagstbyid : any) {
           this.getbagstbyid.next(getbagstbyid);
           console.log(getbagstbyid);
       }
       private getpending = new BehaviorSubject<any>('');
       public Getpending = this.getpending.asObservable();
   
       set_getpending(getpending : any) {
           this.getpending.next(getpending);
           console.log(getpending);
       }
       private getprocessing = new BehaviorSubject<any>('');
       public Getprocessing = this.getprocessing.asObservable();
   
       set_getprocessing(getprocessing : any) {
           this.getprocessing.next(getprocessing);
           console.log(getprocessing);
       }
       private getgraphdata = new BehaviorSubject<any>('');
       public Getgraphdata = this.getgraphdata.asObservable();
   
       set_getgraphdata(getgraphdata : any) {
           this.getgraphdata.next(getgraphdata);
           console.log(getgraphdata);
       }
}
