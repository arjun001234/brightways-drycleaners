import React from "react";
import { basicButton } from "~/utils/styles";
import { AppContext } from "../context/appContext";

export enum colors  {
  WHITE = "white",
  BLACK = "black",
  PRIMARY = "primary",
  INHERIT = "inherit",
  GRAY = "gray-400",
}

type ScheduleButtonProps = {
  content?: string
  mobileVisibity?: boolean,
  classes?: string
}

const ScheduleButton: React.FC<ScheduleButtonProps> = ({content = "Schedule a Pickup",mobileVisibity = true,classes = basicButton}) => {
  const { openBookingModal } = React.useContext(AppContext);

  return (
    <div
      id="booking-button"
      onClick={() => openBookingModal(true)}
      className={`${classes} ${mobileVisibity ? "" : "lg:flex hidden"} `}
    >
      {content}
    </div>
  );
};

export default ScheduleButton;
