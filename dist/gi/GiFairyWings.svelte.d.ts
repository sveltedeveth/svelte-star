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
export type GiFairyWingsProps = typeof __propDef.props;
export type GiFairyWingsEvents = typeof __propDef.events;
export type GiFairyWingsSlots = typeof __propDef.slots;
export default class GiFairyWings extends SvelteComponentTyped<GiFairyWingsProps, GiFairyWingsEvents, GiFairyWingsSlots> {
}
export {};
