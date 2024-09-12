function changeContentOnHover(elementId, newContent) {
    const element = document.getElementById(elementId);
  
    if (element) {
      const originalContent = element.textContent; // حفظ المحتوى الأصلي
  
      element.addEventListener('mouseover', () => {
        element.textContent = newContent;
      });
  
      element.addEventListener('mouseout', () => {
        element.textContent = originalContent; // استعادة المحتوى الأصلي
      });
    }
  }

  changeContentOnHover('phon', '+966-558-276601');
  changeContentOnHover('email', 'faisl@reallygreatsite');
  changeContentOnHover('addres', '123 Saudi Arabia  , Riyadh');
  changeContentOnHover('websit', ' https://github.com/FaisalAlharbidev ')
 
   
  changeContentOnHover('data', '2024-2024')
  changeContentOnHover('edc', '  tuwaiq academy ')

  changeContentOnHover('major', 'JavaScript Camp')

  changeContentOnHover('skil-1', 'JavaScript')
  changeContentOnHover('skil-2', 'html')
  changeContentOnHover('skil-3', 'css')
  changeContentOnHover('skil-4', 'bootstrap')
  changeContentOnHover('skil-5', 'react js')
  changeContentOnHover('skil-6', 'node js')
  changeContentOnHover('skil-7', 'express js')

  changeContentOnHover('lang1', 'Arabic')
  changeContentOnHover('lang2', 'English')
  changeContentOnHover('lang3', '')
  changeContentOnHover('lang4', '')

  lang1