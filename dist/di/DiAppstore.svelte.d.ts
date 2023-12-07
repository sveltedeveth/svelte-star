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
export type DiAppstoreProps = typeof __propDef.props;
export type DiAppstoreEvents = typeof __propDef.events;
export type DiAppstoreSlots = typeof __propDef.slots;
export default class DiAppstore extends SvelteComponentTyped<DiAppstoreProps, DiAppstoreEvents, DiAppstoreSlots> {
}
export {};
