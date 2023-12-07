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
export type GiHeartPlusProps = typeof __propDef.props;
export type GiHeartPlusEvents = typeof __propDef.events;
export type GiHeartPlusSlots = typeof __propDef.slots;
export default class GiHeartPlus extends SvelteComponentTyped<GiHeartPlusProps, GiHeartPlusEvents, GiHeartPlusSlots> {
}
export {};
