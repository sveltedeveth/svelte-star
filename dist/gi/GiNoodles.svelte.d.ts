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
export type GiNoodlesProps = typeof __propDef.props;
export type GiNoodlesEvents = typeof __propDef.events;
export type GiNoodlesSlots = typeof __propDef.slots;
export default class GiNoodles extends SvelteComponentTyped<GiNoodlesProps, GiNoodlesEvents, GiNoodlesSlots> {
}
export {};
