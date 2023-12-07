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
export type FaAtlasProps = typeof __propDef.props;
export type FaAtlasEvents = typeof __propDef.events;
export type FaAtlasSlots = typeof __propDef.slots;
export default class FaAtlas extends SvelteComponentTyped<FaAtlasProps, FaAtlasEvents, FaAtlasSlots> {
}
export {};
