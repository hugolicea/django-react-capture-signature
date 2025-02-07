# Django-React Signature Capture

This project is a web application that allows users to capture and save signatures using a React frontend and a Django backend. Users can draw their signatures, save them, and fetch previously saved signatures by ID.

## Table of Contents

- [Django-React Signature Capture](#django-react-signature-capture)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Setup Instructions](#setup-instructions)
    - [Prerequisites](#prerequisites)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
    - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- Capture signatures using a canvas element.
- Save signatures to the backend.
- Fetch and display saved signatures by ID.

## Technologies Used

- **Frontend**: React, Axios
- **Backend**: Django, Django REST framework
- **Build Tool**: Vite

## Setup Instructions

### Prerequisites

- Node.js and npm
- Python and pip
- Django

### Backend Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/hugolicea/django-react-signature-capture.git
   cd django-react-signature-capture
   ```

2. Create a virtual environment and activate it:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install the backend dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Apply the migrations:

   ```bash
   python manage.py migrate
   ```

5. Start the Django development server:

   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../client  # Assuming the backend and client are siblings
   npm install  # Or yarn install
   ```

2. Start the Vite development server:

   ```bash
   npm run dev  # Or yarn dev
   ```

### Usage

1. Open your web browser and navigate to [http://localhost:5173](http://localhost:5173) (or the port specified by Vite). Vite usually runs on port 5173 by default. If it's different, check your terminal output.
2. Use the "Save Signature" page to draw and save your signature. (Consider providing more details about the UI, e.g., "Click the 'Save' button to..." )
3. Use the "Consult Signature" page to fetch and display a saved signature. (Again, more UI details would be helpful)

## Project Structure

```txt
django-react-signature-capture/
├── client/
│   ├── signature/
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── SignatureCanvas.jsx
│   │   │   │   ├── SignatureControls.jsx
│   │   │   │   ├── SignaturePreview.jsx
│   │   │   │   ├── SaveSignature.jsx
│   │   │   │   ├── ConsultSignature.jsx
│   │   │   ├── App.jsx
│   │   │   ├── index.jsx
│   │   ├── package.json
│   │   ├── vite.config.js
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   ├── app/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── serializers.py
│   │   ├── ...
├── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
