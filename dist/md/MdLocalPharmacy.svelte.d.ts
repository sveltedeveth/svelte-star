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
export type MdLocalPharmacyProps = typeof __propDef.props;
export type MdLocalPharmacyEvents = typeof __propDef.events;
export type MdLocalPharmacySlots = typeof __propDef.slots;
export default class MdLocalPharmacy extends SvelteComponentTyped<MdLocalPharmacyProps, MdLocalPharmacyEvents, MdLocalPharmacySlots> {
}
export {};
