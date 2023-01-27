{
	"info": {
		"_postman_id": "c2c34204-a82a-45fe-a738-c26a22424c5f",
		"name": "Starwars",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "23838005"
	},
	"item": [
		{
			"name": "People ID 10",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Ожидаю статус ответа 200\", function() {pm.response.to.have.status(200);})\r",
							"\r",
							"pm.test(\"Response time is less than 200ms\", function () {pm.expect(pm.response.responseTime).to.be.below(200);});\r",
							"\r",
							"pm.test(\"Status code name has string\", function () {pm.response.to.have.status(\"OK\");});\r",
							"\r",
							"pm.test(\"Значение поля mass = 77\", function () {\r",
							"    var jsonData = pm.response.json();\r",
							"    pm.expect(jsonData.mass).to.eql(\"77\");\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{host}}/api/people/10",
					"host": [
						"{{host}}"
					],
					"path": [
						"api",
						"people",
						"10"
					],
					"query": [
						{
							"key": "",
							"value": "10",
							"disabled": true
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Planet id 7",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Ожидаю статус ответа 200\", function() {pm.response.to.have.status(200);})\r",
							"\r",
							"pm.test(\"Response time is less than 1000ms\", function () {pm.expect(pm.response.responseTime).to.be.below(1000);});\r",
							"\r",
							"pm.test(\"Status code name has string\", function () {pm.response.to.have.status(\"OK\");});\r",
							"\r",
							"\r",
							"const jsonData = pm.response.json();\r",
							"  pm.test(\"Проверка Имя = Endor и диаметр=4900\", () => {  \r",
							"  pm.expect(jsonData.name).to.include('Endor');   \r",
							"  pm.expect(jsonData.diameter).to.include(\"4900\");\r",
							"  });"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{host}}/api/planets/7",
					"host": [
						"{{host}}"
					],
					"path": [
						"api",
						"planets",
						"7"
					]
				}
			},
			"response": []
		},
		{
			"name": "Starships  id 5",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Ожидаю статус ответа 200\", function() {pm.response.to.have.status(200);})\r",
							"\r",
							"pm.test(\"Response time is less than 200ms\", function () {pm.expect(pm.response.responseTime).to.be.below(200);});\r",
							"\r",
							"pm.test(\"Status code name has string\", function () {pm.response.to.have.status(\"OK\");});\r",
							"pm.test(\"Наличие в ответе поля\", function () {\r",
							"    pm.expect(pm.response.text()).to.include(\"Sentinel-class landing craft\");\r",
							"});\r",
							"pm.test(\"Значение поля равно:\", function () {\r",
							"    var jsonData = pm.response.json();\r",
							"    pm.expect(jsonData.max_atmosphering_speed).to.eql('1000');\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{host}}/api/starships/5",
					"host": [
						"{{host}}"
					],
					"path": [
						"api",
						"starships",
						"5"
					]
				}
			},
			"response": []
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "host",
			"value": "",
			"type": "string"
		}
	]
}