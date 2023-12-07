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
export type GiBoProps = typeof __propDef.props;
export type GiBoEvents = typeof __propDef.events;
export type GiBoSlots = typeof __propDef.slots;
export default class GiBo extends SvelteComponentTyped<GiBoProps, GiBoEvents, GiBoSlots> {
}
export {};
