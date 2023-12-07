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
export type FaHatWizardProps = typeof __propDef.props;
export type FaHatWizardEvents = typeof __propDef.events;
export type FaHatWizardSlots = typeof __propDef.slots;
export default class FaHatWizard extends SvelteComponentTyped<FaHatWizardProps, FaHatWizardEvents, FaHatWizardSlots> {
}
export {};
