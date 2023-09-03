


interface IExpenseItem {

  expenseDescription : string,
  payeeName : string,
  price : number,
  date : Date,
  id : number

}

// interface IExpenseCreateItem {

// }

export type IExpenseCreateItem = Omit<IExpenseItem, "id">

// Create Expense Item
  // expenseDescription
  //  payeeName
  // price
  // date
  // ID [Not Needed]

export default IExpenseItem;