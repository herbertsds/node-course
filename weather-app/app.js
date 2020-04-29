const log = console.log
log('Starting')


setTimeout(()=>{
    log('2 Second Timer')

}, 2000)

setTimeout(()=>{
    log('0 Second Timer')

}, 0)


log('Stopping')
