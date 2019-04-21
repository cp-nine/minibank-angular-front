import { Account } from './account-model';

export class Customer {

    customerNumber: string;
    fname: string;
    lname: string;
    placeOb: string;
    brithDate: string;
    gender: string;
    address: string;
    job: string;
    rangeSalary: string;
    phoneNumber: string;
    email: string;
    username: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    flagDelete: number;
    accounts: Account[];

    constructor() {
        
    }
}