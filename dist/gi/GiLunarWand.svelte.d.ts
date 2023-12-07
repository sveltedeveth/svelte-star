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
export type GiLunarWandProps = typeof __propDef.props;
export type GiLunarWandEvents = typeof __propDef.events;
export type GiLunarWandSlots = typeof __propDef.slots;
export default class GiLunarWand extends SvelteComponentTyped<GiLunarWandProps, GiLunarWandEvents, GiLunarWandSlots> {
}
export {};
