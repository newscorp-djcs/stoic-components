/* eslint-disable no-undef */
import {createEvent, fireEvent} from '@testing-library/react';
import {RefObject} from 'react';
import {renderHook} from '../../../test/test-utils';
import {useKeypress} from '..';

describe('use keypress hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('will invoke event callback function on keyup', () => {
    const callbackMock = jest.fn();
    renderHook(() => useKeypress('a', callbackMock));

    fireEvent.keyUp(document, {key: 'a'});

    expect(callbackMock).toHaveBeenCalled();
  });

  test('will invoke event callback function on keyup when a key with different browsers values is pressed', () => {
    const callbackMock = jest.fn();
    renderHook(() => useKeypress('Escape', callbackMock));

    fireEvent.keyUp(document, {key: 'Escape'});

    expect(callbackMock).toHaveBeenCalled();
  });

  test('will not invoke event callback function on keyup if key not recognized', () => {
    const callbackMock = jest.fn();
    renderHook(() => useKeypress('Escapppe', callbackMock));

    fireEvent.keyUp(document, {key: 'Escape'});

    expect(callbackMock).not.toHaveBeenCalled();
  });

  test('will not invoke event callback function on keyup if enabled prop is false', () => {
    const callbackMock = jest.fn();
    renderHook(() => useKeypress('Escape', callbackMock, {enabled: false}));

    fireEvent.keyUp(document, {key: 'Escape'});

    expect(callbackMock).not.toHaveBeenCalled();
  });

  test('will not invoke event callback function if eventType prop is not a keyboard event', () => {
    const callbackMock = jest.fn();
    renderHook(() =>
      useKeypress('Escape', callbackMock, {eventType: 'click' as any}),
    );

    fireEvent.click(document);

    expect(callbackMock).not.toHaveBeenCalled();
  });

  test('will not invoke event callback function if event is already prevented', () => {
    const callbackMock = jest.fn();
    renderHook(() => useKeypress('Escape', callbackMock));

    const customKeyupEvent = createEvent.keyUp(document, {
      key: 'Escape',
    });

    customKeyupEvent.preventDefault();

    fireEvent(document, customKeyupEvent);

    expect(callbackMock).not.toHaveBeenCalled();
  });

  test('will invoke event callback function on target element', () => {
    const callbackMock = jest.fn();
    const newDiv = document.createElement('div');
    const refMock = {
      current: newDiv,
    } as RefObject<HTMLElement>;

    renderHook(() => useKeypress('Escape', callbackMock, {target: refMock}));

    fireEvent.keyUp(newDiv, {key: 'Escape'});

    expect(callbackMock).toHaveBeenCalled();
  });
});