
export const OwnerColumns = [
  { field: "id", headerName: "ID", width: 220 },
  {
    field: "name",
    headerName: "Owner",
    width: 230,

  },
  {
    field: "username",
    headerName: "Username",
    width: 100,
  },

  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "balance",
    headerName: "Balance",
    width: 100,
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
  
];

export const OwnerInputs = [
  {label: "Name", placeholder: "Owner Name", type: "text", name: "name"},
  {label: "Username", placeholder: "Owner Username", type: "text", name: "username"},
  {label: "Email", placeholder: "Owner Email", type: "email", name: "email"},
  {label: "Phone", placeholder: "Owner Phone", type: "text", name: "phone"},
];

export const CustomerInputs = [
    {label: "Name", placeholder: "Customer Name", type: "text", name: "name", required: true},
    {label: "Username", placeholder: "Customer Username", type: "text", name: "username", required: true},
    {label: "Email", placeholder: "Customer Email", type: "email", name: "email", required: true},
    {label: "Phone", placeholder: "Customer Phone", type: "text", name: "phone", required: true},
  ];

//temporary data
export const OwnerRows = [
  {
    id: '6487611cda2740178a4238b3',
    name: 'Ahmed',
    username: 'ahmed',
    email: 'ahmed@gmail.com',
    balance: 0,
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phone: '01000000000'
  },
  {
    id: '6487611cda2740178a4238b4',
    name: 'Mohamed',
    username: 'moh',
    email: 'moh@gmail.com',
    balance: 0,
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phone: '01000000001'
  },
  {
    id: '6487611cda2740178a4238b5',
    name: 'Ali',
    username: 'ali',
    email: 'ali@gmail.com',
    balance: 0,
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phone: '01000000002'
  },
  {
    id: '6487611cda2740178a4238b6',
    name: 'Omar',
    username: 'omar',
    email: 'omar@gmail.com',
    balance: 0,
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phone: '01000000003'

  }
];

export const PlaygroundInputs = [
  {label: "Name", placeholder: "Playground Name", type: "text", name: "name"},
  {label: "Address", placeholder: "Playground Address", type: "text", name: "address"}, 
  {label: "City", placeholder: "Playground City", type: "text", name: "city"},
  {label: "Price", placeholder: "Playground Price", type: "number", name: "pricePerHour"},
];

export const PlaygroundColumns = [
  { field: "id", headerName: "ID", width: 220 },
  {
    field: "name",
    headerName: "Playground",
    width: 230,
  },
  {
    field: "address",
    headerName: "Address",
    width: 230,
  },

  {
    field: "city",
    headerName: "City",
    width: 100,
  },

  {
    field: "pricePerHour",
    headerName: "Price",
    width: 60,
  },

  {
    field: "owner",
    headerName: "Owner",
    width: 100,
  },

  {
    field: "rating",
    headerName: "Rating",
    width: 60,
  },
  
];




//temporary data
export const PlaygroundRows = [
  {
    "id": "64876d34f14ce16cceb0c73f",
    "name": "Maadi Playground",
    "address": "address 1",
    
    "city": "Cairo",
    "pricePerHour": 100,
    "owner": "Ahmed",

    "rating": 4,
  },
  {
    "id": "64876d34f14ce16cceb0c740",
    "name": "Qobba",
    "address": "address 2",
    "city": "Cairo",
    "pricePerHour": 300,
    "owner": "Mohamed",
    
    "rating": 4,
    
  },
  {
    "id": "64876d34f14ce16cceb0c741",
    "name": "Matarya",
    "address": "address 3",
    "city": "Cairo",
    "pricePerHour": 200,
    "owner": "Omar",
    
    "rating": 3,
  }
];

export const ReservationInputs = [
  {label: "Date", placeholder: "Date", type: "date", name: "date", required: true},
  {label: "Hours", placeholder: "Hours", type: "number", name: "hours", required: true},
];
export const ReservationRows = [
  {
    "id": "648a2b3afa25f87a47944260",
    "user": "ahmed",
    "playground": "Maadi Playground ",
    "date": "2023-06-12T19:17:28.941Z",
    "price": 100,
    "isPaid": false,
    "isReviewed": false,
    "profit": "10$",
    "timeSlot": "10:00 - 11:00",
    
  },
  {
    "id": "648a2b54fa25f87a47944266",
    "user": "ahmed",
    "playground": "Matarya Playground ",
    "date": "2023-06-12T19:17:28.941Z",
    "price": 400,
    "isPaid": false,


    "isReviewed": false,
    "profit": "40$",
    "timeSlot": "11:00 - 12:00",
    "createdAt": "2023-06-14T21:04:20.064Z",
    "updatedAt": "2023-06-14T21:04:20.064Z",
    
  },
  {
    "id": "648b2db30ffb7a2566537d34",
    "user": "ahmed",
    "playground": "Maadi Playground ",
    "date": "2023-06-12T19:17:28.941Z",
    "price": 600,
    "isPaid": false,


    "isReviewed": false,
    "profit": "60$",
    "timeSlot": "11:00 - 12:00",
    
    
    
  },
  {
    "id": "648b2dc50ffb7a2566537d3c",
    "user": "ahmed",
    "playground": "Qobba Playground ",
    "date": "2023-06-12T19:17:28.941Z",
    "price": 500,
    "isPaid": true,


    "isReviewed": false,
    "profit": "50$",
    "timeSlot": "11:00 - 12:00",
    
    
    
  },
  {
    "id": "648b2dc60ffb7a2566537d44",
    "user": "ahmed",
    "playground": "Qobba Playground ",
    "date": "2023-06-12T19:17:28.941Z",
    "price": 500,
    "isPaid": true,


    "isReviewed": false,
    "profit": "50$",
    "timeSlot": "11:00 - 12:00",
    
    
    
  },
  {
    "id": "648b2dc70ffb7a2566537d4c",
    "user": "ahmed",
    "playground": "Maadi Playground ",
    "date": "2023-06-12T19:17:28.941Z",
    "price": 500,
    "isPaid": true,


    "isReviewed": false,
    "profit": "50$",
    "timeSlot": "11:00 - 12:00",
    
    
    
  },
  {
    "id": "648b2dc80ffb7a2566537d54",
    "user": "ahmed",
    "playground": "Matarya Playground ",
    "date": "2023-06-12T19:17:28.941Z",
    "price": 500,
    "isPaid": true,


    "isReviewed": false,
    "profit": "50$",
    "timeSlot": "11:00 - 12:00",
    
    
    
  }
]

export const ReservationColumns = [
  { field: "id", headerName: "ID", width: 220 },
  {
    field: "user",
    headerName: "Username",
    width: 230,
  },
  {
    field: "playground",
    headerName: "Playground",
    width: 230,
  },

  {
    field: "isPaid",
    headerName: "isPaid",
    width: 100,
  },

  {
    field: "profit",
    headerName: "Profit",
    width: 60,
  },

  {
    field: "timeSlot",
    headerName: "Time Slot",
    width: 200,
  },
  
];