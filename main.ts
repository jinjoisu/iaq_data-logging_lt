input.onButtonPressed(Button.AB, function () {
    kitronik_air_quality.show("Erasing memory", 6, kitronik_air_quality.ShowAlign.Left)
    kitronik_air_quality.eraseData()
    kitronik_air_quality.clearLine(6)
    kitronik_air_quality.show("Erase Complete", 6, kitronik_air_quality.ShowAlign.Left)
    counter = 0
    basic.pause(2000)
    kitronik_air_quality.clear()
})
input.onButtonPressed(Button.B, function () {
    kitronik_air_quality.sendAllData()
})
let counter = 0
kitronik_air_quality.clear()
basic.showIcon(IconNames.No)
kitronik_air_quality.setupGasSensor()
kitronik_air_quality.calcBaselines()
kitronik_air_quality.show("Data logging, ready!", 2, kitronik_air_quality.ShowAlign.Left)
basic.showIcon(IconNames.Yes)
basic.pause(2000)
kitronik_air_quality.clear()
kitronik_air_quality.setDate(31, 5, 23)
kitronik_air_quality.setTime(2, 20, 0)
kitronik_air_quality.addProjectInfo("JJ", "IAQ")
kitronik_air_quality.selectSeparator(kitronik_air_quality.Separator.tab)
kitronik_air_quality.includeDate()
kitronik_air_quality.includeTime()
kitronik_air_quality.includeTemperature(kitronik_air_quality.TemperatureUnitList.C)
kitronik_air_quality.includeHumidity()
kitronik_air_quality.includeIAQ()
counter = 0
basic.forever(function () {
    kitronik_air_quality.show(kitronik_air_quality.readDate(), 1, kitronik_air_quality.ShowAlign.Right)
    kitronik_air_quality.show(kitronik_air_quality.readTime(), 1, kitronik_air_quality.ShowAlign.Left)
    kitronik_air_quality.show("Temp:" + kitronik_air_quality.readTemperature(kitronik_air_quality.TemperatureUnitList.F), 3, kitronik_air_quality.ShowAlign.Left)
    kitronik_air_quality.show("R.H.:" + kitronik_air_quality.readHumidity(), 4, kitronik_air_quality.ShowAlign.Left)
    kitronik_air_quality.show("IAQ:" + kitronik_air_quality.getAirQualityScore(), 5, kitronik_air_quality.ShowAlign.Left)
})
loops.everyInterval(3600000, function () {
    kitronik_air_quality.measureData()
    kitronik_air_quality.logData()
    counter += 1
    kitronik_air_quality.show("Data points:" + counter, 7, kitronik_air_quality.ShowAlign.Left)
})
