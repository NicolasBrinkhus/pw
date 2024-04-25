var push = require("web-push");

let vapidKeys = {
  publicKey:
    "BDPynhjOJ3NbxrTUjbtlKk6Tz7eQjvZbBYo7rSgyDV2FL8Gm_fISRICUs6X8Mpi14GqZTiChGQ_djqWu00IbwNs",
  privateKey: "Z68YivSQpGrohU6MZ1hro24AB_YnG0lcSnIsN2w5Yaw",
};

push.setVapidDetails(
  "mailto:test@test.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {};

push.sendNotification(sub, "test message");
