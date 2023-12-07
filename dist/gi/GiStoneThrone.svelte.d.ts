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
export type GiStoneThroneProps = typeof __propDef.props;
export type GiStoneThroneEvents = typeof __propDef.events;
export type GiStoneThroneSlots = typeof __propDef.slots;
export default class GiStoneThrone extends SvelteComponentTyped<GiStoneThroneProps, GiStoneThroneEvents, GiStoneThroneSlots> {
}
export {};
