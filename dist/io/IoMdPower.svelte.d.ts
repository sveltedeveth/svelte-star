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
export type IoMdPowerProps = typeof __propDef.props;
export type IoMdPowerEvents = typeof __propDef.events;
export type IoMdPowerSlots = typeof __propDef.slots;
export default class IoMdPower extends SvelteComponentTyped<IoMdPowerProps, IoMdPowerEvents, IoMdPowerSlots> {
}
export {};
