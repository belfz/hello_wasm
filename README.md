# hello_wasm - Rust & webassembly

1. Install webasembly/emscripten compiler target for Rust programming language

    `rustup target add wasm32-unknown-emscripten`

2. Install cmake

    `brew install cmake`

3. Get & install emscripten SDK:
    
    ```
    cd ~
    wget https://s3.amazonaws.com/mozilla-games/emscripten/releases/emsdk-portable.tar.gz
    tar -xvf emsdk-portable.tar.gz
    cd emsdk-portable
    ./emsdk update
    ./emsdk install sdk-incoming-64bit
    ```

    The last command may take up to several hours to complete.

4. Add this to your PATH:

   ```
   ~/emsdk-portable
   ~/emsdk-portable/clang/fastcomp/build_incoming_64/bin
   ~/emsdk-portable/emscripten/incoming
   ```

5. make sure that `~/.emscripten` configuration file looks something like this:

   ```
   import os
   LLVM_ROOT='/Users/<your-username>/emsdk-portable/clang/fastcomp/build_incoming_64/bin'
   NODE_JS='/Users/<your-username>/emsdk-portable/node/4.1.1_64bit/bin/node'
   EMSCRIPTEN_ROOT='/Users/<your-username>/emsdk-portable/emscripten/incoming'
   EMSCRIPTEN_NATIVE_OPTIMIZER='/Users/<your-username>/emsdk-portable/emscripten/incoming_64bit_optimizer/optimizer'
   SPIDERMONKEY_ENGINE = ''
   V8_ENGINE = ''
   TEMP_DIR = '/var/folders/pv/qbfq6qlj0k5gb43j33jmp1v80000gn/T'
   COMPILER_ENGINE = NODE_JS
   JS_ENGINES = [NODE_JS]
   ```

   The value of `TEMP_DIR` might contain a different "random" string of chars in your case.

6. run `npm install` on this project

7. build the project with `npm run compile`

8. start the http server with `npm run serve`, open `localhost:8080` and take a look at the console output. Voila, Rust code running in your browser ;)
