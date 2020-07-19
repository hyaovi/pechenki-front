import React, { Component } from 'react';

import React from 'react';
import { removeSession } from '../utils';

export const logUserOut = () => {
  logOut;
  removeSession('user');
};
