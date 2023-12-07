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
export type GiLockedHeartProps = typeof __propDef.props;
export type GiLockedHeartEvents = typeof __propDef.events;
export type GiLockedHeartSlots = typeof __propDef.slots;
export default class GiLockedHeart extends SvelteComponentTyped<GiLockedHeartProps, GiLockedHeartEvents, GiLockedHeartSlots> {
}
export {};
