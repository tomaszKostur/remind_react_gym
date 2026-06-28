pnpm build
# cp -r ./dist/* /usr/share/nginx/html/

# the react_demo app
rm -rf /var/www/html/*
mkdir -p /var/www/html/react_demo
cp -r ./dist/* /var/www/html/react_demo

# landing_page
cp ./landing_page/index.html /var/www/html/index.html
cp ./landing_page/style_landing_page.css /var/www/html/style_landing_page.css

nginx -s quit
nginx
# nginx -s quit # to gracefully stop nginx