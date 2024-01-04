.\.venv\Scripts\activate.bat
pip install --upgrade pip
pip install -r requirements.txt
reflex init
reflex export --frontend-only
rmdir public
mkdir public
move frontend.zip public
cd public
tar -xf frontend.zip 
del /s /q frontend.zip
cd ..
.\.venv\Scripts\deactivate.bat