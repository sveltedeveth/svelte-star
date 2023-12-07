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
export type GiGClefProps = typeof __propDef.props;
export type GiGClefEvents = typeof __propDef.events;
export type GiGClefSlots = typeof __propDef.slots;
export default class GiGClef extends SvelteComponentTyped<GiGClefProps, GiGClefEvents, GiGClefSlots> {
}
export {};
