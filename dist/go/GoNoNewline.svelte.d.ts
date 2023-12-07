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
export type GoNoNewlineProps = typeof __propDef.props;
export type GoNoNewlineEvents = typeof __propDef.events;
export type GoNoNewlineSlots = typeof __propDef.slots;
export default class GoNoNewline extends SvelteComponentTyped<GoNoNewlineProps, GoNoNewlineEvents, GoNoNewlineSlots> {
}
export {};
