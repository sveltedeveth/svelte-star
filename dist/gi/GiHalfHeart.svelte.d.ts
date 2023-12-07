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
export type GiHalfHeartProps = typeof __propDef.props;
export type GiHalfHeartEvents = typeof __propDef.events;
export type GiHalfHeartSlots = typeof __propDef.slots;
export default class GiHalfHeart extends SvelteComponentTyped<GiHalfHeartProps, GiHalfHeartEvents, GiHalfHeartSlots> {
}
export {};
