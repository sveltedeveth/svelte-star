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
export type MdBorderVerticalProps = typeof __propDef.props;
export type MdBorderVerticalEvents = typeof __propDef.events;
export type MdBorderVerticalSlots = typeof __propDef.slots;
export default class MdBorderVertical extends SvelteComponentTyped<MdBorderVerticalProps, MdBorderVerticalEvents, MdBorderVerticalSlots> {
}
export {};
