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
export type GiGlovesProps = typeof __propDef.props;
export type GiGlovesEvents = typeof __propDef.events;
export type GiGlovesSlots = typeof __propDef.slots;
export default class GiGloves extends SvelteComponentTyped<GiGlovesProps, GiGlovesEvents, GiGlovesSlots> {
}
export {};
