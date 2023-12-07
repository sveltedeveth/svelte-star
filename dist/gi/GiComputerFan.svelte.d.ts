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
export type GiComputerFanProps = typeof __propDef.props;
export type GiComputerFanEvents = typeof __propDef.events;
export type GiComputerFanSlots = typeof __propDef.slots;
export default class GiComputerFan extends SvelteComponentTyped<GiComputerFanProps, GiComputerFanEvents, GiComputerFanSlots> {
}
export {};
