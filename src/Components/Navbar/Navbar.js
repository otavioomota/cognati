import React,{Component} from 'react';

import {
  Button,
  ClickAwayListener,
  Hidden,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Reorder'

import AnchorLink from 'react-anchor-link-smooth-scroll';

import './Navbar.css';


class Navbar extends Component {
  state = {
    className: "",
    open: false
  }

  handleScroll = (event) => {
      if(document.documentElement.scrollTop >= 100) {
        this.setState({
          className: "scrolled"
        })
      } else{
        this.setState({
          className: ""
        })
      }
  }

  handleToggle = () => {
    this.setState(state => ({
      open: !state.open
    }))
  }
  handleClose = (event) => {
    if(this.anchorEl.contains(event.target)){
      return ;
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }
  render(){


    const { open } = this.state;

    return (

      <div className={`container ${this.state.className}`} >
        <Hidden smDown>
          <div >
            <nav>
              <ul className="menu">
                <li className="button"><AnchorLink href="#inicio">Início</AnchorLink></li>
                <li className="button"><AnchorLink href="#quemsomos">Quem Somos</AnchorLink></li>
                <li className="button"><AnchorLink href="#servico">Nossos Serviços</AnchorLink></li>
                <li className="button"><AnchorLink href="#comofazemos">Como Fazemos</AnchorLink></li>
                <li className="button"><AnchorLink href="#portifolio">Portifólio</AnchorLink></li>
                <li className="button"><AnchorLink href="#contato">Contato</AnchorLink></li>
              </ul>
            </nav>
          </div>
        </Hidden>
        <Hidden mdUp>
          <Button fab
             color="primary"
             buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : null}
            aria-haspopup="true"
            onClick={this.handleToggle}
            id="icon"
             >
            <MenuIcon />
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <MenuItem onClick={this.handleClose}><AnchorLink href="#inicio">Início</AnchorLink></MenuItem>
                    <MenuItem onClick={this.handleClose}><AnchorLink href="#quemsomos">Quem Somos</AnchorLink></MenuItem>
                    <MenuItem onClick={this.handleClose}><AnchorLink href="#servicos">Nossos Serviços</AnchorLink></MenuItem>
                    <MenuItem onClick={this.handleClose}><AnchorLink href="#portifolio">Portifólio</AnchorLink></MenuItem>
                    <MenuItem onClick={this.handleClose}><AnchorLink href="#contato">Contato</AnchorLink></MenuItem>
                  </MenuList>

                </ClickAwayListener>
              </Paper>
            </Grow>
            )}
          </Popper>
        </Hidden>
      </div>
    )
  }
}

export default Navbar;
