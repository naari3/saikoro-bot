#!/bin/sh
set -eu

ssh -t dokku@dokku.db.dwango.co.jp config:set naari_bot \
      HUBOT_HEROKU_KEEPALIVE_URL=http://naari_bot.dokku.db.dwango.co.jp \
      NPM_CONFIG_PRODUCTION=false \
      HUBOT_SLACK_TOKEN=$HUBOT_SLACK_TOKEN \
      DARK_SKY_API_SECRET_KEY=$DARK_SKY_API_SECRET_KEY \
      TZ="Asia/Tokyo"
