export function getChampionsApi() {
	var data = [
      { 
        name: 'McGregor', 
        status: 'Perfect', 
        description: {
          height: '6\'2"',
          weight: '210lbs'
        },
        photo: '/styles/imgs/avatar1.png'
      },
      { 
        name: 'James Martin', 
        status: 'Good', 
        description: {
          height: '7\'2"',
          weight: '210lbs'
        },
        photo: '/styles/imgs/avatar2.png'
      },
      { 
        name: 'Roman Prod', 
        status: 'Not Good', 
        description: {
          height: '8\'2"',
          weight: '210lbs'
        },
        photo: '/styles/imgs/avatar1.png'
      },
      { 
        name: 'Jame Stwe', 
        status: 'Good', 
        description: {},
        photo: '/styles/imgs/avatar2.png'
      },
      { 
        name: 'McGregor', 
        status: 'Bad', 
        description: {
          height: '6\'2"',
          weight: '210lbs'
        },
        photo: '/styles/imgs/avatar1.png'
      },
      { 
        name: 'Roman Prod', 
        status: 'Perfect', 
        description: {
          height: '7\'8"',
          weight: '210lbs'
        },
        photo: '/styles/imgs/avatar1.png'
      },
      { 
        name: 'McGregor', 
        status: 'Perfect', 
        description: {
          height: '9\'2"',
          weight: '210lbs'
        },
        photo: '/styles/imgs/avatar2.png'
      },
      { 
        name: 'Jame Stwe', 
        status: 'Not Good', 
        description: '' ,
        photo: '/styles/imgs/avatar1.png'
      },
      { 
        name: 'McGregor', 
        status: 'Perfect', 
        description: {
          height: '6\'9"',
          weight: '210lbs'
        },
        photo: '/styles/imgs/avatar1.png'
      },
    ]

    return new Promise((resolve, reject) => {
    	resolve(data)
    });
}