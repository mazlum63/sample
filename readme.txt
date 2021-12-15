.gitignore dosyası oluştur ve için "node_modules" ve "dist" dosyası ekle
npm init -y  sonraki her yuklemede sayfadaki ayarlari gozden gecir
npm install webpack webpack-cli --save-dev >> "src" klasörü içine index.js oluştur config dosyası oluştur clean ekle
npm install --save-dev webpack-dev-server >> mode ve script ekle hot devtool(false)
npm install --save-dev css-loader
npm install --save-dev style-loader
npm install sass-loader sass --save-dev >> "src" içine style.scss oluştur
npm install --save-dev postcss-loader postcss-preset-env postcss >> postcss.config.js oluştur config dosyasi ayarla
npm install --save-dev mini-css-extract-plugin >> config build ve coding ayarlari yap
npm install --save-dev html-webpack-plugin >> "src" içine index.html oluştur plugin ayarları yap
npm install --save-dev html-loader asset management dosya eklemeyi aktifleştir ve assets modules output isim ayari yap
npm install --save-dev bootstrap popper.js >> scss ve js dosyaları ekle
media ve mixin ayarla

gerektiginde splitchunk ekle

bitbucket repo oluştur
git init
git add .
git commit -m "initial commit"
git remote add origin http...
git push -u origin master