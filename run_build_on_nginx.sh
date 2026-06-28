pnpm build
# cp -r ./dist/* /usr/share/nginx/html/

mkdir -p /var/www/html/react_demo
rm -rf /var/www/html/react_demo/*
cp -r ./dist/* /var/www/html/react_demo
nginx -s quit
nginx
# nginx -s quit # to gracefully stop nginx