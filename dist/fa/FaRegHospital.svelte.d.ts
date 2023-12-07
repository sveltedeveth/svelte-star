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
export type FaRegHospitalProps = typeof __propDef.props;
export type FaRegHospitalEvents = typeof __propDef.events;
export type FaRegHospitalSlots = typeof __propDef.slots;
export default class FaRegHospital extends SvelteComponentTyped<FaRegHospitalProps, FaRegHospitalEvents, FaRegHospitalSlots> {
}
export {};
