const toggle = document.getElementById('languageToggle');
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();
function setLanguage(lang){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-ar][data-en]').forEach(el=>{
    el.textContent = el.dataset[lang];
  });
  toggle.textContent = lang === 'ar' ? 'EN' : 'ع';
  document.title = lang === 'ar' ? 'زكريا كرشو | Zakaria Kerchou' : 'Zakaria Kerchou | زكريا كرشو';
  document.querySelector('meta[name="description"]').content = lang === 'ar'
    ? 'الموقع الشخصي لزكريا كرشو: الإدارة والعلاقات الدولية والترجمة والذكاء الاصطناعي والسياحة والنشاط المجتمعي.'
    : 'The personal website of Zakaria Kerchou: administration, international relations, translation, AI training, tourism and community activity.';
}
toggle.addEventListener('click',()=>setLanguage(document.documentElement.lang === 'ar' ? 'en' : 'ar'));
