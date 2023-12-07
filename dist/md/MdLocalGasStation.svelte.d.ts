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
export type MdLocalGasStationProps = typeof __propDef.props;
export type MdLocalGasStationEvents = typeof __propDef.events;
export type MdLocalGasStationSlots = typeof __propDef.slots;
export default class MdLocalGasStation extends SvelteComponentTyped<MdLocalGasStationProps, MdLocalGasStationEvents, MdLocalGasStationSlots> {
}
export {};
