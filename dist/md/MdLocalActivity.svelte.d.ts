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
export type MdLocalActivityProps = typeof __propDef.props;
export type MdLocalActivityEvents = typeof __propDef.events;
export type MdLocalActivitySlots = typeof __propDef.slots;
export default class MdLocalActivity extends SvelteComponentTyped<MdLocalActivityProps, MdLocalActivityEvents, MdLocalActivitySlots> {
}
export {};
