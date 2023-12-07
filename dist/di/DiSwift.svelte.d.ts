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
export type DiSwiftProps = typeof __propDef.props;
export type DiSwiftEvents = typeof __propDef.events;
export type DiSwiftSlots = typeof __propDef.slots;
export default class DiSwift extends SvelteComponentTyped<DiSwiftProps, DiSwiftEvents, DiSwiftSlots> {
}
export {};
