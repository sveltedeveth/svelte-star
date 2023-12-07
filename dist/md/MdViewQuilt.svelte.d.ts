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
export type MdViewQuiltProps = typeof __propDef.props;
export type MdViewQuiltEvents = typeof __propDef.events;
export type MdViewQuiltSlots = typeof __propDef.slots;
export default class MdViewQuilt extends SvelteComponentTyped<MdViewQuiltProps, MdViewQuiltEvents, MdViewQuiltSlots> {
}
export {};
