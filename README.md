CasperJS Test Application
=========================

Application that runs [CasperJS](http://casperjs.org/) on [Semaphore](http://semaphoreapp.com).

Build commands:

```
bundle install --deployment --path vendor/bundle
bundle exec rake db:setup
bundle exec rake db:test:prepare
git clone git://github.com/n1k0/casperjs.git ~/casperjs
cd ~/casperjs
sudo ln -sf `pwd`/bin/casperjs /usr/local/bin/casperjs
cd -
bundle exec rails server -p 3000 -e test &
sleep 30
casperjs --direct test test/javascripts/posts.js
```
