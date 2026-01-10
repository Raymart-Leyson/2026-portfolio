import sys

try:
    import PyPDF2
    
    pdf_path = r"c:\Users\Drayley\Downloads\Raymart Leyson.pdf"
    
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text()
        print(text)
        
except ImportError:
    print("ERROR: PyPDF2 not installed. Trying alternative method...")
    try:
        import pdfplumber
        
        pdf_path = r"c:\Users\Drayley\Downloads\Raymart Leyson.pdf"
        
        with pdfplumber.open(pdf_path) as pdf:
            text = ""
            for page in pdf.pages:
                text += page.extract_text()
            print(text)
            
    except ImportError:
        print("ERROR: No PDF libraries available. Please install PyPDF2 or pdfplumber.")
        print("Run: pip install PyPDF2")
        sys.exit(1)
