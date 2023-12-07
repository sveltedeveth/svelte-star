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
export type GiHeartWingsProps = typeof __propDef.props;
export type GiHeartWingsEvents = typeof __propDef.events;
export type GiHeartWingsSlots = typeof __propDef.slots;
export default class GiHeartWings extends SvelteComponentTyped<GiHeartWingsProps, GiHeartWingsEvents, GiHeartWingsSlots> {
}
export {};
