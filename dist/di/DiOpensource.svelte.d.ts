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
export type DiOpensourceProps = typeof __propDef.props;
export type DiOpensourceEvents = typeof __propDef.events;
export type DiOpensourceSlots = typeof __propDef.slots;
export default class DiOpensource extends SvelteComponentTyped<DiOpensourceProps, DiOpensourceEvents, DiOpensourceSlots> {
}
export {};
