function mySettings(props) {
  return (
    <Page>
      <Section>
        <TextInput
          label="Data gregoriana (aaa-mm-gg): "
          title="gregoriandate"
          settingsKey="gregoriandate"
          type="date" 
        />
      <Button list label="Elimina impostazioni" onClick={() => props.settingsStorage.clear()} />
      {<Text bold align="center">Creato da Giulio Sorrentino</Text>}
      {<Text bold align="center">Questo programma è sotto licenza GPL v3 o, secondo il tuo parere, qualsiasi versione successiva</Text>}
      {<Text bold align="center">https://www.github.com/numerunix/FitStardate</Text>}
     </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
