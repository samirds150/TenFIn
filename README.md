## Installation

### Prerequisites
- Python (>=3.8)
- Node.js (>=14.0)
- npm or yarn
- Virtual environment tool (e.g., `venv` or `virtualenv`)

### Backend Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/samirds150/TenFIn
   cd backend
   ```

2. **Create and activate a virtual environment:**
   ```bash
   virtualenv env
    env\Scripts\activate  # On MacOS:  source env/bin/activate
   ```

3. **Install backend dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run database migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Run the development server:**
   ```bash
   python manage.py runserver
   ```

### Frontend Setup
1. **Navigate to the frontend directory:**
   ```bash
   cd ../frontend
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install  # Or: yarn install
   ```

3. **Start the React development server:**
   ```bash
   npm start  # Or: yarn start
   ```

### Access the Application
- **Frontend:**
  Open [http://localhost:3000](http://localhost:3000) in your browser.
- **Backend APIs:**
  Access [http://localhost:8000](http://localhost:8000) for backend endpoints.
