const headingElement = document.querySelector("#totalDisplay")
    const element = document.querySelector("#btnAdd")
    const inputAmount = document.querySelector("#inputAmount")
    const inputDesc = document.querySelector("#inputDesc")
    const expenseTableElement = document.querySelector("#expenseTable")

    let totalExpense = 0;
    
    headingElement.textContent = totalExpense;

    const allExpense = [] //empty array to store data using object

    const addExpenseToTotal = () => {
        const expenseItem = {} // empty object to store items

        const textAmount = inputAmount.value; //read amount

        const textDesc = inputDesc.value; //read description
        const expense = parseInt(textAmount) // convert to number

        expenseItem.desc = textDesc;
        expenseItem.amount = textAmount;
        expenseItem.moment= new Date()

        allExpense.push(expenseItem)

        totalExpense = totalExpense + expense; // add total expense
        
        const totalAmount = `Total Expense : ${totalExpense}`; //templating
        headingElement.textContent = totalAmount; // display total expense

        // const data1 = allExpense[0]
        // const data2 = allExpense[1]

        // const data1Text = `Expense ${data1.amount} :: Description ${data1.desc}`;
        // const data2Text = `Expense ${data2.amount} :: Description ${data2.desc}`;

        // const tableText = `
        // <div>${data1Text}</div>
        // <div>${data2Text}</div> `

        renderList(allExpense)
}

         const getDate = (momento) => {
         return momento.toLocaleDateString('en-US', {
            month: "long",
            day:"numeric",
            year: "numeric",
        })
}

        const deleteItem = (dataValue) => {
            // const updatedArray = [];
            // console.log("value of deleted itme",dataValue)
            // for(let i=0; i < allExpense.length; i++){
            //     if(allExpense[i].moment.valueOf() !== dataValue){
            //         updatedArray.push(allExpense[i]);
            //     }
            // }

            // const updatedArray = allExpense.filter(item => {
            //     if(item.moment.valueOf() !== dataValue){
            //         return item;
            //     }
            // })

            const updatedArray = allExpense.filter(item => item.moment.valueOf() !== dataValue)
            renderList(updatedArray);
    }

    const renderList = (arrayList) => {
            const allExpenseHTML = arrayList.map((item) => createItemList(item)); // returns a array of string 
            const joinExpense = allExpenseHTML.join("") // converts array of strings to STRING.
            expenseTableElement.innerHTML= joinExpense;
    }

            const createItemList = ( {desc,amount,moment} ) => {
                return `<li class="list-group-item d-flex justify-content-between">
                        <div class="d-flex flex-column">
                            ${desc}
                            <small class="text-muted">${getDate(moment)}</small>
                        </div>
                        <div>
                            <span class="px-5">
                                ${amount}
                            </span>
                            <button 
                                type="button"   
                                class="btn btn-outline-danger btn-sm"   
                                onclick="deleteItem(${moment.valueOf()})"
                                >
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </li>`
}

element.addEventListener( "click" ,addExpenseToTotal)