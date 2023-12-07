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
export type TiHeartProps = typeof __propDef.props;
export type TiHeartEvents = typeof __propDef.events;
export type TiHeartSlots = typeof __propDef.slots;
export default class TiHeart extends SvelteComponentTyped<TiHeartProps, TiHeartEvents, TiHeartSlots> {
}
export {};
