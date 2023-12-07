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
export type GiAtlasProps = typeof __propDef.props;
export type GiAtlasEvents = typeof __propDef.events;
export type GiAtlasSlots = typeof __propDef.slots;
export default class GiAtlas extends SvelteComponentTyped<GiAtlasProps, GiAtlasEvents, GiAtlasSlots> {
}
export {};
