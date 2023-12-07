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
export type GiBodyHeightProps = typeof __propDef.props;
export type GiBodyHeightEvents = typeof __propDef.events;
export type GiBodyHeightSlots = typeof __propDef.slots;
export default class GiBodyHeight extends SvelteComponentTyped<GiBodyHeightProps, GiBodyHeightEvents, GiBodyHeightSlots> {
}
export {};
