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
export type TiTagsProps = typeof __propDef.props;
export type TiTagsEvents = typeof __propDef.events;
export type TiTagsSlots = typeof __propDef.slots;
export default class TiTags extends SvelteComponentTyped<TiTagsProps, TiTagsEvents, TiTagsSlots> {
}
export {};
