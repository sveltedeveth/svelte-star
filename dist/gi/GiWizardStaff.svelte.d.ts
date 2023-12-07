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
export type GiWizardStaffProps = typeof __propDef.props;
export type GiWizardStaffEvents = typeof __propDef.events;
export type GiWizardStaffSlots = typeof __propDef.slots;
export default class GiWizardStaff extends SvelteComponentTyped<GiWizardStaffProps, GiWizardStaffEvents, GiWizardStaffSlots> {
}
export {};
