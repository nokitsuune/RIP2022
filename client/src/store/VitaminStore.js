import {makeAutoObservable} from "mobx";

export default class VitaminStore {
    constructor() {
        this._types = []
        this._vitamins = []
        this._selectedType = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types
    }
    setVitamins(vitamins) {
        this._vitamins = vitamins
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setPage(page) {
        this._page= page
    }
    setTotalCount(count) {
        this._totalCount = count
    }



    get types() {
        return this._types
    }
    get vitamins() {
        return this._vitamins
    }
    get selectedType() {
        return this._selectedType
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}