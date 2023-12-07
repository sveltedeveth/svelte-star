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
export type FaHeartProps = typeof __propDef.props;
export type FaHeartEvents = typeof __propDef.events;
export type FaHeartSlots = typeof __propDef.slots;
export default class FaHeart extends SvelteComponentTyped<FaHeartProps, FaHeartEvents, FaHeartSlots> {
}
export {};
