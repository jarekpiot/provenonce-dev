export default {
  register: 'POST /register',
  init: 'POST /agent/init',
  checkin: 'POST /agent/checkin',
  spawn: 'POST /agent/spawn',
  resync: 'POST /agent/resync',
  'beat-status': 'GET /agent/beat-status/:hash',
  status: 'GET /status/:hash',
  verify: 'GET /verify/:hash',
  anchor: 'GET /beat/anchor',
}
