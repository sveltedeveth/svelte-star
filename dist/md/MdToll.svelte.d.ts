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
export type MdTollProps = typeof __propDef.props;
export type MdTollEvents = typeof __propDef.events;
export type MdTollSlots = typeof __propDef.slots;
export default class MdToll extends SvelteComponentTyped<MdTollProps, MdTollEvents, MdTollSlots> {
}
export {};
