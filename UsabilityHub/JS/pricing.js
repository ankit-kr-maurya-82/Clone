    
let company = {
    amazon: {
        compName:"Amazon",
        marketValue: 153.42
    },
    google: {
        compName:"Google",
        marketValue: 141.49
    }
}

const amazonName = document.getElementsByClassName("companyName");
console.log(amazonName.innerHTML);
amazonName.innerText = "click down";
console.log(company.amazon.compName);


