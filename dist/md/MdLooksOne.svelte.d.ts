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
export type MdLooksOneProps = typeof __propDef.props;
export type MdLooksOneEvents = typeof __propDef.events;
export type MdLooksOneSlots = typeof __propDef.slots;
export default class MdLooksOne extends SvelteComponentTyped<MdLooksOneProps, MdLooksOneEvents, MdLooksOneSlots> {
}
export {};
