@echo off
title Masjid Al-Ikhsan - Website
color 0A

echo ========================================
echo   MASJID AL-IKHSAN - Website Profil
echo ========================================
echo.
echo Membuka website di browser default...
echo.

:: Buka file HTML lengkap di browser default
start "" "%~dp0masjid-al-ikhsan-lengkap.html"

:: Alternatif: jika ingin menjalankan server lokal (butuh Python)
:: start "" cmd /c "cd /d %~dp0 && python -m http.server 8080"
:: timeout /t 2 >nul
:: start http://localhost:8080

echo Website berhasil dibuka!
echo.
echo Tekan tombol apa saja untuk menutup jendela ini...
pause >nul
exit
