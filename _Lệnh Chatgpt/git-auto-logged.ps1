# ==== CONFIG ====
$RepoDir = "C:\Users\maian\Desktop\Github-Inniqueen"
$DefaultName  = "TH01157"
$DefaultEmail = "heinze01157@gmail.com"
$LogFile = Join-Path $RepoDir "git-log.jsonl"

# ==== Helper: logging JSON & colored output ====
function Write-Log {
    param([string]$Level="INFO",[string]$Message="")
    $entry = [pscustomobject]@{
        ts    = (Get-Date).ToString("s")
        level = $Level
        msg   = $Message
    }
    $json = $entry | ConvertTo-Json -Compress
    Add-Content -Path $LogFile -Value $json
    switch ($Level) {
        "INFO"  { Write-Host "[INFO]  $Message" -ForegroundColor Cyan }
        "WARN"  { Write-Host "[WARN]  $Message" -ForegroundColor Yellow }
        "ERROR" { Write-Host "[ERROR] $Message" -ForegroundColor Red }
        default { Write-Host "[LOG]   $Message" }
    }
}

# ==== Start ====
Write-Log INFO "=== START RUN ==="

# 0) Kiểm tra Git đã cài chưa
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Log ERROR "Git not found. Please install Git for Windows."
    throw "Git is not installed."
}

# 1) Tới đúng thư mục repo
if (-not (Test-Path $RepoDir)) {
    Write-Log ERROR "Repo folder not found: $RepoDir"
    throw "Repo folder not found."
}
Set-Location $RepoDir
Write-Log INFO "Working dir: $RepoDir"

# 2) Kiểm tra & thiết lập user.name / user.email nếu thiếu
$name  = (git config user.name) 2>$null
$email = (git config user.email) 2>$null
if (-not $name) {
    git config --global user.name "$DefaultName" | Out-Null
    Write-Log WARN "user.name missing → set global to '$DefaultName'"
}
if (-not $email) {
    git config --global user.email "$DefaultEmail" | Out-Null
    Write-Log WARN "user.email missing → set global to '$DefaultEmail'"
}

# 3) Pull
Write-Log INFO "git pull origin main"
git pull origin main 2>&1 | Tee-Object -Variable pullOut | Out-Null
Write-Log INFO ($pullOut -join " ")

# 4) Stage all
Write-Log INFO "git add ."
git add . 2>&1 | Out-Null

# 5) Kiểm tra có thay đổi không
$changes = git status --porcelain
if ([string]::IsNullOrWhiteSpace($changes)) {
    Write-Log INFO "No changes to commit."
} else {
    # Nhập commit message (mặc định nếu bỏ trống)
    $msg = Read-Host "Nhap commit message"
    if ([string]::IsNullOrWhiteSpace($msg)) { $msg = "Auto update" }
    Write-Log INFO "git commit -m '$msg'"
    git commit -m "$msg" 2>&1 | Tee-Object -Variable commitOut | Out-Null
    Write-Log INFO ($commitOut -join " ")
}

# 6) Push
Write-Log INFO "git push origin main"
git push origin main 2>&1 | Tee-Object -Variable pushOut | Out-Null
Write-Log INFO ($pushOut -join " ")

Write-Log INFO "=== END RUN ==="
Write-Host "`nHoàn tất! Log lưu tại: $LogFile" -ForegroundColor Green
