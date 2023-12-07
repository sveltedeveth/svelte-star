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
export type FaHandLizardProps = typeof __propDef.props;
export type FaHandLizardEvents = typeof __propDef.events;
export type FaHandLizardSlots = typeof __propDef.slots;
export default class FaHandLizard extends SvelteComponentTyped<FaHandLizardProps, FaHandLizardEvents, FaHandLizardSlots> {
}
export {};
