export default class Table {

    public aircraftId: number

    // referencia
    public refWithoutIce: number
    public refWithIce: number
    // peso
    public weightReference: number
    public weightBellowWithoutIce: number
    public weightAboveWithoutIce: number
    public weightBellowWithIce: number
    public weightAboveWithIce: number
    // altitude
    public altitudeReference: number
    public altitudeWithIce: number
    public altitudeWithoutIce: number
    // temperatura
    public tempReference: number
    public tempBellowWithIce: number
    public tempAboveWithIce: number
    public tempBellowWithoutIce: number
    public tempAboveWithoutIce: number
    // vento
    public windReference: number
    public windHeadWithIce: number
    public windTailWithIce: number
    public windHeadWithoutIce: number
    public windTailWithoutIce: number
    // slope
    public slopeReference: number
    public slopeUphillWithIce: number
    public slopeDownhillWithIce: number
    public slopeUphillWithoutIce: number
    public slopeDownhillWithoutIce: number
    // overspeed
    public overspeedReference: number
    public overspeedWithIce: number
    public overspeedWithoutIce: number
    // reversor
    public reverserWithIce: number
    public reverserWithoutIce: number

    
    constructor(
         refWithoutIce: number,
         refWithIce: number,
         weightReference: number,
         weightBellowWithoutIce: number,
         weightAboveWithoutIce: number,
         weightBellowWithIce: number,
         weightAboveWithIce: number,
         altitudeReference: number,
         altitudeWithIce: number,
         altitudeWithoutIce: number,
         tempReference: number,
         tempBellowWithIce: number,
         tempAboveWithIce: number,
         tempBellowWithoutIce: number,
         tempAboveWithoutIce: number,
         windReference: number,
         windHeadWithIce: number,
         windTailWithIce: number,
         windHeadWithoutIce: number,
         windTailWithoutIce: number,
         slopeReference: number,
         slopeUphillWithIce: number,
         slopeDownhillWithIce: number,
         slopeUphillWithoutIce: number,
         slopeDownhillWithoutIce: number,
         overspeedReference: number,
         overspeedWithIce: number,
         overspeedWithoutIce: number,
         reverserWithIce: number,
         reverserWithoutIce: number,
    ) {
         this.refWithoutIce = refWithoutIce
         this.refWithIce = refWithIce
         this.weightReference = weightReference
         this.weightBellowWithoutIce = weightBellowWithoutIce
         this.weightAboveWithoutIce = weightAboveWithoutIce
         this.weightBellowWithIce = weightBellowWithIce
         this.weightAboveWithIce = weightAboveWithIce
         this.altitudeReference = altitudeReference
         this.altitudeWithIce = altitudeWithIce
         this.altitudeWithoutIce = altitudeWithoutIce
         this.tempReference = tempReference
         this.tempBellowWithIce = tempBellowWithIce
         this.tempAboveWithIce = tempAboveWithIce
         this.tempBellowWithoutIce = tempBellowWithoutIce
         this.tempAboveWithoutIce = tempAboveWithoutIce
         this.windReference = windReference
         this.windHeadWithIce = windHeadWithIce
         this.windTailWithIce = windTailWithIce
         this.windHeadWithoutIce = windHeadWithoutIce
         this.windTailWithoutIce = windTailWithoutIce
         this.slopeReference = slopeReference
         this.slopeUphillWithIce = slopeUphillWithIce
         this.slopeDownhillWithIce = slopeDownhillWithIce
         this.slopeUphillWithoutIce = slopeUphillWithoutIce
         this.slopeDownhillWithoutIce = slopeDownhillWithoutIce
         this.overspeedReference = overspeedReference
         this.overspeedWithIce = overspeedWithIce
         this.overspeedWithoutIce = overspeedWithoutIce
         this.reverserWithIce = reverserWithIce
         this.reverserWithoutIce = reverserWithoutIce

    }

    set setRefWithoutIce(value: number){
        this.refWithoutIce = value
    }
    set setRefWithIce(value: number){
        this.refWithIce = value
    }
    set setWeightReference (value: number) {
        this.weightReference = value
    }
    set setWeightBellowWithoutIce (value: number) {
        this.weightBellowWithoutIce = value
    }
    set setWeightAboveWithoutIce (value: number) {
        this.weightAboveWithoutIce = value
    }
    set setWeightBellowWithIce (value: number) {
        this.weightBellowWithIce = value
    }
    set setWeightAboveWithIce (value: number) {
        this.weightAboveWithIce = value
    }
    set setAltitudeReference (value: number) {
        this.altitudeReference = value
    }
    set setAltitudeWithIce (value: number) {
        this.altitudeWithIce = value
    }
    set setAltitudeWithoutIce (value: number) {
        this.altitudeWithoutIce = value
    }
    set setTempReference (value: number) {
        this.tempReference = value
    }
    set setTempBellowWithIce (value: number) {
        this.tempBellowWithIce = value
    }
    set setTempAboveWithIce (value: number) {
        this.tempAboveWithIce = value
    }
    set setTempBellowWithoutIce (value: number) {
        this.tempBellowWithoutIce = value
    }
    set setTempAboveWithoutIce (value: number) {
        this.tempAboveWithoutIce = value
    }
    set setWindReference (value: number) {
        this.windReference = value
    }
    set setWindHeadWithIce (value: number) {
        this.windHeadWithIce = value
    }
    set setWindTailWithIce (value: number) {
        this.windTailWithIce = value
    }
    set setWindHeadWithoutIce (value: number) {
        this.windHeadWithoutIce = value
    }
    set setWindTailWithoutIce (value: number) {
        this.windTailWithoutIce = value
    }
    set setSlopeReference (value: number) {
        this.slopeReference = value
    }
    set setSlopeUphillWithIce (value: number) {
        this.slopeUphillWithIce = value
    }
    set setSlopeDownhillWithIce (value: number) {
        this.slopeDownhillWithIce = value
    }
    set setSlopeUphillWithoutIce (value: number) {
        this.slopeUphillWithoutIce = value
    }
    set setSlopeDownhillWithoutIce (value: number) {
        this.slopeDownhillWithoutIce = value
    }
    set setOverspeedReference (value: number) {
        this.overspeedReference = value
    }
    set setOverspeedWithIce (value: number) {
        this.overspeedWithIce = value
    }
    set setOverspeedWithoutIce (value: number) {
        this.overspeedWithoutIce = value
    }
    set setReverserWithIce (value: number) {
        this.reverserWithIce = value
    }
    set setReverserWithoutIce (value: number) {
        this.reverserWithoutIce = value
    }


    get getRefWithoutIce(): number { return this.refWithoutIce }
    get getRefWithIce(): number { return this.refWithIce }
    get getWeightReference (): number { return this.weightReference } 
    get getWeightBellowWithoutIce (): number { return this.weightBellowWithoutIce } 
    get getWeightAboveWithoutIce (): number { return this.weightAboveWithoutIce } 
    get getWeightBellowWithIce (): number { return this.weightBellowWithIce } 
    get getWeightAboveWithIce (): number { return this.weightAboveWithIce } 
    get getAltitudeReference (): number { return this.altitudeReference } 
    get getAltitudeWithIce (): number { return this.altitudeWithIce } 
    get getAltitudeWithoutIce (): number { return this.altitudeWithoutIce } 
    get getTempReference (): number { return this.tempReference } 
    get getTempBellowWithIce (): number { return this.tempBellowWithIce } 
    get getTempAboveWithIce (): number { return this.tempAboveWithIce } 
    get getTempBellowWithoutIce (): number { return this.tempBellowWithoutIce } 
    get getTempAboveWithoutIce (): number { return this.tempAboveWithoutIce } 
    get getWindReference (): number { return this.windReference } 
    get getWindHeadWithIce (): number { return this.windHeadWithIce } 
    get getWindTailWithIce (): number { return this.windTailWithIce } 
    get getWindHeadWithoutIce (): number { return this.windHeadWithoutIce } 
    get getWindTailWithoutIce (): number { return this.windTailWithoutIce } 
    get getSlopeReference (): number { return this.slopeReference } 
    get getSlopeUphillWithIce (): number { return this.slopeUphillWithIce } 
    get getSlopeDownhillWithIce (): number { return this.slopeDownhillWithIce } 
    get getSlopeUphillWithoutIce (): number { return this.slopeUphillWithoutIce } 
    get getSlopeDownhillWithoutIce (): number { return this.slopeDownhillWithoutIce } 
    get getOverspeedReference (): number { return this.overspeedReference } 
    get getOverspeedWithIce (): number { return this.overspeedWithIce } 
    get getOverspeedWithoutIce (): number { return this.overspeedWithoutIce } 
    get getReverserWithIce (): number { return this.reverserWithIce} 
    get getReverserWithoutIce (): number { return this.reverserWithoutIce } 


}