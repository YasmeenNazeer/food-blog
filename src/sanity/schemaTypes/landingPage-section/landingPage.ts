

const landingPage={
    title:'Landing Page',
    name:'landingPage',
    type:'document',
    fields:[
        {    
            title:'Page Sections',
            name:'pageSections',
            type:'array',
            of:[
                {type:'heroSection'}, //index 0
                 {type:'cardSection'} //index 1
            ]

        
        
        }
    ]
}

export default landingPage