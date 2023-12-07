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
export type TiArchiveProps = typeof __propDef.props;
export type TiArchiveEvents = typeof __propDef.events;
export type TiArchiveSlots = typeof __propDef.slots;
export default class TiArchive extends SvelteComponentTyped<TiArchiveProps, TiArchiveEvents, TiArchiveSlots> {
}
export {};
