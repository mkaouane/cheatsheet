**Template syntax**

- v-bind : assigne une valeur js à un objet html
- v-if : render conditionnellement un objet du DOM
- v-else : else block pour le v-if
- v-else-if : else if peut être appelé plusieurs fois
- v-show : display conditionnellement un objet du DOM
- v-html : rend un élément html
- v-for : loop sur un tableau
- v-on : event (click, submit, etc..) ou @click comme shortcut
    - event modifiers : .stop, .prevent .self .capture .once .passive
    - key modifiers : <input @keyup.enter="submit" /> .tab
        .tab
        .delete (captures both "Delete" and "Backspace" keys)
        .esc
        .space
        .up
        .down
        .left
        .righ
- v-model : équivalent de event.target.value pour les form, utilisable sur bcp d'elements (checkbox, input, radio etc..)
        <input
        type="checkbox"
        v-model.lazy="toggle"
        true-value="yes"
        false-value="no" />
    - modifiers : .lazy .number .trim


**Computed property**

On utilise computed: pour les propriétés qui ont besoins d'être évalués ou "calculé" avant d'être rendu et non pas une simple methode car il y a un cache pour les computed properties. les computed properties sont des getter-only par defauts.

**Lifecycle Hooks**
- mounted() {}
- updated() {}
- unmounted() {}


**Watch property**
With Options API, we can use the watch option to trigger a function whenever a reactive property changes:

watch is shallow by default: the callback will only trigger when the watched property has been assigned a new value - it won't trigger on nested property changes. If you want the callback to fire on all nested mutations, you need to use a deep watcher: deep: true

**Template refs** 

$refs est un attribut spécial d'un element DOM comme "key" . $refs peut aussi être lié à une fonction, ex : <input :ref="(el) => { /* assign el to a property or ref */ }">


**Custom events**

On peut créer des events custom d'un component enfant qui sera appelé au component parent avec $emits('custom event') ex :
<BlogPost
  ...
  @enlarge-text="postFontSize += 0.1"
 />

 <!-- BlogPost.vue, omitting <script> -->
<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>

**Slots**

On met la balise <slot /> à un component enfant lorsqu'on veut qu'un parent puisse ajouter du contenu comme suivant : 
<AlertBox>
  Something bad happened.
</AlertBox>

"Something bad happened" prendra la place de la balise <slot />
