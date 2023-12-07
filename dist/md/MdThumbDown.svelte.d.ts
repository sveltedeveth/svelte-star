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
export type MdThumbDownProps = typeof __propDef.props;
export type MdThumbDownEvents = typeof __propDef.events;
export type MdThumbDownSlots = typeof __propDef.slots;
export default class MdThumbDown extends SvelteComponentTyped<MdThumbDownProps, MdThumbDownEvents, MdThumbDownSlots> {
}
export {};
