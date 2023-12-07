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
export type GiSpartanProps = typeof __propDef.props;
export type GiSpartanEvents = typeof __propDef.events;
export type GiSpartanSlots = typeof __propDef.slots;
export default class GiSpartan extends SvelteComponentTyped<GiSpartanProps, GiSpartanEvents, GiSpartanSlots> {
}
export {};
