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
export type GiStoneTabletProps = typeof __propDef.props;
export type GiStoneTabletEvents = typeof __propDef.events;
export type GiStoneTabletSlots = typeof __propDef.slots;
export default class GiStoneTablet extends SvelteComponentTyped<GiStoneTabletProps, GiStoneTabletEvents, GiStoneTabletSlots> {
}
export {};
