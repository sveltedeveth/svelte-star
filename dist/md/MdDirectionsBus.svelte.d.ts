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
export type MdDirectionsBusProps = typeof __propDef.props;
export type MdDirectionsBusEvents = typeof __propDef.events;
export type MdDirectionsBusSlots = typeof __propDef.slots;
export default class MdDirectionsBus extends SvelteComponentTyped<MdDirectionsBusProps, MdDirectionsBusEvents, MdDirectionsBusSlots> {
}
export {};
