import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"

export const sideLinks = [
    {
      name: "Discover",
      path: "/discover",
      icon: <AiIcons.AiTwotoneHome />,
      cName: "nav-text"
    },
    {
      name: "New Releases",
      path: "/newReleases",
      icon: <AiIcons.AiFillFolderOpen />,
      cName: "nav-text"
    },
    {
      name: "Upcoming",
      path: "/upcoming",
      icon: <MdIcons.MdUpcoming />,
      cName: "nav-text"
    },
    {
      name: "Favorites",
      path: "/favorites",
      icon: <MdIcons.MdFavorite />,
      cName: "nav-text"
    },
];
