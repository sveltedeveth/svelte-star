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
export type MdDonutSmallProps = typeof __propDef.props;
export type MdDonutSmallEvents = typeof __propDef.events;
export type MdDonutSmallSlots = typeof __propDef.slots;
export default class MdDonutSmall extends SvelteComponentTyped<MdDonutSmallProps, MdDonutSmallEvents, MdDonutSmallSlots> {
}
export {};
