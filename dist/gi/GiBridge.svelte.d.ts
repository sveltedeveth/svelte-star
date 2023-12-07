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
export type GiBridgeProps = typeof __propDef.props;
export type GiBridgeEvents = typeof __propDef.events;
export type GiBridgeSlots = typeof __propDef.slots;
export default class GiBridge extends SvelteComponentTyped<GiBridgeProps, GiBridgeEvents, GiBridgeSlots> {
}
export {};
