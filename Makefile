# docker-composeコマンド
up:
	docker-compose up -d
build:
	docker-compose up -d --build
down:
	docker-compose down
restart:
	docker-compose down
	docker-compose up -d --build

# nuxtの導入(ファイルの追記あり)
nuxt:
	npx create-nuxt-app frontend
	cp .env.example .env
	docker-compose up -d --build
	docker-compose exec front npm install --save @nuxtjs/dotenv
	docker-compose exec front touch .env
	docker-compose exec front npm install sass-loader@10.1.1 sass --save-dev
	docker-compose exec front npm install css-wipe --save