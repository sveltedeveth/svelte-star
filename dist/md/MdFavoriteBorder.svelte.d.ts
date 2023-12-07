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
export type MdFavoriteBorderProps = typeof __propDef.props;
export type MdFavoriteBorderEvents = typeof __propDef.events;
export type MdFavoriteBorderSlots = typeof __propDef.slots;
export default class MdFavoriteBorder extends SvelteComponentTyped<MdFavoriteBorderProps, MdFavoriteBorderEvents, MdFavoriteBorderSlots> {
}
export {};
