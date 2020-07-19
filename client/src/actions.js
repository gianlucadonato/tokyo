export const actionType = {
  START_CHANNEL: 'START_CHANNEL',
  STOP_CHANNEL: 'STOP_CHANNEL',
  CHANNEL_ON: 'CHANNEL_ON',
  CHANNEL_OFF: 'CHANNEL_OFF',
  SERVER_ON: 'SERVER_ON',
  SERVER_OFF: 'SERVER_OFF',
  NOTIFY: 'NOTIFY',
  COMMAND: 'COMMAND',
  LOGOUT: 'LOGOUT',
  SET_USER: 'SET_USER',
  REMOVE_USER: 'REMOVE_USER',
  SET_PLAYERS: 'SET_PLAYERS',
  GAME_STARTED: 'GAME_STARTED',
  GET_GAMES: 'GET_GAMES',
  SET_GAME: 'SET_GAME',
  SET_GAMES: 'SET_GAMES',
  DELETE_GAME: 'DELETE_GAME',
  ENSURE_USER: 'ENSURE_USER',
  ENSURE_GAME: 'ENSURE_GAME',
};

export default {
  startChannel: () => ({ type: actionType.START_CHANNEL }),
  stopChannel: () => ({ type: actionType.STOP_CHANNEL }),
  notify: (payload) => ({ type: actionType.NOTIFY, payload }),
  logout: () => ({ type: actionType.LOGOUT }),
  sendCommand: (command) => ({ type: actionType.COMMAND, command }),
  ensureUser: () => ({ type: actionType.ENSURE_USER }),
  setUser: (payload) => ({ type: actionType.SET_USER, payload }),
  removeUser: () => ({ type: actionType.REMOVE_USER }),
  setPlayers: (players) => ({ type: actionType.SET_PLAYERS, payload: players }),
  ensureGame: (gameId) => ({ type: actionType.ENSURE_GAME, gameId }),
  getGames: () => ({ type: actionType.GET_GAMES }),
  setGames: (payload) => ({ type: actionType.SET_GAMES, payload }),
  setGame: (payload) => ({ type: actionType.SET_GAME, payload }),
  deleteGame: (payload) => ({ type: actionType.DELETE_GAME, payload }),
}