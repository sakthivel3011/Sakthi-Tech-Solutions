@echo off
cd /d "f:\PROJECT\sakthi-tech-solutions"
echo # Sakthi-Tech-Solutions >> README.md
git init
git add .
git commit -m "Website fixes: Dark mode, responsive design, CSS updates"
git branch -M main
git remote add origin https://github.com/sakthivel3011/Sakthi-Tech-Solutions.git
git push -u origin main
pause
