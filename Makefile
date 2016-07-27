install:
	npm install

dev:
	./node_modules/.bin/webpack-dev-server

test:
	karma start

tree:
	cd .. && tree -I node_modules -A -F angular2-redux-chat

production:
	webpack
  s3cmd sync build/ s3://redux-chat.ng-book.com/
  s3cmd setacl s3://redux-chat.ng-book.com/ --acl-public --recursive

