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
export type MdComputerProps = typeof __propDef.props;
export type MdComputerEvents = typeof __propDef.events;
export type MdComputerSlots = typeof __propDef.slots;
export default class MdComputer extends SvelteComponentTyped<MdComputerProps, MdComputerEvents, MdComputerSlots> {
}
export {};
