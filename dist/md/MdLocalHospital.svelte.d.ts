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
export type MdLocalHospitalProps = typeof __propDef.props;
export type MdLocalHospitalEvents = typeof __propDef.events;
export type MdLocalHospitalSlots = typeof __propDef.slots;
export default class MdLocalHospital extends SvelteComponentTyped<MdLocalHospitalProps, MdLocalHospitalEvents, MdLocalHospitalSlots> {
}
export {};
