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
export type GiWinterGlovesProps = typeof __propDef.props;
export type GiWinterGlovesEvents = typeof __propDef.events;
export type GiWinterGlovesSlots = typeof __propDef.slots;
export default class GiWinterGloves extends SvelteComponentTyped<GiWinterGlovesProps, GiWinterGlovesEvents, GiWinterGlovesSlots> {
}
export {};
