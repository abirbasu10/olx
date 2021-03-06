
import { AdLogisticsMapping, LogisticsQuoteRequest, Quotation, LogisticsOrderList, User, LogisticsPortMapping } from './classDefinition'
import { MessageList, MessageDetails, MessageThread} from "./classDefinition";
import { Category,SubCategory,Filter,SubCatFilterMap,Image,Country,State,Port,Advertisement,ImageAdvertisementMap,ProductFilterValue,AdvertisementFilterValue,SubCategoryFilterOption,SubCategoryOption,CatSubcatImageMap, LogisticFirmList,CompanyDetails,ProfileFields, VerifyCompanyDocument, FeaturedPlan, FeaturedAdvertisementMap,Roles } from "./classDefinition";


import { ThirdPartyAds, ThirdPartyAdsPosition }  from './classDefinition'
import { Currency } from "./classDefinition"; 


export const CATEGORIES: Category[]=[
    {id:1,name:"Properties"},
    {id:2,name:"Car"},
    {id:3,name:"Electronic"},
    {id:4,name:"Bike"},
    {id:5,name:"Furniture"}    
]
    
export const SUBCATEGORIES: SubCategory[]=[
    {id:1,name:"ForSale",
    categoryDetails:{id:1,name:"Properties"}
    },
    {id:2,name:"ForRent",
    categoryDetails:{id:1,name:"Properties"}
    },
    {id:3,name:"Domestic Car",
    categoryDetails:{id:2,name:"Car"}
    },
    {id:4,name:"Commercial Car",
    categoryDetails:{id:2,name:"Car"}
    },
    {id:5,name:"AC",
    categoryDetails:{id:3,name:"Electronic"}
    },
    {id:6,name:"TV",
    categoryDetails:{id:3,name:"Electronic"}
    },
    {id:7,name:"Scooter",
    categoryDetails:{id:4,name:"Bike"}
    },
    {id:8,name:"Motor Cycles",
    categoryDetails:{id:4,name:"Bike"}
    },
]

export const FILTERS:Filter[]=[
    {  id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
    {  id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
    {  id:3,name:"Bedroom",description:"sacdsfsfdf",type:"dropdown",addType:"dropdown",extraInfo:false},
    {  id:4,name:"Fuel-Type",description:"sacdsfsfdf",type:"dropdown",addType:"dropdown",extraInfo:false},
    {  id:5,name:"Milege",description:"sacdsfsfdf",type:"",addType:"numeric",extraInfo:false},
    {  id:6,name:"Brand",description:"sacdsfsfdf",type:"dropdown",addType:"text",extraInfo:false},      

]


export const SUBCATFILTERMAP:SubCatFilterMap[]=[
    {
        id:1,
        subCategoryDetails:{id:1,name:"ForSale",categoryDetails:{id:1,name:"Properties"}},
        filterDetails:
        [ 
             {  id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
             {  id:3,name:"Bedroom",description:"sacdsfsfdf",type:"dropdown",addType:"dropdown",extraInfo:false},
             {  id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
        ],
        hasChild:1
    },
    {
        id:2,
        subCategoryDetails:{id:2,name:"ForRent",categoryDetails:{id:1,name:"Properties"}},
        filterDetails:
        [ 
            {  id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
             {  id:3,name:"Bedroom",description:"sacdsfsfdf",type:"dropdown",addType:"dropdown",extraInfo:false},
             {  id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
        ],
        hasChild:1
    },
    {
        id:3,
        subCategoryDetails:{id:3,name:"Domestic Car",categoryDetails:{id:2,name:"Car"}},
        filterDetails:
        [ 
             {  id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
             {  id:4,name:"Fuel-Type",description:"sacdsfsfdf",type:"dropdown",addType:"dropdown",extraInfo:false},
             {  id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
             {  id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:false},
        ],
        hasChild:1
    },
    {
        id:4,
        subCategoryDetails:{id:4,name:"Commercial Car",categoryDetails:{id:2,name:"Car"}},
        filterDetails:
        [ 
            {  id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
            {  id:4,name:"Fuel-Type",description:"sacdsfsfdf",type:"dropdown",addType:"dropdown",extraInfo:false},
            {  id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
            {  id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:false},
        ],
        hasChild:1
    },
    {
        id:5,
        subCategoryDetails:{id:5,name:"AC",categoryDetails:{id:3,name:"Electronic"}},
        filterDetails:
        [ 
            {  id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},         
          
            {  id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:false},
             
        ],
        hasChild:1
    },
    {
        id:6,
        subCategoryDetails:{id:6,name:"TV",categoryDetails:{id:3,name:"Electronic"}},
        filterDetails:
        [ 
            {  id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},        
          
            {  id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:false},
             
        ],
        hasChild:1
    },
    {
        id:7,
        subCategoryDetails:{id:6,name:"Scooter",categoryDetails:{id:4,name:"Bike"}},
        filterDetails:
        [ 
             {  id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},             
             {  id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
             {  id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:false},
             
        ],
        hasChild:1
    },
    {
        id:8,
        subCategoryDetails:{id:7,name:"Motor Cycles",categoryDetails:{id:4,name:"Bike"}},
        filterDetails:
        [ 
            {  id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},             
            {  id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
            {  id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:false},
             
        ],
        hasChild:1
    }


]


export const COUNTRIES:Country[]=[    
        {id:1,name:"India"}, 
        {id:2,name:"Nepal"},
        {id:3,name:"Srilanka"},
        {id:4,name:"USA"},
]

export const STATES:State[]=[    
    {id:1,name:"WB",countryDetails:{id:1,name:"India"}},
    {id:2,name:"CH",countryDetails:{id:1,name:"India"}},  
    {id:3,name:"BR",countryDetails:{id:1,name:"India"}}, 
    {id:4,name:"OD",countryDetails:{id:1,name:"India"}},
    
]   

export const PORTS:Port[]=[    
    {id:1,name:"Kolkata Port",stateDetails:{id:1,name:"WB",countryDetails:{id:1,name:"India"}}},
    {id:2,name:"Port of Chennai",stateDetails: {id:2,name:"CH",countryDetails:{id:1,name:"India"}}},  
    {id:3,name:"Port of BR",stateDetails:{id:3,name:"BR",countryDetails:{id:1,name:"India"}}}, 
    {id:4,name:"Port of OD",stateDetails: {id:4,name:"OD",countryDetails:{id:1,name:"India"}}},
    
]   

export const CURRENCY:Currency[]=[
    {id:1,symbol:"Rs",name:"Indian Rupee",fraction:64.85},
    {id:2,symbol:"$",name:"USD",fraction:1},
    {id:3,symbol:"Yen",name:"Japanese Yen",fraction:106.84},
    {id:4,symbol:"SGD",name:"Singapore Dollar",fraction:1.32},
    {id:5,symbol:"EU",name:"Euro",fraction:0.81},
]

export const SELLER_CHOSEN_CURRENCY:Currency[]=[{id:2,symbol:"$",name:"USD",fraction:1}];

export const LOGISTICS_CHOSEN_CURRENCY:Currency[]=[{id:2,symbol:"$",name:"USD",fraction:1}];

   

export const ADVERTISEMENTS: Advertisement[]=[

    {
        id:1,  
        images:[{id:1,name:"Audi Car Image",path:"/assets/img/login5.jpg",extension:"",description:""},
                {id:8,name:"Active Scooter Image",path:"/assets/img/problem12.jpg",extension:"",description:""}],
        productName:"Sea Facing New Flat",  productDescription:"", 
        subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
        portDetails: {id:1,name:"Kolkata Port",stateDetails:{id:1,name:"WB",countryDetails:{id:1,name:"India"}}},
        name:"Amit Halder",contact:9038568379, companyId:4, companyName:"MC Ships", date:new Date(),sellerLogisticSupport:true,isFeatured:true,
        isOpen:false,
    },
    
    {
        id:2,  
        images:[{id:2,name:"Bajaj MotorCycle Image",path:"/assets/img/login6.jpg",extension:"",description:""},],
        productName:"Good Condition Audi",  productDescription:"", 
        subCategoryDetails: {id:4,name:"Commercial Car", categoryDetails:{id:2,name:"Car"}},
        portDetails: {id:2,name:"Port of Chennai",stateDetails:{id:2,name:"CH",countryDetails:{id:1,name:"India"}}},
        name:"Bipraneel",contact:9038102961, companyId:4, companyName:"MC Ships",date:new Date(),sellerLogisticSupport:true,isFeatured:true,
        isOpen:true,
    },
    
    {
        id:3,
        images:[{id:3,name:"Panasonic Ac Image",path:"/assets/img/login7.jpg",extension:"",description:""},],
        productName:"No EMI Mototr Cycle",  productDescription:"", 
        subCategoryDetails: {id:8,name:"Motor Cycle", categoryDetails:{id:4,name:"Bike"}},
        portDetails: {id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},
        name:"Abir Basu",contact:9943287632, companyId:2, companyName:"Deep Oceans",date:new Date(),sellerLogisticSupport:true,isFeatured:true,
        isOpen:true,
    },
    {
        id:4,
        images:[{id:4,name:"Samsung Tv Image",path:"/assets/img/login8.jpg",extension:"",description:""},],
        productName:"2 years Old Flat",  productDescription:"", 
        subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
        portDetails: {id:2,name:"Port of Chennai",stateDetails:{id:2,name:"CH",countryDetails:{id:1,name:"India"}}},
        name:"Spandan",contact:9903527889, companyId:2, companyName:"Deep Oceans",date:new Date(),sellerLogisticSupport:true,isFeatured:false,
        isOpen:true,
    },
    {
        id:5,
        images:[{id:5,name:"2Bhk Flat Image",path:"/assets/img/login12.jpg",extension:"",description:""},],
        productName:"New Flat",  productDescription:"", 
        subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
        portDetails: {id:1,name:"Kolkata Port",stateDetails:{id:1,name:"WB",countryDetails:{id:1,name:"India"}}},
        name:"Amit Halder",contact:9038568379, companyId:4, companyName:"MC Ships",date:new Date(),sellerLogisticSupport:true,isFeatured:false,
        isOpen:true,
    },
    {
        id:6,
        images:[{id:6,name:"2Bhk Flat Image2",path:"/assets/img/login111.jpg",extension:"",description:""},],
        productName:" Flat",  productDescription:"", 
        subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
        portDetails: {id:1,name:"Kolkata Port",stateDetails:{id:1,name:"WB",countryDetails:{id:1,name:"India"}}},
        name:"Amit Halder",contact:9038568379, companyId:4, companyName:"MC Ships",date:new Date(),sellerLogisticSupport:false,isFeatured:true,
        isOpen:true,
    }
]


export const PRODUCTFILTERVALUES:ProductFilterValue[]=[
    {
        id:1,
        advertisementDetails:
        {
            id:1,
            images:[{id:1,name:"Audi Car Image",path:"/assets/img/login5.jpg",extension:"",description:""},
                    {id:8,name:"Active Scooter Image",path:"/assets/img/problem12.jpg",extension:"",description:""}],
            productName:"Sea Facing New Flat",  productDescription:"", 
            subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
            portDetails: {id:1,name:"Kolkata Port",stateDetails:{id:1,name:"WB",countryDetails:{id:1,name:"India"}}},
            name:"Amit Halder",contact:9038568379, companyId:4, companyName:"MC Ships",date:new Date(),sellerLogisticSupport:true,isFeatured:true,
            isOpen:false,
        },
        filterValues:[
            {name:"Bedroom",value:"2bhk"},
            {name:"Price",value:"1500000"},
            {name:"Year",value:"3 years"},
            
        ]
    },
    {
        id:2,
        advertisementDetails:
        {
            id:2,
            images:[{id:2,name:"Bajaj MotorCycle Image",path:"/assets/img/login6.jpg",extension:"",description:""},],
            productName:"Good Condition Audi",  productDescription:"", 
            subCategoryDetails: {id:4,name:"Commercial Car", categoryDetails:{id:2,name:"Car"}},
            portDetails: {id:2,name:"Port of Chennai",stateDetails:{id:2,name:"CH",countryDetails:{id:1,name:"India"}}},
            name:"Bipraneel",contact:9038102961, companyId:4, companyName:"MC Ships",date:new Date(),sellerLogisticSupport:true,isFeatured:true,
            isOpen:true,
        },
        filterValues:[
            {name:"Milege",value:"13"},
            {name:"Price",value:"15000000"},
            {name:"Year",value:"3 Years"},
            
        ]
    },
    { 
        id:3,
        advertisementDetails:
        {
            id:3,
            images:[{id:3,name:"Panasonic Ac Image",path:"/assets/img/login7.jpg",extension:"",description:""},],
            productName:"No EMI Mototr Cycle",  productDescription:"", 
            subCategoryDetails: {id:8,name:"Motor Cycle", categoryDetails:{id:4,name:"Bike"}},
            portDetails: {id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},
            name:"Abir Basu",contact:9943287632, companyId:2, companyName:"Deep Oceans",date:new Date(),sellerLogisticSupport:true,isFeatured:true,
            isOpen:true,
        },
        filterValues:[
            {name:"Milege",value:"25"},
            {name:"Price",value:"15000"},
            {name:"Year",value:"8 Years"},
            
        ]
    },
    {
        id:4,
        advertisementDetails:
        {
            id:4,
            images:[{id:4,name:"Samsung Tv Image",path:"/assets/img/login8.jpg",extension:"",description:""},],
            productName:"2 years Old Flat",  productDescription:"", 
            subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
            portDetails: {id:2,name:"Port of Chennai",stateDetails:{id:2,name:"CH",countryDetails:{id:1,name:"India"}}},
            name:"Spandan",contact:9903527889, companyId:2, companyName:"Deep Oceans",date:new Date(),sellerLogisticSupport:true,isFeatured:false,
            isOpen:true,
        },
        filterValues:[
            {name:"Bedroom",value:"2bhk"},
            {name:"Price",value:"1500000"},
            {name:"Year",value:"2 Years"},
            
        ]
    },
    {
        id:5,
        advertisementDetails:
        {
            id:5,
            images:[{id:5,name:"2Bhk Flat Image",path:"/assets/img/login12.jpg",extension:"",description:""},],
            productName:"New Flat",  productDescription:"", 
            subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
            portDetails: {id:1,name:"Kolkata Port",stateDetails:{id:1,name:"WB",countryDetails:{id:1,name:"India"}}},
            name:"Amit Halder",contact:9038568379, companyId:4, companyName:"MC Ships",date:new Date(),sellerLogisticSupport:true,isFeatured:false,
            isOpen:true,
        },
        filterValues:[
            {name:"Bedroom",value:"2bhk"},
            {name:"Price",value:"3400000"},
            {name:"Year-Range",value:"3 years"},
            
        ]
    },
    {
        id:6,
        advertisementDetails:
        {
            id:6,
            images:[{id:6,name:"2Bhk Flat Image2",path:"/assets/img/login111.jpg",extension:"",description:""},],
            productName:" Flat",  productDescription:"", 
            subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
            portDetails: {id:1,name:"Kolkata Port",stateDetails:{id:1,name:"WB",countryDetails:{id:1,name:"India"}}},
            name:"Amit Halder",contact:9038568379, companyId:4, companyName:"MC Ships",date:new Date(),sellerLogisticSupport:false,isFeatured:true,
            isOpen:true,
        },
        filterValues:[
            {name:"Bedroom",value:"3bhk"},
            {name:"Price",value:"200"},
            {name:"Year-Range",value:"3 years"},
            
        ]
    }

]

export const FEATUREDPLANS:FeaturedPlan[]=[
    {id:1,planName:"7 days topper",duration:7,periodType:"days",amount:700,isActive:true},
    {id:2,planName:"1 year topper",duration:1,periodType:"year",amount:5000,isActive:true}
]

export const FEATURED_ADVERTISEMENT_MAP:FeaturedAdvertisementMap[]=[
    {
        id:1,
        adId:1,
        planDetails:{id:1,planName:"7 days topper",duration:7,periodType:"days",amount:700,isActive:true},
        startDate:new Date(5-21-2018),
        endDate:new Date(5-28-2018)
    },
    {
        id:2,
        adId:2,
        planDetails:{id:1,planName:"7 days topper",duration:7,periodType:"days",amount:700,isActive:true},
        startDate:new Date(5-23-2018),
        endDate:new Date(5-23-2018)
    },
    {
        id:3,
        adId:3,
        planDetails:{id:2,planName:"1 year topper",duration:1,periodType:"year",amount:5000,isActive:true},
        startDate:new Date(5-21-2018),
        endDate:new Date(5-21-2019)
    }
]

export const IMAGES:Image[]=[
    {id:1,name:"Audi Car Image",path:"/assets/img/login5.jpg",extension:"",description:""},
    {id:2,name:"Bajaj MotorCycle Image",path:"/assets/img/login6.jpg",extension:"",description:""},
    {id:3,name:"Panasonic Ac Image",path:"/assets/img/login7.jpg",extension:"",description:""},
    {id:4,name:"Samsung Tv Image",path:"/assets/img/login8.jpg",extension:"",description:""},
    {id:5,name:"2Bhk Flat Image",path:"/assets/img/login12.jpg",extension:"",description:""},
    {id:6,name:"2Bhk Flat Image2",path:"/assets/img/login111.jpg",extension:"",description:""},
    {id:7,name:"Audi Car Image2",path:"/assets/img/problem11.jpg",extension:"",description:""},
    {id:8,name:"Active Scooter Image",path:"/assets/img/problem12.jpg",extension:"",description:""},

    {id:9,name:"Property Image",path:"/assets/img/nophoto.jpg",extension:"",description:""},    
    {id:10,name:"Electronics Image",path:"/assets/img/nophoto.jpg",extension:"",description:""},    
    {id:11,name:"Bike Image",path:"/assets/img/nophoto.jpg",extension:"",description:""},  
    {id:12,name:"Car Image",path:"/assets/img/nophoto.jpg",extension:"",description:""},

    {id:13,name:"ForSale Image",path:"/assets/img/nophoto.jpg",extension:"",description:""},    
    {id:14,name:"AC Image",path:"/assets/img/nophoto.jpg",extension:"",description:""},    
    {id:15,name:"Scooter Image",path:"/assets/img/nophoto.jpg",extension:"",description:""}, 
    {id:16,name:"Domestic Car Image",path:"/assets/img/nophoto.jpg",extension:"",description:""},        
]

export const IMAGEADVERTISEMENTMAP:ImageAdvertisementMap[]=[
    {id:1,imageId:1,advertisementId:1},
    {id:2,imageId:2,advertisementId:2},
    {id:3,imageId:3,advertisementId:3},
    {id:4,imageId:4,advertisementId:4},
    {id:5,imageId:5,advertisementId:5},
    {id:6,imageId:6,advertisementId:6},
]




export const CATSUBCATIMAGEMAP:CatSubcatImageMap[]=[
    {id:1,imageId:9,catId:1,subCatId:null},
    {id:2,imageId:10,catId:3,subCatId:null},
    {id:3,imageId:11,catId:4,subCatId:null},
    {id:4,imageId:12,catId:2,subCatId:null},

    {id:1,imageId:9,catId:1,subCatId:1},
    {id:2,imageId:10,catId:3,subCatId:5},
    {id:3,imageId:11,catId:4,subCatId:7},
    {id:4,imageId:12,catId:2,subCatId:3},
   
]

export const SUBCATFILTEROPTIONS: SubCategoryFilterOption[]=[
    {
        id:1,
        filterSubCatMapId:2,
        subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
        subCatFilterValues:[
            {id:1,filterDetails: {id:3,name:"Bedroom",description:"sacdsfsfdf",type:"dropdown",addType:"dropdown",extraInfo:false},value:["1bhk","2bhk","3bhk"]},
            {id:2,filterDetails: {id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},value:["1000000","2000000","3000000"]},
            {id:3,filterDetails: {id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},value:["1year","2year","5year"]},
        ]
    },
    {
        id:2,
        filterSubCatMapId:2,
        subCategoryDetails: {id:2,name:"ForRent", categoryDetails:{id:1,name:"Properties"}},
        subCatFilterValues:[
            {id:1,filterDetails: {id:3,name:"Bedroom",description:"sacdsfsfdf",type:"dropdown",addType:"dropdown",extraInfo:false},value:["1bhk","2bhk","3bhk"]},
            {id:2,filterDetails: {id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},value:["10,00,000","20,00,000","30,00,000"]},
            {id:3,filterDetails: {id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},value:["1year","2year","5year"]},
        ]
    },
    {
        id:3,
        filterSubCatMapId:3,
        subCategoryDetails:{id:3,name:"Domestic Car",categoryDetails:{id:2,name:"Car"}},
        subCatFilterValues: [ 
            {id:1,filterDetails: {id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},value:["5,00,000","7,00,000","15,00,000"]},
            {id:2,filterDetails: {id:4,name:"Fuel-Type",description:"sacdsfsfdf",type:"dropdown",addType:"dropdown",extraInfo:false},value:["Petrol","Diesel"]},
            {id:3,filterDetails: {id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},value:["1year","2year","5year"]},
            {id:4,filterDetails: {id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:false},value:["10","13","15"]},
            
            
       ]
    }
]


export const SUBCATOPTIONS: SubCategoryOption[]=[
    {
        id:1,
        subCategoryDetails:{id:3,name:"Domestic Car",categoryDetails:{id:2,name:"Car"}},
        options:["Honda","Tata","Audi","Bmw"]
    }
]

export const LOGISTICFIRMS: LogisticFirmList[]=[
    {id:1, name:'Mariners Bay', contact:'9903458227', email:'mbay@gmail.com',port:{id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},avg_rating:4.5,profile_state:true},
    {id:2, name:'Sea Farer', contact:'9903422127', email:'seafarer@gmail.com',port:{id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},avg_rating:4,profile_state:true},
    {id:3, name:'Blue Shark', contact:'9903422127', email:'blueshark@gmail.com',port:{id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},avg_rating:3.5,profile_state:true},
    {id:4, name:'Maharashtra Greats', contact:'990345823', email:'theindian@gmail.com',port:{id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},avg_rating:4.5,profile_state:true},
    {id:5, name:'The Indian', contact:'990345789', email:'sg@gmail.com',port:{id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},avg_rating:4,profile_state:false},    
];

export const DefaultLogisticFirm:LogisticFirmList=LOGISTICFIRMS[LOGISTICFIRMS.length-1];

export const LOGISTICS_PORT_MAPPING: LogisticsPortMapping[]=[
    {id:1, logisticsId:1, logisticsName:'Mariners Bay', 
    ports:[
        {id:1,name:"Kolkata Port",stateDetails:{id:1,name:"WB",countryDetails:{id:1,name:"India"}}},
        {id:2,name:"Port of Chennai",stateDetails: {id:2,name:"CH",countryDetails:{id:1,name:"India"}}}
    ]},
    /* {id:1, logisticsId:5, logisticsName:'The Indian', 
    ports:[
        {id:1,name:"Kolkata Port",stateDetails:{id:1,name:"WB",countryDetails:{id:1,name:"India"}}},
        {id:2,name:"Port of Chennai",stateDetails: {id:2,name:"CH",countryDetails:{id:1,name:"India"}}}
    ]} */

];

export const COMPANYDETAILS: CompanyDetails[]=[
    {id:1, name:'Marine Affiliates', contact:'9903458227', email:'maff@gmail.com',port:{id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},avg_rating:4.5,profile_completion_percent:50,profileFields:[{id:1,fieldName:"Phone No",verifyStatus:true},{id:2,fieldName:"Email",verifyStatus:true},{id:3,fieldName:"Document",verifyStatus:false}]},
    {id:2, name:'Deep Oceans', contact:'9903422127', email:'deepoceans@gmail.com',port:{id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},avg_rating:4,profile_completion_percent:70,profileFields:[{id:1,fieldName:"Phone No",verifyStatus:true},{id:2,fieldName:"Email",verifyStatus:true},{id:3,fieldName:"Document",verifyStatus:true}]},
    {id:3, name:'Great Eastern', contact:'9903422127', email:'geships@gmail.com',port:{id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},avg_rating:3.5,profile_completion_percent:65,profileFields:[{id:1,fieldName:"Phone No",verifyStatus:true},{id:2,fieldName:"Email",verifyStatus:false},{id:3,fieldName:"Document",verifyStatus:false}]},
    {id:4, name:'MC Ships', contact:'990345823', email:'mcships@gmail.com',port:{id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},avg_rating:4.5,profile_completion_percent:90,profileFields:[{id:1,fieldName:"Phone No",verifyStatus:false},{id:2,fieldName:"Email",verifyStatus:false},{id:3,fieldName:"Document",verifyStatus:false}]},
];    

export const DefaultCompany:CompanyDetails=COMPANYDETAILS[COMPANYDETAILS.length-1];

export const MESSAGELIST: MessageList[]=[
    {messageId:1, adId: 1, senderId:4, receiverId: 2},
    {messageId:2, adId: 2, senderId:4, receiverId: 5},
];

export const MESSAGEDETAILS: MessageDetails[]=[
    {messageId:1, msgThread:[{msg:"hi how are you?",senderId:4, receiverId: 2}, {msg:"Am Fine?",senderId:2, receiverId: 1}]},
    {messageId:2, msgThread:[{msg:"Ki haal?",senderId:4, receiverId: 5}, {msg:"Ami bhalo..tui kemn?",senderId:5, receiverId: 1}]}
];

export const BUY_SELL_MESSAGELIST: MessageList[]=[
    {messageId:1, adId: 1, senderId:3, receiverId: 4},
    {messageId:2, adId: 2, senderId:3, receiverId: 4},
];

export const BUY_SELL_MESSAGEDETAILS: MessageDetails[]=[
    {messageId:1, msgThread:[{msg:"hi how are you?",senderId:3, receiverId: 2}, {msg:"Am Fine?",senderId:2, receiverId: 3}]},
    {messageId:2, msgThread:[{msg:"Ki haal?",senderId:3, receiverId: 4}, {msg:"Ami bhalo..tui kemn?",senderId:4, receiverId: 3}]}
];

export const AD_LOGISTICS_MAPPING: AdLogisticsMapping[]=[
    {id:1,adId:1, logisticIds:[2,3,5]},
    {id:2,adId:2, logisticIds:[1,3,5]},
    {id:3,adId:3, logisticIds:[1,2]},
    {id:4,adId:4, logisticIds:[1,2]},
    {id:5,adId:5, logisticIds:[2,3,5]},
    {id:6,adId:6, logisticIds:[2,3,5]},
];

export const LOGISTICS_QUOTE_REQUEST:LogisticsQuoteRequest[]=[
    {id:1,adId:1, companyId: 4, logisticIdsStatus:[{id:5,buyerStatus:"Sent", logisticsStatus:"Received"},{id:3,buyerStatus:"Sent", logisticsStatus:"Received"}]}
]

export const QUOTATION: Quotation[]=[
    {id:3,quoteReqId:2,companyId:4,companyName:"MC Ships",logisticsId:5,logisticsName:"The Indian",price:1200, adId:1},
    {id:4,quoteReqId:2,companyId:4,companyName:"MC Ships",logisticsId:3,logisticsName:"Blue Shark",price:1000, adId:1}
]

/* List of logistics request received by firm and their status */
export const LOGISTICS_ORDER_LIST:LogisticsOrderList[]=[];

export const THIRD_PARTY_AD_POSITIONS: ThirdPartyAdsPosition[]=[
    {id:1, position:"right", price:700},
    {id:2, position:"bottom", price:500},
];

export const THIRD_PARTY_ADS: ThirdPartyAds[]=[
    {id:1,url:"/company/logisticsFirmProfile",adTitle:"Serving in Kol and Chennai", adDetails:"Hi!! we are now in Kolkata and Chennai", 
    location:["Kolkata Port","Port of Chennai"], postedById: 1, postedByName:"Mariners Bay", position:"right"},

    {id:2,url:"/company/logisticsFirmProfile",adTitle:"We are in Kol", adDetails:"Hi!! Serving in Kolkata Now", 
    location:["Kolkata Port"], postedById: 2, postedByName:"Sea Farer", position:"right"},

    {id:3,url:"/company/logisticsFirmProfile",adTitle:"Improved Services", adDetails:"Hi..we have renovated and raring to go", 
    location:["Kolkata Port"], postedById: 3, postedByName:"Blue Shark", position:"bottom"},

    {id:4,url:"/company/logisticsFirmProfile",adTitle:"Monsoon Discounts", adDetails:"Discounts in Monsoon Shipments", 
    location:["Kolkata Port"], postedById: 5, postedByName:"The Indian", position:"bottom"},

    {id:5,url:"/company/logisticsFirmProfile",adTitle:"All Year Discounts", adDetails:"The amount you pay will keep going down but our promises will never go down", 
    location:["Kolkata Port"], postedById: 5, postedByName:"The Indian", position:"bottom"},

    {id:6,url:"/company/logisticsFirmProfile",adTitle:"Free Shipments", adDetails:"We are providing free shipments within 2000 nautical miles. Offer ends on 30th Sept", 
    location:["Kolkata Port"], postedById: 5, postedByName:"The Indian", position:"bottom"},
];
//Admin Section

export const VERIFYCOMPANYDOCUMENT : VerifyCompanyDocument[]=[


];


export const ROLES : Roles[] = [
    {id:1, name: "Admin"},
    {id:2, name: "User"}
];

export const USERS : User[] = [
    {id:1, name: "Raj", email : "abc@ddd.com", contact : "23242343", role : "User"},
    {id:2, name: "Raja", email : "ac@dd.co", contact : "567676543", role : "Admin"}

];
