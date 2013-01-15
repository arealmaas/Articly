'use strict';

ArticlyApp.value('articles', [
    {
      id:1,
      link:'http://developer.chrome.com/apps/angular_framework.html', 
      text:'Stackoverflow vs. web api',
      about:'The article is about a comparison between the two web api\'s for .NET.',
      author:'are',
      members:[{

          name:"are",
          done:false
        },
        {
          name:"kenneth",
          done:false
        },
        {
          name:"TC",
          done:false
        },
        {
          name:"erich",
          done:false
      }
      ],
      addDate:new Date(),
      read:false
    }
]);
