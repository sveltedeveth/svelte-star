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
export type GiBoneGnawerProps = typeof __propDef.props;
export type GiBoneGnawerEvents = typeof __propDef.events;
export type GiBoneGnawerSlots = typeof __propDef.slots;
export default class GiBoneGnawer extends SvelteComponentTyped<GiBoneGnawerProps, GiBoneGnawerEvents, GiBoneGnawerSlots> {
}
export {};
