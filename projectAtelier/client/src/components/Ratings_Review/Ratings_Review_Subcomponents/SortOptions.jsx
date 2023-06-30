/* eslint-disable react/prop-types */
import {useEffect, useState, useRef} from 'react';
import { Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, Stack} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SortOptions = ({ product_id, getReviews, setReviewRenders, setSorting }) => {


const [open, setOpen] = useState(false);
const anchorRef = useRef(null);

const handleSorting = (e) => {
  console.log(e.target.getAttribute('value'));
  setSorting(e.target.getAttribute('value'));
  getReviews(product_id, 2);
  setReviewRenders(4);
  handleClose(e);
};
const handleToggle = () => {
  setOpen((prevOpen) => !prevOpen);
};
const handleClose = (e) => {
  if (anchorRef.current && anchorRef.current.contains(e.target)) return;

  setOpen(false);
};
const handleListKeyDown = (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    setOpen(false);
  } else if (e.key === 'Escape') {
    setOpen(false);
  }
};
const prevOpen = useRef(open);
useEffect(() => {
  if (prevOpen.current === true && open === false) {
    anchorRef.current.focus();
  }

  prevOpen.current = open;
}, [open]);


////////////////////////////////////////////////////////
  return (
    <Stack direction='row' spacing={2}>
      <h3>Sorted by</h3>

      <Stack direction="row" spacing={2}>
        <div>
          <Button
            variant='text'
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            endIcon={<KeyboardArrowDownIcon/>}
          >

            {
              sorting === 'newest' ?
                'newest'
              : sorting === 'helpful' ?
                'helpfulness'
              : 'relevance'
            }

          </Button>
          <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      onClick={handleSorting}
                      value='newest'
                    >
                      Newest
                    </MenuItem>
                    <MenuItem
                      onClick={handleSorting}
                      value='helpful'
                    >
                      Helpfulness
                    </MenuItem>
                    <MenuItem
                      onClick={handleSorting}
                      value='relevant'
                    >
                      Relevance
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </div>
      </Stack>
    </Stack>
  );
};

export default SortOptions;