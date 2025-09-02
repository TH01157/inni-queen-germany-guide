@echo off
setlocal ENABLEDELAYEDEXPANSION

REM ==== THU MUC REPO ====
set REPO_DIR=C:\Users\maian\Desktop\Github-Inniqueen
cd /d "%REPO_DIR%" || (
  echo [%date% %time%] ERROR: Khong tim thay thu muc repo "%REPO_DIR%".
  pause
  exit /b 1
)

REM ==== LOG FILE ====
set LOG_FILE=%REPO_DIR%\git-log.txt
echo.>> "%LOG_FILE%"
echo =============================>> "%LOG_FILE%"
echo [START] %date% %time% >> "%LOG_FILE%"

REM ==== KIEM TRA / CAI DAT user.name, user.email ====
for /f "delims=" %%i in ('git config user.name') do set GIT_NAME=%%i
if "%GIT_NAME%"=="" (
  echo [%date% %time%] INFO: Set user.name = TH01157 >> "%LOG_FILE%"
  git config --global user.name "TH01157" >> "%LOG_FILE%" 2>&1
)

for /f "delims=" %%i in ('git config user.email') do set GIT_EMAIL=%%i
if "%GIT_EMAIL%"=="" (
  echo [%date% %time%] INFO: Set user.email = heinze01157@gmail.com >> "%LOG_FILE%"
  git config --global user.email "heinze01157@gmail.com" >> "%LOG_FILE%" 2>&1
)

echo [%date% %time%] INFO: Pull origin main >> "%LOG_FILE%"
git pull origin main >> "%LOG_FILE%" 2>&1

REM ==== NHAP COMMIT MESSAGE ====
set /p MSG=Nhap commit message: 
if "%MSG%"=="" set MSG=Auto update

REM ==== STAGE FILES ====
echo [%date% %time%] INFO: git add . >> "%LOG_FILE%"
git add . >> "%LOG_FILE%" 2>&1

REM ==== KIEM TRA CO THAY DOI KHONG ====
set CHANGED=
for /f "delims=" %%A in ('git status --porcelain') do set CHANGED=1

if not defined CHANGED (
  echo [%date% %time%] INFO: Khong co thay doi de commit. >> "%LOG_FILE%"
) else (
  echo [%date% %time%] INFO: git commit -m "%MSG%" >> "%LOG_FILE%"
  git commit -m "%MSG%" >> "%LOG_FILE%" 2>&1
)

REM ==== PUSH ====
echo [%date% %time%] INFO: git push origin main >> "%LOG_FILE%"
git push origin main >> "%LOG_FILE%" 2>&1

echo [END] %date% %time% >> "%LOG_FILE%"
echo =============================>> "%LOG_FILE%"
echo.
echo ==== Hoan tat! Xem log tai: "%LOG_FILE%" ====

pause
