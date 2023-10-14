import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuLayoutDashboard } from 'react-icons/lu';
import { AiOutlineDown, AiOutlineMenu, AiOutlineRight } from 'react-icons/ai';
import './Sidebar.css';
import { SidebarData } from '../../assets/Data/Data';
import userImg from '../../assets/imgs/img1.png';

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <div className="bars" style={expanded ? { left: '55%' } : { left: '5%' }} onClick={() => setExpanded(!expanded)}>
        <AiOutlineMenu />
      </div>

      <div className="sidebar">
        {/* logo */}
        <Link to="/">
          <div className="logo" onClick={() => setExpanded(!expanded)}>
            <LuLayoutDashboard />
            Dashboard
          </div>
        </Link>

        {/* menu */}
        <div className="menu">
          {SidebarData.map((item, ind) => {
            return (
              <div key={ind}>
                <Link to={`/${item.heading}`}>
                  <div
                    className={selected === ind ? 'menuItem active' : 'menuItem'}
                    onClick={() => {
                      setSelected(ind);
                      setExpanded(!expanded);
                    }}>
                    <div className="itemHeading">
                      <item.icon />
                      <span>{item.heading}</span>
                    </div>
                    <AiOutlineRight />
                  </div>
                </Link>
              </div>
            );
          })}
          <div className="active" id="user">
            <div className="user">
              <img src={userImg} alt="userImage" />
              <div className="userInfo">
                <span className="userName">Evano</span>
                <span className="userDesignation">Project Manager</span>
              </div>
              <AiOutlineDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
