
// access to expense-items [add the type]
// Get the list of unique payee names [Rahul, Ramesh]
// Get the contributing amount for a given payee (payee name)
// Get the total expense
// Table to show the data

// Include this component in the ExpenseTrackerApp

import {Table} from "react-bootstrap"; 
import IExpenseItem from "../models/expense";
import {getAllPayeeNames} from "../services/expense";

type ExpenseByPayeeModel = {

  expenseItems : IExpenseItem[];
}

const ExpenseByPayee = ({expenseItems} : ExpenseByPayeeModel) => {

  const getTotalExpenseByPayee = (payeeName : string) => {

    let totalExpense = 0;
    expenseItems.forEach( (localExpenseItem) => {

      let localPayeeName = localExpenseItem.payeeName;
      if (localPayeeName === payeeName){

        totalExpense = totalExpense + 
        localExpenseItem.price;
      }
    })

    return totalExpense;
  }

  const getGrandTotal = () => {

    let totalExpense = 0;
    expenseItems.forEach( (localExpenseItem) => {


        totalExpense = totalExpense + 
        localExpenseItem.price;
    })

    return totalExpense;
  }

  const getPendingAmount = (payeeName : string) => {

    const totalExpense = getGrandTotal();
    const totalExpenseByPayee = getTotalExpenseByPayee(payeeName);

    const halfAmount = totalExpense / 2;

    if (totalExpenseByPayee >= halfAmount){
      return 0;
    }else{

      return (halfAmount - totalExpenseByPayee);
    }

    // scenario-1
    // rahul ramesh
    // total expenses = 700
    // rahul - 100

    //
    // 700 - 350 / 350
    // rahul - 350 
    //       - 100

    // 250

    // rahul ramesh
    // total expenses = 700
    // rahul - 410

    //
    // 700 - 350 / 350
    // rahul - 410 
    //       - 350

    // -60

  }

  return (
    <div>


  <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Payee Name</th>
          <th>Contributed Amount</th>
          <th>Pending Amount</th>
        </tr>
      </thead>

      <tbody>

        {

        getAllPayeeNames(expenseItems).map( (payeeName, index) => {

          return (

            <tr>
            <td>{index + 1}</td>
            <td>{payeeName}</td>
            <td>{getTotalExpenseByPayee(payeeName)}</td>
            <td>{getPendingAmount(payeeName)}</td>
            </tr>
    
          )
        })
        }

        <tr>
            <td></td>
            <td>Grand Total</td>
            <td>{getGrandTotal()}</td>

        </tr>

      </tbody>
    </Table>

    </div>
  )
}

export {ExpenseByPayee}