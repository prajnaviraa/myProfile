export const projectsFetchSuccess = (payload) => {
  return {
    type: "projects/fetchSuccess",
    payload: payload,
  };
};

export const fetchProjects = () => {
  return (dispatch) => {
    const data = [
      {
        name: "Dota Counterpicker",
        imgSrc: "./dotapicker.jpg",
        link: "https://iproject-counterpicker.web.app/",
      },
      {
        name: "My Movie Database (MMDB) Client",
        imgSrc: "./mmdb-client.jpg",
        link: "https://mmdb-user.web.app/",
      },
      {
        name: "My Movie Database (MMDB) Admin",
        imgSrc: "./mmdb-admin.jpg",
        link: "https://mmdb-admin.web.app/",
      },
      {
        name: "My Movie Database (MMDB) Mobile",
        imgSrc: "./mmdb-mobile.jpg",
        link: "https://expo.dev/@prajnaviraa/client?serviceType=classic&distribution=expo-go",
      },
    ];
    const action = projectsFetchSuccess(data);
    dispatch(action);
  };
};
