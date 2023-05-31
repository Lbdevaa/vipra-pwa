let defferPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  defferPrompt = e;
});

async function install() {
  if (defferPrompt) {
    defferPrompt.prompt();

    defferPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('installed');
      } else {
        console.log('not installed');
      }
    });

    defferPrompt = null;
  }
}
