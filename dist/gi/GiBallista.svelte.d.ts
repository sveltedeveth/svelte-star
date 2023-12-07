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
export type GiBallistaProps = typeof __propDef.props;
export type GiBallistaEvents = typeof __propDef.events;
export type GiBallistaSlots = typeof __propDef.slots;
export default class GiBallista extends SvelteComponentTyped<GiBallistaProps, GiBallistaEvents, GiBallistaSlots> {
}
export {};
