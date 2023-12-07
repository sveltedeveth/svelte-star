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
export type MdDehazeProps = typeof __propDef.props;
export type MdDehazeEvents = typeof __propDef.events;
export type MdDehazeSlots = typeof __propDef.slots;
export default class MdDehaze extends SvelteComponentTyped<MdDehazeProps, MdDehazeEvents, MdDehazeSlots> {
}
export {};
