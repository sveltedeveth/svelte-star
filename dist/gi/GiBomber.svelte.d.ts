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
export type GiBomberProps = typeof __propDef.props;
export type GiBomberEvents = typeof __propDef.events;
export type GiBomberSlots = typeof __propDef.slots;
export default class GiBomber extends SvelteComponentTyped<GiBomberProps, GiBomberEvents, GiBomberSlots> {
}
export {};
