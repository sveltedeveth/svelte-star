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
export type GiBurningSkullProps = typeof __propDef.props;
export type GiBurningSkullEvents = typeof __propDef.events;
export type GiBurningSkullSlots = typeof __propDef.slots;
export default class GiBurningSkull extends SvelteComponentTyped<GiBurningSkullProps, GiBurningSkullEvents, GiBurningSkullSlots> {
}
export {};
