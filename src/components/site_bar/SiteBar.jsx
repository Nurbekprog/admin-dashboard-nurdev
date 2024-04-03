import { NavLink } from "react-router-dom";
import "./SiteBar.scss";
import GroupsIcon from "@mui/icons-material/Groups";
import { HomeOutlined, HomeRounded } from "@mui/icons-material";
const SiteBar = ({ login }) => {
  const menu = [
    {
      to: "/",
      icon: <HomeRounded fontSize="large" />,
      title: "",
    },
    {
      to: "/",
      icon: <GroupsIcon fontSize="large" />,
      title: "Students",
    },
    {
      to: "/teachers",
      icon: <GroupsIcon fontSize="large" />,
      title: "Teachers",
    },
  ];
  return (
    <>
      <div className="site_bar">
        <div className="site_bar_icon">
          <div className="site-bar-icon-item">
            {menu?.map((el, i) => (
              <NavLink
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={i}
                to={el?.to}
                onClick={el?.onClick}
              >
                {el?.icon}
                {el?.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteBar;
