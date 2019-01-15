import React, { Component } from 'react';
import PropTypes from 'prop-types';

const pagination({total, activePage}) =>{
  return Array.from({length:total},(_,i)=> i+1);
}
export default pagination;
