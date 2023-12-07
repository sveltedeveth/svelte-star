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
export type GiPawHeartProps = typeof __propDef.props;
export type GiPawHeartEvents = typeof __propDef.events;
export type GiPawHeartSlots = typeof __propDef.slots;
export default class GiPawHeart extends SvelteComponentTyped<GiPawHeartProps, GiPawHeartEvents, GiPawHeartSlots> {
}
export {};
