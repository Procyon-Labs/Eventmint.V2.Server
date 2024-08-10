import React from "react";

// material-ui
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { gridSpacing } from "../../store/constant";
import Box from "@mui/material/Box";
// assets
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

type StatusColor = {
  light: string;
  dark: string;
};

// Helper function to determine color and icon based on status text
const getStatusProps = (statusText: string) => {
  let statusColor: StatusColor = { light: "", dark: "" };
  let statusIcon = (
    <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
  );

  switch (statusText.toLowerCase()) {
    case "Ticket Creation Fee":
      statusColor = { light: "primary.light", dark: "primary.dark" };
      break;
    case "Web3 Fundraising Program":
      statusColor = { light: "orange.light", dark: "orange.dark" };
      break;
    case "Crypto Masterclass Special":
      statusColor = { light: "warning.light", dark: "#Fffff" };
      break;
    case "Network Charges":
      statusColor = { light: "warning.light", dark: "#FEC26E" };
      break;
    default:
      statusColor = { light: "warning.light", dark: "" };
  }
  return { statusColor, statusIcon };
};

type SalesItemProps = {
  title: string;
  amount: string;
  sol: string;
  statusText: string;
};

const SalesItem: React.FC<SalesItemProps> = ({
  title,
  amount,
  sol,
  statusText,
}) => {
  const { statusColor, statusIcon } = getStatusProps(statusText);

  return (
    <Grid container direction="column" rowSpacing={1}>
      <Grid item>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Avatar
              variant="rounded"
              sx={{
                width: "48px",
                height: "30px",
                padding: "11px 12px 13px 12px",
                alignItems: "center",
                borderRadius: "12px",
                bgcolor: "rgba(239, 68, 68, 0.10)",
              }}
            >
              {statusIcon}
            </Avatar>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="white">
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="white">
                  {amount}
                </Typography>
                <Typography variant="subtitle2" color="white">
                  {sol}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2" sx={{ color: statusColor.dark }}>
          {statusText}
        </Typography>
      </Grid>
      <Divider sx={{ my: 1.5 }} />
    </Grid>
  );
};

type TransactionCardProps = {
  isLoading?: boolean;
};

const TransactionCard: React.FC<TransactionCardProps> = ({ isLoading }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const salesData: SalesItemProps[] = [
    {
      title: "Ticket Creation Fee",
      amount: "$10.637",
      sol: "≈0.0010 SOL",
      statusText: "Completed",
    },
    {
      title: "Web3 Fundraising Program",
      amount: "$210.077",
      sol: "≈0.0250 SOL",
      statusText: "Pending",
    },
    {
      title: "Crypto Masterclass Special",
      amount: "$123.481",
      sol: "≈0.0300 SOL",
      statusText: "Completed",
    },

    {
      title: "Network Charges",
      amount: "$06.078",
      sol: "≈0.0004 SOL",
      statusText: "Pending",
    },
  ];

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <MoreHorizOutlinedIcon
                      component="span"
                      fontSize="small"
                      sx={{
                        color: "primary.200",
                        cursor: "pointer",
                      }}
                      aria-controls="menu-popular-card"
                      aria-haspopup="true"
                      onClick={handleClick}
                    />
                    <Menu
                      id="menu-popular-card"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      variant="selectedMenu"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      <MenuItem onClick={handleClose}>Today</MenuItem>
                      <MenuItem onClick={handleClose}>This Month</MenuItem>
                      <MenuItem onClick={handleClose}>This Year</MenuItem>
                    </Menu>
                  </Grid>
                </Grid>
              </Grid>
              <Box component="section" sx={{ bgcolor: `#121519` }}>
                <Grid item xs={12}>
                  {salesData.map((item, index) => (
                    <SalesItem
                      key={index}
                      title={item.title}
                      amount={item.amount}
                      sol={item.sol}
                      statusText={item.statusText}
                    />
                  ))}
                </Grid>
              </Box>
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: "end" }}>
            <Button size="small" disableElevation>
              See all transactions
              <ChevronRightOutlinedIcon />
            </Button>
          </CardActions>
        </div>
      )}
    </>
  );
};

TransactionCard.propTypes = {};

export default TransactionCard;
