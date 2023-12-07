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
export type GiDonutProps = typeof __propDef.props;
export type GiDonutEvents = typeof __propDef.events;
export type GiDonutSlots = typeof __propDef.slots;
export default class GiDonut extends SvelteComponentTyped<GiDonutProps, GiDonutEvents, GiDonutSlots> {
}
export {};
