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
export type DiPhotoshopProps = typeof __propDef.props;
export type DiPhotoshopEvents = typeof __propDef.events;
export type DiPhotoshopSlots = typeof __propDef.slots;
export default class DiPhotoshop extends SvelteComponentTyped<DiPhotoshopProps, DiPhotoshopEvents, DiPhotoshopSlots> {
}
export {};
