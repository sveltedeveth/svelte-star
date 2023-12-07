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
export type GiLizardmanProps = typeof __propDef.props;
export type GiLizardmanEvents = typeof __propDef.events;
export type GiLizardmanSlots = typeof __propDef.slots;
export default class GiLizardman extends SvelteComponentTyped<GiLizardmanProps, GiLizardmanEvents, GiLizardmanSlots> {
}
export {};
