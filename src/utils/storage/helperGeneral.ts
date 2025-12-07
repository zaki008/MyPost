export const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 0 && hour < 4) return 'Selamat Dini Hari'; 
  if (hour >= 4 && hour < 12) return 'Selamat Pagi';    
  if (hour >= 12 && hour < 15) return 'Selamat Siang';  
  if (hour >= 15 && hour < 18) return 'Selamat Sore';   
  return 'Selamat Malam';                             
};