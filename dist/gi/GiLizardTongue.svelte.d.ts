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
export type GiLizardTongueProps = typeof __propDef.props;
export type GiLizardTongueEvents = typeof __propDef.events;
export type GiLizardTongueSlots = typeof __propDef.slots;
export default class GiLizardTongue extends SvelteComponentTyped<GiLizardTongueProps, GiLizardTongueEvents, GiLizardTongueSlots> {
}
export {};
