export const myNode={
    id:'0',
    name:'Root',
	isFolder:true,
    children:[
        {
            id:'01',
            name:'Node 1',
			isFolder:true,
            children:[
    			{
                    id:'11',
                    name:'Question 11',
					isFolder:false,
					content:'This is question number 11'
                },
				{
                    id:'12',
                    name:'Question 12',
					isFolder:false,
					content:'This is question number 12'
                }
			]
        },
        {
            id:'02',
            name:'Node 2',
			isFolder:true,
            children:[
                {
                    id:'21',
                    name:'Node 21',
					isFolder:true,
                    children:[
                        {
                            id:'211',
                            name:'Node 211',
							isFolder:true,
                            children:[]
                        },
                        {
                            id:'212',
                            name:'Node 212',
							isFolder:true,
                            children:[]
                        },
						{
                            id:'213',
                            name:'Question 213',
							isFolder:false,
                            content:'This is question number 213'
                        }
                    ]
                },
                {
                    id:'22',
                    name:'Node 22',
					isFolder:true,
                    children:[]
                },
                {
                    id:'23',
                    name:'Node 23',
					isFolder:true,
                    children:[]
                },
            ]
        },
        {
            id:'03',
            name:'Node 3',
			isFolder:true,
            children:[]
        },
		{
            id:'04',
            name:'Question 4',
			isFolder:false,
            content:'This is question number 4'
        }
    ]
}