import React from "react";
import { ReactDOM } from "react";
import { render } from '@testing-library/react';
import profileReducer, { addPostActionCreator } from "../redux/profile-reducer";

let state = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Dima' }
  ],
  messages: [
    { id: 1, message: 'Hi how are you profile-reducer', likesCount: 12 },
    { id: 2, message: 'Hi how are you profile-reducer', likesCount: 14 },
    { id: 3, message: 'Its my first message profile-reducer', likesCount: 16 },
    { id: 4, message: 'its just textprofile-reducer', likesCount: 18 }
  ]
};






test('new post should be added', () => {
  // 1. test data
    let action = addPostActionCreator("it-kamasutra.com");

// 1. action
    let newState = profileReducer(state, action);
// 1. expectation
    expect(newState.messages.length).toBe(5);
  });

