pnpm build
cp -r ./dist/* /usr/share/nginx/html
nginx
# nginx -s quit # to gracefully stop nginx