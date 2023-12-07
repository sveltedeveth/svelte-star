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
export type MdStarBorderProps = typeof __propDef.props;
export type MdStarBorderEvents = typeof __propDef.events;
export type MdStarBorderSlots = typeof __propDef.slots;
export default class MdStarBorder extends SvelteComponentTyped<MdStarBorderProps, MdStarBorderEvents, MdStarBorderSlots> {
}
export {};
