APP_NAME=sei-whatdo
DB_NAME=proj_whatdo_development

dbredo:
	rails db:drop
	rails db:create
	rails db:migrate
	rails db:seed

dbreload:
	rails db:drop
	rails db:create
	rails db:schema:load
	rails db:seed

dbsync:
	heroku pg:reset -a $(APP_NAME) --confirm $(APP_NAME)
	heroku pg:push $(DB_NAME) DATABASE_URL -a $(APP_NAME)

deploy: dbsync
	git push heroku master

.PHONY: dbsync deploy
