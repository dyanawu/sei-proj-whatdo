APP_NAME=sei-whatdo
DB_NAME=proj_whatdo_development

dbsync:
	heroku pg:reset -a $(APP_NAME) --confirm $(APP_NAME)
	heroku pg:push $(DB_NAME) DATABASE_URL -a $(APP_NAME)

deploy: dbsync
	git push heroku master

.PHONY: dbsync deploy
