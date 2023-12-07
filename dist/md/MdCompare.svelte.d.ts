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
export type MdCompareProps = typeof __propDef.props;
export type MdCompareEvents = typeof __propDef.events;
export type MdCompareSlots = typeof __propDef.slots;
export default class MdCompare extends SvelteComponentTyped<MdCompareProps, MdCompareEvents, MdCompareSlots> {
}
export {};
