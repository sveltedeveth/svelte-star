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
export type MdSkipNextProps = typeof __propDef.props;
export type MdSkipNextEvents = typeof __propDef.events;
export type MdSkipNextSlots = typeof __propDef.slots;
export default class MdSkipNext extends SvelteComponentTyped<MdSkipNextProps, MdSkipNextEvents, MdSkipNextSlots> {
}
export {};
