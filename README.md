### 本插件将会根据配置替换字符串，适用于打包规则


	npm install fis-postprocessor-replace_huya -g

fis-conf

	settings.postprocessor.replace_huya = {
	    rule:{
	        '{api-url}|i': '/json/login.json',
	    }
	}

这样配置的话，将在编译阶段根据正则替换`{api-url} `对应的`/json/login.json