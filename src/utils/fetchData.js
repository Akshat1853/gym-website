export const exerciseOptions =  {
    method: 'GET',
    params: {limit: '20'},
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '5fd4c28a53mshb12ac8932b3d14dp17059cjsn3521eaf4ac97'
    }
  };

export  const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5fd4c28a53mshb12ac8932b3d14dp17059cjsn3521eaf4ac97',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => 
{
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

