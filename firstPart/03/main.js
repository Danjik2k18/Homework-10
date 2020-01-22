const func = (function (arg) {
    return function () {
        setTimeout(() => {
            console.log(arg--)

            setTimeout(() => {
                console.log(arg--)

                setTimeout(() => {
                    console.log(arg--)

                    setTimeout(() => {
                        console.log(arg--)
                        setTimeout(() => {
                            console.log(arg--)
                            setTimeout(() => {
                                console.log('Поехали')
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }

})(5)
func()