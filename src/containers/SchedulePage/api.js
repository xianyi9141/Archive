export function getSchedulesApi() {
	var data = [
      {
        date: '1',
        day: 'Monday',
        month: 'May',
        startTime: '8:30 PM',
        endTime: '11:30 PM',
        location: ' 56-60 Tanner St',
        detail: 'Detail',
        doorPrice: '$12.6',
        homePlayer: {
          photo: '/styles/imgs/avatar1.png',
          name: 'McGreor'
        },
        awayPlayer: {
          photo: '/styles/imgs/avatar2.png',
          name: 'Roman'
        },
        description: 'We care about the development of our users. We have prepared numerous tutorials, which allow you to learn how to use MDB as well as other technologies.We care about the development of our users. We have prepared numerous tutorials, which allow you to learn how to use MDB as well as other technologies.We care about the development of our users. We have prepared numerous tutorials, which allow you to learn how to use MDB as well as other technologies.'
      },
      {
        date: '2',
        day: 'Tuesday',
        month: 'May',
        startTime: '9:30 PM',
        endTime: '11:30 PM',
        location: '46-60 Anner St',
        detail: 'Detail',
        doorPrice: '$12.6',
        homePlayer: {
          photo: '/styles/imgs/avatar1.png',
          name: 'McGreor'
        },
        awayPlayer: {
          photo: '/styles/imgs/avatar2.png',
          name: 'Roman'
        },
        description: 'We care about the development of our users. We have prepared numerous tutorials, which allow you to learn how to use MDB as well as other technologies.We care about the development of our users. We have prepared numerous tutorials, which allow you to learn how to use MDB as well as other technologies.We care about the development of our users. We have prepared numerous tutorials, which allow you to learn how to use MDB as well as other technologies.'
      },
      {
        date: '3',
        day: 'Wednesday',
        month: 'May',
        startTime: '8:30 PM',
        endTime: '11:00 PM',
        location: ' 56-60 Tanner St',
        detail: 'Detail',
        doorPrice: '$22.6',
        homePlayer: {
          photo: '/styles/imgs/avatar2.png',
          name: 'Roman'
        },
        awayPlayer: {
          photo: '/styles/imgs/avatar1.png',
          name: 'McGreor'
        },
        description: 'We care about the development of our users. We have prepared numerous tutorials, which allow you to learn how to use MDB as well as other technologies.We care about the development of our users. We have prepared numerous tutorials, which allow you to learn how to use MDB as well as other technologies.We care about the development of our users. We have prepared numerous tutorials, which allow you to learn how to use MDB as well as other technologies.'
      },
      {
        date: '4',
        day: 'Thursday',
        month: 'May',
        startTime: '8:30 PM',
        endTime: '11:30 PM',
        location: ' 56-60 Tanner St',
        detail: 'Detail',
        doorPrice: '$12.6',
        homePlayer: {
          photo: '/styles/imgs/avatar2.png',
          name: 'Roman'
        },
        awayPlayer: {
          photo: '/styles/imgs/avatar1.png',
          name: 'McGreor'
        },
        description: 'We care about the development of our users. We have prepared numerous tutorials, which allow you to learn how to use MDB as well as other technologies.We care about the development of our users. We have prepared numerous tutorials, which allow you to learn how to use MDB as well as other technologies.We care about the development of our users. We have prepared numerous tutorials, which allow you to learn how to use MDB as well as other technologies.'
      },
      {
        date: '5',
        day: 'Friday',
        month: 'May',
        startTime: '8:30 PM',
        endTime: '11:30 PM',
        location: ' 56-60 Tanner St',
        detail: 'Detail',
        doorPrice: '$12.6',
        homePlayer: {
          photo: '/styles/imgs/avatar1.png',
          name: 'McGreor'
        },
        awayPlayer: {
          photo: '/styles/imgs/avatar2.png',
          name: 'Roman'
        },
        description: 'We care about the development of our users. We have prepared numerous tutorials, which allow you to learn how to use MDB as well as other technologies.We care about the development of our users. We have prepared numerous tutorials, which allow you to learn how to use MDB as well as other technologies.We care about the development of our users. We have prepared numerous tutorials, which allow you to learn how to use MDB as well as other technologies.'
      },
      {
        date: '6',
        day: 'Saturday',
        month: 'May',
        startTime: '8:30 PM',
        endTime: '11:30 PM',
        location: ' 56-60 Tanner St',
        detail: 'Detail',
        doorPrice: '$12.6',
        homePlayer: {
          photo: '/styles/imgs/avatar1.png',
          name: 'McGreor'
        },
        awayPlayer: {
          photo: '/styles/imgs/avatar2.png',
          name: 'Roman'
        },
        description: 'We care about the development of our users. We have prepared numerous tutorials, which allow you to learn how to use MDB as well as other technologies.We care about the development of our users. We have prepared numerous tutorials, which allow you to learn how to use MDB as well as other technologies.We care about the development of our users. We have prepared numerous tutorials, which allow you to learn how to use MDB as well as other technologies.'
      }
    ]

    return new Promise((resolve, reject) => {
    	resolve(data)
    });
}