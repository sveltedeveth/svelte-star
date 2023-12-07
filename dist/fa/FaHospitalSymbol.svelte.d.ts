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
export type FaHospitalSymbolProps = typeof __propDef.props;
export type FaHospitalSymbolEvents = typeof __propDef.events;
export type FaHospitalSymbolSlots = typeof __propDef.slots;
export default class FaHospitalSymbol extends SvelteComponentTyped<FaHospitalSymbolProps, FaHospitalSymbolEvents, FaHospitalSymbolSlots> {
}
export {};
