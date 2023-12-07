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
export type MdBorderHorizontalProps = typeof __propDef.props;
export type MdBorderHorizontalEvents = typeof __propDef.events;
export type MdBorderHorizontalSlots = typeof __propDef.slots;
export default class MdBorderHorizontal extends SvelteComponentTyped<MdBorderHorizontalProps, MdBorderHorizontalEvents, MdBorderHorizontalSlots> {
}
export {};
