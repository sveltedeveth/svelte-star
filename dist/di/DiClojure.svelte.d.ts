import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DiClojureProps = typeof __propDef.props;
export type DiClojureEvents = typeof __propDef.events;
export type DiClojureSlots = typeof __propDef.slots;
export default class DiClojure extends SvelteComponentTyped<DiClojureProps, DiClojureEvents, DiClojureSlots> {
}
export {};
