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
export type MdThumbsUpDownProps = typeof __propDef.props;
export type MdThumbsUpDownEvents = typeof __propDef.events;
export type MdThumbsUpDownSlots = typeof __propDef.slots;
export default class MdThumbsUpDown extends SvelteComponentTyped<MdThumbsUpDownProps, MdThumbsUpDownEvents, MdThumbsUpDownSlots> {
}
export {};
