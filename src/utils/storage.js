import StoreEngine from 'store/src/store-engine'

const storages = [
    require('store/storages/localStorage'),
]
const plugins = [
    require('store/plugins/defaults'),
    require('store/plugins/expire'),
    require('store/plugins/observe'),
    // require('store/plugins/events'),
]
const Storage = StoreEngine.createStore(storages, plugins)


// Storage.observe('test', function(a, b){
//     console.log(a, b)
// })

// Storage.watch('test', function(a, b){
//     console.log(a, b)
// })

// Storage.set('test', {a: 111})


export default Storage