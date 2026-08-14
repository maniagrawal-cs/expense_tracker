console.log("Js is working")
let totalAmount=0;
function addExpense(){
    const tableBody=document.getElementById('table');  // const cannot be re-declared or updated
    let ExpenseName=document.getElementById('expenseName').value; // let cannot be re-decalred but can be updated
    let Amount=document.getElementById('amount').value;
    let Category=document.getElementById('category').value;
    let date=document.getElementById('date').value;
    let row=` 
    <tr>
        <td>${ExpenseName}</td>
        <td>${Amount}</td>
        <td>${Category}</td>
        <td>${date}</td>
    </tr>
    `
    tableBody.insertAdjacentHTML('beforeend',row);
    totalAmount+=Number(Amount);
    document.getElementById('total').textContent=totalAmount;
    document.getElementById('form').reset();
}