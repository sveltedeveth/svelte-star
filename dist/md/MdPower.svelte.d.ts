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
export type MdPowerProps = typeof __propDef.props;
export type MdPowerEvents = typeof __propDef.events;
export type MdPowerSlots = typeof __propDef.slots;
export default class MdPower extends SvelteComponentTyped<MdPowerProps, MdPowerEvents, MdPowerSlots> {
}
export {};
