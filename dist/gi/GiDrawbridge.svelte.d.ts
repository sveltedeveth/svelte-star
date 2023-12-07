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
export type GiDrawbridgeProps = typeof __propDef.props;
export type GiDrawbridgeEvents = typeof __propDef.events;
export type GiDrawbridgeSlots = typeof __propDef.slots;
export default class GiDrawbridge extends SvelteComponentTyped<GiDrawbridgeProps, GiDrawbridgeEvents, GiDrawbridgeSlots> {
}
export {};
