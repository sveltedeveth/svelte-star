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
export type FaHospitalProps = typeof __propDef.props;
export type FaHospitalEvents = typeof __propDef.events;
export type FaHospitalSlots = typeof __propDef.slots;
export default class FaHospital extends SvelteComponentTyped<FaHospitalProps, FaHospitalEvents, FaHospitalSlots> {
}
export {};
