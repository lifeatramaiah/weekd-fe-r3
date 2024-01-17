export const INPUTS = {
  // layout: [{
  //   inputs: [{

  //   }]
  // }],
  // inputs: {
  //   1: {
  //     id: 1,
  //     title: "First Name",
  //     type: "TEXT" | "EMAIL",
  //     regex: /(a-zA-Z)+@.*/.exec("dnvr.dsz@gmail.com"), // dnvr.dsz@gmail.com
  //   },
  //   2: {
  //     id: 2,
  //     title: "Last Name",
  //     type: "TEXT" | "EMAIL",
  //     regex: /(a-zA-Z)+@.*/.exec("dnvr.dsz@gmail.com"), // dnvr.dsz@gmail.com
  //   },
  //   3: {
  //     id: 3,
  //     title: "What is your current salary (in LPA)?*",
  //     type: "NUMBER",
  //   },
  // },

  main: [
    {
      inputs: [
        {
          id: 1,
          title: "First Name",
          type: "TEXT" | "EMAIL",
          regex: /(a-zA-Z)+@.*/.exec("dnvr.dsz@gmail.com"), // dnvr.dsz@gmail.com
        },
        {
          id: 2,
          title: "Last Name",
          type: "TEXT" | "EMAIL",
          regex: /(a-zA-Z)+@.*/.exec("dnvr.dsz@gmail.com"), // dnvr.dsz@gmail.com
        },
      ],
    },
    {
      // id: 2,
      inputs: [
        {
          id: 3,
          title: "What is your current salary (in LPA)?*",
          type: "NUMBER",
        },
      ],
    },
    {
      // id: 3,
      inputs: [
        {
          id: 4,
          title: "How likely are you to switch jobs?*",
          type: "SELECT",
          options: [
            {
              value: "A",
            },
            {
              value: "B",
              subQuestionIds: [4],
            },
            {
              value: "C",
            },
          ],
        },
      ],
    },
    {
      inputs: [
        {
          id: 5,
          title: "What is your last working date?",
          type: "DATE",
        },
      ],
      parentId: 3,
    },
    {
      id: 5,
      inputs: [
        {
          title: "How confidential do you want your job search to be?",
          type: "RADIO",
          options: [
            {
              value: "You can feature/promote my profile with Weekday",
            },
            {
              value: "Allow only my referrer to know for reference checks ℹ️",
            },
          ],
        },
      ],
    },
  ],
};

const payload = {
  responses: [
    {
      id: 1,
      value: "",
    },
  ],
};
