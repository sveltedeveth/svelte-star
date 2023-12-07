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
export type MdSwapHorizProps = typeof __propDef.props;
export type MdSwapHorizEvents = typeof __propDef.events;
export type MdSwapHorizSlots = typeof __propDef.slots;
export default class MdSwapHoriz extends SvelteComponentTyped<MdSwapHorizProps, MdSwapHorizEvents, MdSwapHorizSlots> {
}
export {};
