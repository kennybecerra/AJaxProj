/** 
 *  Easy HTTP Library
 *  Library for making http requests 
 * 
 *  @version 2.0.0
 *  @author Kenny becerra
 *  @license MIT
 *
 **/ 

class EasyHttp {
  //Make an HTTP GET request
  get(url) {

    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));

    });
  }

  //Make an HTTP Post Request
  post(url, data) 
  {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));

      });
  }
  //Make PUT Request
  put(url, data) 
  {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));

      });
  }

  delete(url) 
  {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {'Content-type':'application/json'}
      })
      .then(res => res.json())
      .then(() => resolve('Resource Delete'))
      .catch(err => reject(err));

      });
  }

}

