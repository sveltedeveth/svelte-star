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
export type MdPlusOneProps = typeof __propDef.props;
export type MdPlusOneEvents = typeof __propDef.events;
export type MdPlusOneSlots = typeof __propDef.slots;
export default class MdPlusOne extends SvelteComponentTyped<MdPlusOneProps, MdPlusOneEvents, MdPlusOneSlots> {
}
export {};
