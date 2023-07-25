  async function getCurrentSiteSS() {
    try {
      // Capture the visible area of the current tab
      chrome.tabs.captureVisibleTab({ format: 'jpeg' }, (dataUrl: string) => {
        // Create a link element to download the screenshot
        const link = document.createElement('a');
        link.href = dataUrl;
        const d = new Date();
        let time = d.getTime();
        link.download = 'screenshot_'+time+'.jpeg';
        document.body.appendChild(link);
  
        // Trigger the link's click event to initiate the download
        link.click();
        document.body.removeChild(link);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  document.addEventListener("DOMContentLoaded", getCurrentSiteSS);

  