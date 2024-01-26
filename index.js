import { propertyForSaleArr } from '/properties/propertyForSaleArr.js'
import { placeholderPropertyObj } from '/properties/placeholderPropertyObj.js'

const placeholderPropertyArr = new Array(placeholderPropertyObj)

function getPropertyHtml( propertyArr = placeholderPropertyArr) {
    
    return propertyArr.map(property => 
    `
    <section class="card">
        <img src="/images/${property.image}">
            <div class="card-right">
                <h2>${property.propertyLocation}</h2>
                <h3>${property.priceGBP}</h3>
                <p>${property.comment}</p>
                <h3>${property.roomsM2.reduce((total, currentProperty ) => total + currentProperty)} m&sup2;</h3>
            </div>
    </section> 
    `
    ).join('')
}

document.getElementById('container').innerHTML = getPropertyHtml()
