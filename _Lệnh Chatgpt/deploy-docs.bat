@echo off
setlocal
cd /d "C:\Users\maian\Desktop\Github-Inniqueen" || exit /b 1

npm ci || exit /b 1
npm run build || exit /b 1

if exist docs rmdir /S /Q docs
rename dist docs
if exist CNAME copy /Y CNAME docs\CNAME

git add -A
git commit -m "publish: update from Lovable"
git push origin main

echo Done! Refresh www.inniqueen.com
pause
