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
export type MdEvStationProps = typeof __propDef.props;
export type MdEvStationEvents = typeof __propDef.events;
export type MdEvStationSlots = typeof __propDef.slots;
export default class MdEvStation extends SvelteComponentTyped<MdEvStationProps, MdEvStationEvents, MdEvStationSlots> {
}
export {};
