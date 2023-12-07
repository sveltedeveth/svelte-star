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
export type GiGoldBarProps = typeof __propDef.props;
export type GiGoldBarEvents = typeof __propDef.events;
export type GiGoldBarSlots = typeof __propDef.slots;
export default class GiGoldBar extends SvelteComponentTyped<GiGoldBarProps, GiGoldBarEvents, GiGoldBarSlots> {
}
export {};
