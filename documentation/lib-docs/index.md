# Introduction KessokuLib

KessokuLib is a next generation cross-platform modular Minecraft modding library.

_**Kessoku means unity, and we want to unify the various platform APIs to facilitate mod development. -- By TexTrue**_

## What is KessokuLib?
KessokuLib is a cross-platform modular library for Minecraft: Java Edition.

It is intended to provide a unified intermediate API between mod loaders (we don't provide anything like **Connector**, I don't see the benefit of providing something like **Connector**, on the contrary it would probably bother mod developers more).

We have incorporated the benefits of each platform's API into this mod's API in order to simplify mod development.

## Why do you need a cross-platform API?

This means that most of your code is generic and only some of it is individually specific to a platform, which is even more important for developing.

_**One Code, Each Platform. -- By [H2Sxxa](https://github.com/H2Sxxa)**_

## What is the current stage of development of this library?
Still in WIP.

## What about the language loader?
Kessoku Languages is currently in EAP status, but all we can guarantee at the moment is that we can provide language loaders with Kotlin/Scala/Groovy.