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
export type GiTemplarHeartProps = typeof __propDef.props;
export type GiTemplarHeartEvents = typeof __propDef.events;
export type GiTemplarHeartSlots = typeof __propDef.slots;
export default class GiTemplarHeart extends SvelteComponentTyped<GiTemplarHeartProps, GiTemplarHeartEvents, GiTemplarHeartSlots> {
}
export {};
