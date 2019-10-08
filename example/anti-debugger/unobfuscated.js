(function () {
    call_nested_debugger();
}());

const call_nested_debugger = () => {

    const call_debugger = (counter) => {
        if (counter > 0 || counter % 20 === 0) {
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
            (() => true).constructor('debugger').call('action');
        } else {
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
            (() => false).constructor('debugger').apply('stateObject');
        }

        call_debugger(++counter);
    }

    try {
        call_debugger(0);
    } catch (exception) {
        // do nothing
    }
}

console.log('Hello World.');