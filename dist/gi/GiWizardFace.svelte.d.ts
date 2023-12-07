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
export type GiWizardFaceProps = typeof __propDef.props;
export type GiWizardFaceEvents = typeof __propDef.events;
export type GiWizardFaceSlots = typeof __propDef.slots;
export default class GiWizardFace extends SvelteComponentTyped<GiWizardFaceProps, GiWizardFaceEvents, GiWizardFaceSlots> {
}
export {};
