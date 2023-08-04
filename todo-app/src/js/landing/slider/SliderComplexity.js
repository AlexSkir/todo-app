import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import SubdirectoryArrowRightOutlinedIcon from '@mui/icons-material/SubdirectoryArrowRightOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import AlarmOnOutlinedIcon from '@mui/icons-material/AlarmOnOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';

import Typography from '../../common/Typography';

const icon = {
  fontSize: '24px',
  color: 'primary.dark',
};

const listData = [
  {
    icon: <AddIcon className="item-list_itemList__icon" sx={icon} />,
    text: 'Add a task',
  },
  {
    icon: <SubdirectoryArrowRightOutlinedIcon className="item-list_itemList__icon" sx={icon} />,
    text: 'Break into subtasks',
  },
  {
    icon: <DescriptionOutlinedIcon className="item-list_itemList__icon" sx={icon} />,
    text: 'Move tasks to a project',
  },
  {
    icon: <FolderSharedOutlinedIcon className="item-list_itemList__icon" sx={icon} />,
    text: 'Share your projects',
  },
  {
    icon: <FlagOutlinedIcon className="item-list_itemList__icon" sx={icon} />,
    text: 'Give tasks a priority level',
  },
  {
    icon: <AlarmOnOutlinedIcon className="item-list_itemList__icon" sx={icon} />,
    text: 'Set up reminders',
  },
  {
    icon: <FilterAltOutlinedIcon className="item-list_itemList__icon" sx={icon} />,
    text: 'Create filter views',
  },
  {
    icon: <TaskOutlinedIcon className="item-list_itemList__icon" sx={icon} />,
    text: 'Complete tasks',
  },
];

function SliderComplexityList(props) {
  const { progress } = props;

  const renderListItems = () => {
    let listItemsArr = [];
    switch (progress) {
      case 1:
        listItemsArr = listData.slice(0, 2);
        break;
      case 33:
        listItemsArr = listData.slice(0, 4);
        break;
      case 67:
        listItemsArr = listData.slice(0, 6);
        break;
      case 100:
        listItemsArr = listData.slice(0, 8);
        break;
      default:
        listItemsArr = [];
        break;
    }

    if (listItemsArr.length > 0) {
      return listItemsArr.map((item, i) => {
        return (
          <ListItem className="item-list_itemList__item" key={i} disablePadding>
            <ListItemIcon className="item-list_itemList__icon-wrapper">{item.icon}</ListItemIcon>
            <ListItemText className="item-list_itemList__text">
              <Typography variant="h5" align="left">
                {item.text}
              </Typography>
            </ListItemText>
          </ListItem>
        );
      });
    }
    return <></>;
  };

  return (
    <Box className="complexity-slider-section_list" sx={{ color: 'primary.dark' }}>
      <List className="item-list_itemList">{renderListItems()}</List>
    </Box>
  );
}

SliderComplexityList.propTypes = {
  progress: PropTypes.number,
};

export default SliderComplexityList;
