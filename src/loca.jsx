import React from "react";
import Header from "./components/header";
import persons from "./api/person.json"
import transactions from './api/transaction.json'
import AuctionDetails from "./components/Auction_details";
import PersonDetails from "./components/person";
import Transactions from "./components/trasction";
import GroupDetails from "./components/grp_details";
import groups from './api/grp_details.json'

const Loca = () => {
    return(
        <Transactions transactions={transactions}/>
    );

}

export default Loca;