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
export type MdRepeatOneProps = typeof __propDef.props;
export type MdRepeatOneEvents = typeof __propDef.events;
export type MdRepeatOneSlots = typeof __propDef.slots;
export default class MdRepeatOne extends SvelteComponentTyped<MdRepeatOneProps, MdRepeatOneEvents, MdRepeatOneSlots> {
}
export {};
