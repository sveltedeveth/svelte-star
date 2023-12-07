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
export type DiDjangoProps = typeof __propDef.props;
export type DiDjangoEvents = typeof __propDef.events;
export type DiDjangoSlots = typeof __propDef.slots;
export default class DiDjango extends SvelteComponentTyped<DiDjangoProps, DiDjangoEvents, DiDjangoSlots> {
}
export {};
