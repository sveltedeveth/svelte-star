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
export type GiBraseroProps = typeof __propDef.props;
export type GiBraseroEvents = typeof __propDef.events;
export type GiBraseroSlots = typeof __propDef.slots;
export default class GiBrasero extends SvelteComponentTyped<GiBraseroProps, GiBraseroEvents, GiBraseroSlots> {
}
export {};
