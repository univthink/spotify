module.exports = {
  database: process.env.MONGOLAB_URI || 'localhost:5000/SpotRoom',
  spotify_client_id: 'ef34a2841479421ea9a4851986c94b7d' ,
  spotify_client_secret: 'a788bb3831b04560a5a6971d5bc2fade',
  spotify_callback_url: 'https://sporti.herokuapp.com/auth/callback/'
};
