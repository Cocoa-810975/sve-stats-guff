@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0"
echo.
echo   decklog 卡组码 -> JSON（会复制到剪贴板）
echo   卡组码就是网址 https://decklog.bushiroad.com/view/XXXXXX 的最后一段
echo.
set /p CODE=请输入卡组码（直接回车取消）: 
if "%CODE%"=="" goto end
where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo   没找到 node.exe。请先安装 Node.js（https://nodejs.org ），或把 node 加入 PATH。
  pause
  goto end
)
echo.
echo   正在向 decklog 请求 %CODE% ...
node "decklog-fetch.mjs" %CODE% --pretty > "%TEMP%\decklog-deck.json" 2> "%TEMP%\decklog-deck.err"
if errorlevel 1 (
  echo.
  type "%TEMP%\decklog-deck.err"
  echo.
  pause
  goto end
)
type "%TEMP%\decklog-deck.json" | clip
echo   已复制到剪贴板。
echo.
echo   回到统计站的 decklog 页面：
echo     1) 粘到「或直接粘贴 decklog 数据（JSON）」那个框里
echo     2) 点「解析并升罕」
echo.
pause
:end
endlocal
