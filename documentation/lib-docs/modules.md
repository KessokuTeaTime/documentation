# Kessoku Lib Modules

We will provide information about KessokuLib modules on this page.

## Module list

| Module             | Process | Description                                                              |
|:------------------:|:-------:|:------------------------------------------------------------------------:|
| `base`             | 🤔       | kessokulib base api                                                            |
| `platform`         | 🤔       | common modloader api                         |
| `entrypoint`       | 🤔       | fabric-like entrypoint system api                                        |
| `event`    | ⚙️       |                                                                          |
| `registry`         | 🤔       |                                                                          |
| `equator`          | ⚙️      | 2D rendering & animation library                                         |
| `config`           | 🤔       |                                                                          |
| `config-screen`    | ❓       |                                                                          |
| `command`          | 🤔      | command registry api                                                     |
| `keybinding`       | 🤔       | fabric-like keybinding api                                               |
| `blockentity`      | ⚙️      |                                                                          |
| `fluid`            | ❓       |                                                                          |
| `capability`       | ❓       | A Capability system that combines Neo's Capability and CCA functionality |
| `network`          | ⚙️      | fabric-like networking api                                               |
| `runtime-datagen`  | ⚙️      | BRRP-like runtime datagen                                                |

> ❓: Todo
> 
> 🤔: Done, but not test
>
> ✅: Done, tested
> 
> ✔️: All done
> 
> ⚙️: In Progress

## Add Module to KessokuLib

1. `Right click` on the root project "Kessoku-Lib", select New->Module in the context menu, create `package/common`, `package/fabric`, `package/neo`(`package` refers to the module name);
2. Copy and paste the gradle script files under [`gradle/example`](https://github.com/KessokuTeaTime/Kessoku-Lib/tree/dev/1.21/gradle/example) to their respective modules (`common` to `package/common`, `fabric` to `package/fabric`, and `neo` to `package/neo`);
3. Check that `settings.gradle` has added the modules you just added, and it's fine if it hasn't;
4. Synchronizing the gradle
5. If you want to add module dependencies use `kessoku.module("module-name", PlatformIdentifier.COMMON)`.
6. Finally, add include to `fabric` and `neo`.