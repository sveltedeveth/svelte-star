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
export type MdSpaceBarProps = typeof __propDef.props;
export type MdSpaceBarEvents = typeof __propDef.events;
export type MdSpaceBarSlots = typeof __propDef.slots;
export default class MdSpaceBar extends SvelteComponentTyped<MdSpaceBarProps, MdSpaceBarEvents, MdSpaceBarSlots> {
}
export {};
