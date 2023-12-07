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
export type IoMdCellularProps = typeof __propDef.props;
export type IoMdCellularEvents = typeof __propDef.events;
export type IoMdCellularSlots = typeof __propDef.slots;
export default class IoMdCellular extends SvelteComponentTyped<IoMdCellularProps, IoMdCellularEvents, IoMdCellularSlots> {
}
export {};
