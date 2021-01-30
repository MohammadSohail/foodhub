# foodhub

Live demo
Base URL: http://localhost:8000

Installation
Prerequisites:
NodeJS
NPM
MongoDB

Installation steps:
npm install
fill the .env file in with proper credentials
node seed/itemSeeder.js
npm run dev


API Documentation:

Auth:

POST
  /api/signup
  
 Parameter:
  name: String
  email: String
  password: String
  address: String
  
  Response:
  status: 201  message: "User created Successfully"
  status: 400  message: "User already registered"
  status: 400  message: "Something went wrong"
  
 POST
   /api/signin
   
   Parameter:
    email: String
    password: String
    
   Response:
   status: 200  
                request example:
                
                {
                  "email": "tas@gmail.com",
                  "password": "123456"
                }
                
                response example:
                 {
                  "token":            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDEzMmQ2YTk0NjVhMjM2Y2M4NTlkMjEiLCJpYXQiOjE2MTIwMDY5NjUsImV4cCI6MTYxMjAxMDU2NX0.LSkXU4FLAAUCelD3-2h3s716fEVPF9q98AudN-CUl2o",
                  "user": {
                      "_id": "60132d6a9465a236cc859d21",
                      "name": "Tasneem",
                      "email": "tas@gmail.com",
                      "address": "House 13/D, Road 8,Sector 7, Uttara"
                  }
                }
   status: 400  message: "Bad Password"
   status: 400  message: "User not found"
   
   
POST
  /api/signout
  
  Response:
  status: 200
  message: "Signout Successfully!"
  
  
  
Items:

GET
  /api/menu/getItem
  
  Response:
  status: 200
  {
    "items": [
        {
            "id": 1,
            "title": "Thai Fry Chicken",
            "price": 399,
            "inStock": true,
            "photo": "https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/08/thai-fried-chicken.jpg",
            "description": "Thai Style Spicy Chicken Fry.",
            "menu": "601428ef316bea1c28dea205"
        },
        {
            "id": 2,
            "title": "Fried Rice",
            "price": 299,
            "inStock": true,
            "photo": "https://www.skinnytaste.com/wp-content/uploads/2009/06/Spicy-Shrimp-Fried-Rice-3.jpg",
            "description": "Thai Style Spicy Chicken Fry.",
            "menu": "601428ef316bea1c28dea205"
        }
            ]
    }
  
  
  
  
  Order:
  
  POST
    /api/createOrder
    
    Parameter:
    orderItems: Array
    
    Request:
    {
    "orderItems":
        {
            "item": "60142f5d74a6322290937253",
            "quantity": 1,
            "price": 299,
            "menu": "6014291e316bea1c28dea208"
        }
    }
    
    Response:
    
    Status: 200
    
    {
    "order": {
        "_id": "601512c4882ad956bc439bb0",
        "user": "60132d6a9465a236cc859d21",
        "orderItems": [
            {
                "quantity": 1,
                "_id": "601525be0e61ed2860873323",
                "item": "60142f5d74a6322290937253",
                "price": 299,
                "menu": "6014291e316bea1c28dea208"
            }
        ],
        "total_Price": 299,
        "createdAt": "2021-01-30T08:03:16.886Z",
        "updatedAt": "2021-01-30T09:24:14.669Z",
        "__v": 0
    }
    }
    
  GET
    /api/getOrder
    
    Response:
    
    Status: 200
    
    {
    "order": {
        "_id": "601512c4882ad956bc439bb0",
        "user": "60132d6a9465a236cc859d21",
        "orderItems": [
            {
                "quantity": 1,
                "_id": "601525be0e61ed2860873323",
                "item": "60142f5d74a6322290937253",
                "price": 299,
                "menu": "6014291e316bea1c28dea208"
            }
        ],
        "total_Price": 299,
        "createdAt": "2021-01-30T08:03:16.886Z",
        "updatedAt": "2021-01-30T09:24:14.669Z",
        "__v": 0
    }
    }
    
  
  
   
