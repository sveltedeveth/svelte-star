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
export type FaRegHeartProps = typeof __propDef.props;
export type FaRegHeartEvents = typeof __propDef.events;
export type FaRegHeartSlots = typeof __propDef.slots;
export default class FaRegHeart extends SvelteComponentTyped<FaRegHeartProps, FaRegHeartEvents, FaRegHeartSlots> {
}
export {};
