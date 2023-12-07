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
export type GiStonePileProps = typeof __propDef.props;
export type GiStonePileEvents = typeof __propDef.events;
export type GiStonePileSlots = typeof __propDef.slots;
export default class GiStonePile extends SvelteComponentTyped<GiStonePileProps, GiStonePileEvents, GiStonePileSlots> {
}
export {};
