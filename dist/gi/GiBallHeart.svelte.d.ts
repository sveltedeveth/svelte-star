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
export type GiBallHeartProps = typeof __propDef.props;
export type GiBallHeartEvents = typeof __propDef.events;
export type GiBallHeartSlots = typeof __propDef.slots;
export default class GiBallHeart extends SvelteComponentTyped<GiBallHeartProps, GiBallHeartEvents, GiBallHeartSlots> {
}
export {};
