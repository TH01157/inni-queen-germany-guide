@echo off
setlocal

REM ==== Thư mục repo ====
cd /d "C:\Users\maian\Desktop\Github-Inniqueen" || (
  echo Khong tim thay thu muc repo. Kiem tra lai duong dan.
  pause
  exit /b 1
)

REM ==== Kiem tra user.name ====
for /f "delims=" %%i in ('git config user.name') do set GIT_NAME=%%i
if "%GIT_NAME%"=="" (
  echo Chua co user.name -> Cai dat mac dinh: TH01157
  git config --global user.name "TH01157"
)

REM ==== Kiem tra user.email ====
for /f "delims=" %%i in ('git config user.email') do set GIT_EMAIL=%%i
if "%GIT_EMAIL%"=="" (
  echo Chua co user.email -> Cai dat mac dinh: heinze01157@gmail.com
  git config --global user.email "heinze01157@gmail.com"
)

REM ==== Dong bo code moi nhat ve ====
git pull origin main

REM ==== Nhap commit message ====
set /p msg=Nhap commit message: 
if "%msg%"=="" set msg=Auto update

git add .

REM ==== Neu khong co gi thay doi thi bo qua commit ====
for /f "delims=" %%A in ('git status --porcelain') do set changed=1

if not defined changed (
  echo Khong co thay doi nao de commit. Chi push neu can.
) else (
  git commit -m "%msg%"
)

git push origin main

echo ==== Hoan tat! ====
pause
