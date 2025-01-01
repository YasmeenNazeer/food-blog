

const aboutPage={
    title:'About Page',
    name:'aboutPage',
    type:'document',
    fields:[
        {    
            title:'About Page Sections',
            name:'pageSections',
            type:'array',
            of:[
                {type:'aboutSection'},     //index 0  
                
            ]

        
        
        }
    ]
}
export default aboutPage