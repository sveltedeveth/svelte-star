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
export type GiSlyProps = typeof __propDef.props;
export type GiSlyEvents = typeof __propDef.events;
export type GiSlySlots = typeof __propDef.slots;
export default class GiSly extends SvelteComponentTyped<GiSlyProps, GiSlyEvents, GiSlySlots> {
}
export {};
