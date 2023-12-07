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
export type MdRoundedCornerProps = typeof __propDef.props;
export type MdRoundedCornerEvents = typeof __propDef.events;
export type MdRoundedCornerSlots = typeof __propDef.slots;
export default class MdRoundedCorner extends SvelteComponentTyped<MdRoundedCornerProps, MdRoundedCornerEvents, MdRoundedCornerSlots> {
}
export {};
