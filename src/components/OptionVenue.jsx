import React from "react";
import { Button } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditVenue from "./EditVenue";
import DeleteData from "../api/DeleteData";
import { API_URL, API_venues } from "../api/constants/url";
import { useNavigate } from "react-router-dom";

function OptionForVenue({ item }) {
  const {id} = item;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [openModalEdit, setOpenModalEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenModalEdit(true);
  const handleCloseModalEdit = () => setOpenModalEdit(false);

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseIcon = () => {
    setAnchorEl(null);
  };

  const modal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#f6f6f6",
    border: "1px solid #0031DD",
    boxShadow: 24,
    borderRadius: 10,
  };

  const navigate = useNavigate();

  const onDelete = async () => {
    const response = await DeleteData(`${API_URL}${API_venues}/` + id)
    if(response.ok) {
      navigate("/profile/");
    }
  }

  return (
    <>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon className="icon" sx={{ width: 30, height: 30 }} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseIcon}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleOpenEdit}>Edit</MenuItem>
        <MenuItem onClick={onDelete}>Delete</MenuItem>
        <Modal
          open={openModalEdit}
          onClose={handleCloseModalEdit}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modal}>
            <EditVenue item={item} />
          </Box>
        </Modal>
      </Menu>
    </>
  );
}

export default OptionForVenue;
