ServiceConfiguration.configurations.upsert(
  { service: Meteor.settings.FB_SERVICE },
  { 
    $set: {
      appId: Meteor.settings.FB_APPID,
      secret: Meteor.settings.FB_SECRET
    }
  }
);