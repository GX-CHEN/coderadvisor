cd '/root/coderadvisor' || exit
git pull

# deploy frontend portion
cd '/root/coderadvisor/client' || exit
npm install
npm run build
sudo cp -r build/ /var/www/html/
sudo service nginx reload